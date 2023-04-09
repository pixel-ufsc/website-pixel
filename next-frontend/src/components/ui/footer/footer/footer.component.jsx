import styles from './footer.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer({ className, ...props }) {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <footer className={className ? `${styles.footer} ${className}` : `${styles.footer}`} {...props}>
            <div className={styles.links_container}>
                <Link
                    href="/politica-de-privacidade"
                    className={pathname === '/politica-de-privacidade' ? `${styles.active}` : ''}
                >
                    Política de Privacidade
                </Link>
                <Link href="/termo-de-uso" className={pathname === '/termo-de-uso' ? `${styles.active}` : ''}>
                    Termo de Uso
                </Link>
            </div>
            <p>&copy; 2023 Pixel - Soluções Digitais.</p>
        </footer>
    );
}
