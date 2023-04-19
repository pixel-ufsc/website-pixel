import styles from './contact-form.module.css';

export default function ContactForm() {
    return (
        <form className={styles.form} action="/sucesso" method="POST" data-netlify="true">
            <input className={styles.input} type="text" placeholder="Nome completo" name="name" />
            <input className={styles.input} type="text" placeholder="Seu e-mail" name="email" />
            <input className={styles.input} type="text" placeholder="Número de telefone" name="phone" />
            <textarea className={styles.textarea} placeholder="Mensagem" name="text-message" />
            <button className={styles.button} type="submit">
                Enviar
            </button>
        </form>
    );
}
