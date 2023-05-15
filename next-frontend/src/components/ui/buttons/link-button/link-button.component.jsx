import Link from 'next/link';
import styles from './link-button.module.css';

export default function LinkButton({ title, url, ...props }) {
    return (
        <Link href={url} className={styles.link_button} {...props}>
            <span className={styles.link_button_text}>{title}</span>
        </Link>
    );
}
