import WhatsappIcon from '@public/svgs/social-media/whatsapp';
import Image from 'next/image'
import styles from './formas-de-contato.module.css'

export default function FormasDeContato() {
    const iconSize = 20;

    return(
        <div className={styles.formasDeContatoContainer}>
            <div className={styles.formaDeContato}>
                <div className={styles.emailIconContainer}>
                    <Image 
                        src="/mail.png" 
                        alt="Ícone do e-mail"
                        width={iconSize}
                        height={iconSize}
                    />
                </div>
                <div className={styles.emailsListContainer}>
                    <p>Entre em contato com as seguintes áreas:</p>
                    <p><strong>comercial</strong>@ejpixel.com.br,</p>
                    <p><strong>projetos</strong>@ejpixel.com.br,</p>
                    <p><strong>marketing</strong>@ejpixel.com.br,</p>
                    <p><strong>gestaointerna</strong>@ejpixel.com.br,</p>
                    <p><strong>dho</strong>@ejpixel.com.br,</p>
                    <p><strong>presidencia</strong>@ejpixel.com.br</p>
                </div>
            </div>
            <div className={styles.formaDeContato}>
                <div className={styles.phoneIconContainer}>
                    <WhatsappIcon fill="#000" className={styles.icon}/>
                </div>
                <div className={styles.phoneNumberContainer}>
                    <p>48 99144-7023</p>
                </div>
            </div>
        </div>
    )
}