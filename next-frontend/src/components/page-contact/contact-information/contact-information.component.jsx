import styles from './contact-information.module.css';
// Components
import { MdOutlineWhatsapp } from 'react-icons/md';
import { VscMail } from 'react-icons/vsc';

export default function ContactInformation({ className }) {
    const iconSize = 48;

    return (
        <div className={className ? `${styles.container} ${className}` : styles.container}>
            <div className={styles.contact_element}>
                <MdOutlineWhatsapp className={styles.icon} />
                <div className={styles.description}>
                    <h2>Nosso WhatsApp</h2>
                    <p>
                        Envie uma mensagem pelo nosso WhatsApp através do número{' '}
                        <a href="https://wa.me/message/PB4N2GQBAAI4N1" target="_blank">
                            +55 (48) 9209-2256
                        </a>
                        .
                    </p>
                </div>
            </div>

            <div className={styles.contact_element}>
                <VscMail className={styles.icon} />
                <div className={styles.description}>
                    <h2>Comunicações gerais</h2>
                    <p>
                        Entre em contato através do email de <a href="mailto:comercial@ejpixel.com.br?">comercial</a>,{' '}
                        <a href="mailto:projetos@ejpixel.com.br?">projetos</a>,{' '}
                        <a href="mailto:marketing@ejpixel.com.br?">marketing</a>,{' '}
                        <a href="mailto:gestaointerna@ejpixel.com.br?">gestaointerna</a>,{' '}
                        <a href="mailto:dho@ejpixel.com.br?">dho</a> e{' '}
                        <a href="mailto:presidencia@ejpixel.com.br?">presidencia</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
