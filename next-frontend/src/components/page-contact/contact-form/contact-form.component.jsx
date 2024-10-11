import styles from './contact-form.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// Components
import HoverableButton from '@components/ui/buttons/hoverable-button/hoverable-button.component';

export default function ContactForm({ className }) {
    const router = useRouter();
    const [formError, setFormError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        // Form validation
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const textMessage = formData.get('text-message');

        if (!name || !email || !phone || !textMessage) {
            setFormError('Por favor, preencha todos os campos');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setFormError('Por favor, informe um endereço de e-mail válido');
            return;
        }

        // Phone validation
        const phoneRegex = /^\d{10,11}$/; // Considerando números brasileiros de 10 a 11 dígitos
        if (!phoneRegex.test(phone)) {
            setFormError('Por favor, informe um número de telefone válido');
            return;
        }

        const response = await fetch('/.netlify/functions/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                textMessage,
            }),
        });

        const result = await response.json();
        console.log(result);
        if (result.success) {
            router.replace('/contato/submission?success=true');
        } else {
            alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
            console.error(result);
            router.replace('/contato/submission?success=false');
        }
    }

    return (
        <form
            className={className ? `${styles.form} ${className}` : styles.form}
            name="Form - Contact Page"
            onSubmit={handleSubmit}
        >
            <div className={styles.form_element}>
                <label className={styles.label} htmlFor="name">
                    Nome completo
                </label>
                <input className={styles.input} type="text" placeholder="Insira seu nome completo" name="name" />
            </div>

            <div className={styles.form_element}>
                <label className={styles.label} htmlFor="email">
                    E-mail
                </label>
                <input className={styles.input} type="text" placeholder="exemplo@email.com" name="email" />
            </div>

            <div className={styles.form_element}>
                <label className={styles.label} htmlFor="phone">
                    Número de telefone
                </label>
                <input className={styles.input} type="text" placeholder="(99) 99999-9999" name="phone" />
            </div>

            <div className={styles.form_element}>
                <label className={styles.label} htmlFor="text-message">
                    Mensagem
                </label>
                <textarea className={styles.textarea} placeholder="Escreva aqui mensagem..." name="text-message" />
                <label className={styles.checkbox_label}>
                    Ao prosseguir, você concorda com nossos os nossos <Link href={'/portfolio'}>termos de uso</Link> e{' '}
                    <Link href={'/portfolio'}>política de privacidade</Link>.
                </label>
            </div>

            <div className={styles.send_container}>
                <label className={styles.error_label}>{formError}</label>
                <HoverableButton label="Enviar mensagem" type="submit" arrowed={true} id={styles.submit_button} />
            </div>
        </form>
    );
}
