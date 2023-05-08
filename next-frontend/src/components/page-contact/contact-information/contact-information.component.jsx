import HighlightedTitle from '@components/ui/title/highlighted-title/highlighted-title.component';
import styles from './contact-information.module.css';
// Components
import WhatsappIcon from '@public/svgs/social-media/whatsapp';
import Image from 'next/image';
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';

export default function ContactInformation() {
    const iconSize = 22;

    return (
        <div className={styles.formasDeContatoContainer}>
            <div className={styles.contact_container}>
                <WhatsappIcon fill="#000" className={styles.icon} />

                <div className={styles.phone}>
                    <p>(48) 99144-7023</p>
                </div>
            </div>

            <div className={styles.contact_container}>
                <Image src="/mail.svg" alt="Ícone do e-mail" width={iconSize} height={iconSize} />

                <div className={styles.email_list}>
                    <p>
                        <strong>comercial</strong>@ejpixel.com.br
                    </p>
                    <p>
                        <strong>projetos</strong>@ejpixel.com.br
                    </p>
                    <p>
                        <strong>marketing</strong>@ejpixel.com.br
                    </p>
                    <p>
                        <strong>gestaointerna</strong>@ejpixel.com.br
                    </p>
                    <p>
                        <strong>dho</strong>@ejpixel.com.br
                    </p>
                    <p>
                        <strong>presidencia</strong>@ejpixel.com.br
                    </p>
                </div>
            </div>
        </div>
    );
}
