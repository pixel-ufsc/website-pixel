import styles from './contact-form.module.css';

export default function ContactForm() {
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="Nome completo" />
            <input className={styles.input} type="text" placeholder="Seu e-mail" />
            <input className={styles.input} type="text" placeholder="Número de telefone" />

            <textarea className={styles.textarea} placeholder="Mensagem"></textarea>
        </form>
    );
}
