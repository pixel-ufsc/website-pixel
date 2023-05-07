import Link from 'next/link';
import styles from './selection-process-button.module.css';

export default function SelectionProcessButton() {
    return (
        <button className={styles.button}>
            <Link href={'/processo-seletivo'}>processo seletivo</Link>
        </button>
    );
}
