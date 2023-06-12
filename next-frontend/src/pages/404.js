import styles from './../styles/404.module.css';
import Link from 'next/link';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';
import SpanTag from '@components/ui/tag/span-tag/span-tag.component';

export default function Custom404() {
    return (
        <PageContainer
            hasWhatsappButton={false}
            title={'Página não encontrada'}
            description={'Desculpe, não conseguimos encontrar a página que você estava procurando.'}
        >
            <div className={styles.container}>
                <div className={styles.text_container}>
                    <SpanTag textColor={'#c57857'} backgroundColor={'#ffede8'}>
                        Erro
                    </SpanTag>
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
