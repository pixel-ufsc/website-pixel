import Link from 'next/link';
import styles from './link-button.module.css';

export default function LinkButton({ title, url, highlighted, ...props }) {
    return (
        <Link href={url} className={`${styles.link_button} ${highlighted && styles.highlighted}`} {...props}>
            <span>{title}</span>
        </Link>
    );
}
