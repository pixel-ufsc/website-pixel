import styles from './formulario-contato.module.css'

export default function FormularioContato() {
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="Nome completo" />
            <input className={styles.input} type="text" placeholder="Seu e-mail" />
            <input className={styles.input} type="text" placeholder="Número de telefone" />

            <textarea className={styles.textarea} placeholder="Mensagem"></textarea>
        </form>
    )
}