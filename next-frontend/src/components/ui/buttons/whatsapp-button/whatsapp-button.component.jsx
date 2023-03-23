import styles from './whatsapp-button.module.css';

// assets
import WhatsappIcon from '@public/svgs/social-media/whatsapp';

// hooks
import { useEffect, useState } from 'react';

export default function WhatsappButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsVisible(() => true);
        }, 3000);

        return () => {
            setIsVisible(() => false);
            clearTimeout(timeOut);
        };
    }, []);

    return (
        <a
            className={isVisible ? `${styles.button} ${styles.button_on_screen}` : `${styles.button}`}
            href="https://wa.a/p069um"
            target="_blank"
        >
            <WhatsappIcon className={styles.icon} />
        </a>
    );
}
