import styles from './contact-form.module.css';
// Components
import HoverableButton from '@components/ui/buttons/hoverable-button/hoverable-button.component';

export default function ContactForm() {
    return (
        <form
            className={styles.form}
            name="Form - Contact Page"
            action="contato/submission?success=true"
            method="POST"
            data-netlify="true"
            onSubmit={() => console.log('Form submitted!')}
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
            </div>
            <HoverableButton label="Enviar mensagem" type="submit" arrowed={true} id={styles.submit_button} />
        </form>
    );
}
