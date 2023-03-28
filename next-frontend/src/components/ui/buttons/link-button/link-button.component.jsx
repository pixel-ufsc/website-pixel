import Link from 'next/link';
import styles from './link-button.module.css';

export default function LinkButton({ texto, link }) {
    return (
        <Link href={link} className={styles.link_button}>
            <span className={styles.link_button_text}>{texto}</span>
        </Link>
    );
}

