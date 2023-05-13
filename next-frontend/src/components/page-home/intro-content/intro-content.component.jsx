import styles from './intro-content.module.css';
import Link from 'next/link';

export default function IntroContent() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                {'Desenvolvendo '}
                <span className={styles.gradient}>{'soluções digitais'}</span>
                {'\n que fazem a diferença'}
            </h1>
            {/* <Link href={'/servicos'} className={styles.link}>
                {'Conheça nossas soluções >'}
            </Link> */}
        </section>
    );
}
