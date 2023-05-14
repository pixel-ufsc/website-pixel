import PageContainer from '@components/layout/page-container/page-container.component';
import styles from './../styles/404.module.css';
import Link from 'next/link';

export default function Custom404() {
    return (
        <PageContainer>
            <section className={styles.contentWrapper}>
                <div className={styles.textContainer}>
                    <span>Erro</span>
                    <h1>Ops, parece que essa página não existe...</h1>
                    <p>Desculpe, não conseguimos encontrar a página que você estava procurando.</p>
                    <p>
                        Confira se o endereço digitado está correto ou volte para a <Link href="/">homepage</Link>.
                    </p>
                </div>
                <p className={styles.custom404}>404!</p>
            </section>
        </PageContainer>
    );
}
