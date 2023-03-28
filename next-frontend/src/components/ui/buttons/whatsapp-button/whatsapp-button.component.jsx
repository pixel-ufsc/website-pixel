import styles from './whatsapp-button.module.css';

// assets
import WhatsappIcon from '@public/svgs/social-media/whatsapp';

// hooks
import { useEffect, useState } from 'react';

export default function WhatsappButton() {
    return (
        <a className={styles.button} href="https://wa.a/p069um" target="_blank">
            <WhatsappIcon className={styles.icon} />
        </a>
    );
}
