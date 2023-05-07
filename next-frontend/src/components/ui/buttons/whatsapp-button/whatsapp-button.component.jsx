import styles from './whatsapp-button.module.css';

// assets
import WhatsappIcon from '@public/svgs/social-media/whatsapp';

export default function WhatsappButton() {
    return (
        <a className={styles.button} href="https://wa.me/554891447023" target="_blank">
            <WhatsappIcon className={styles.icon} />
        </a>
    );
}
