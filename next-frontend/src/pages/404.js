import styles from './../styles/404.module.css';
import Link from 'next/link';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';

export default function Custom404() {
    return (
        <PageContainer hasWhatsappButton={false}>
            <div className={styles.container}>
                <div className={styles.text_container}>
                    <span className={styles.tag}>Erro</span>
                    <SimpleTitle className={styles.title} textColor={'purple-gradient'}>
                        Ops, parece que essa página não existe...
                    </SimpleTitle>
                    <p>
                        Desculpe, não conseguimos encontrar a página que você estava procurando. Confira se o endereço
                        digitado está correto ou volte para a <Link href={'/'}>home</Link>.
                    </p>
                </div>

                <div className={styles.gradient_wrapper}>
                    <h1>404!</h1>
                </div>
            </div>
            <div className={styles.icon_wrapper}>
                <div id={styles.pixel_icon}></div>
            </div>
        </PageContainer>
    );
}
