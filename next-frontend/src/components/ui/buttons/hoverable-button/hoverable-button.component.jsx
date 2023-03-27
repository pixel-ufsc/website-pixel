import Link from 'next/link';

// Assets
import styles from './hoverable-button.module.css';

export default function HoverableButton() {
    return (
        <Link href="/servicos" className={styles.button}>
            Conheça nossas soluções &gt;
        </Link>
    );
}
