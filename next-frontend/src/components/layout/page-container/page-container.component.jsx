import styles from './page-container.module.css';
import Head from 'next/head';
// Components
import WhatsappButton from '@components/ui/buttons/whatsapp-button/whatsapp-button.component';
import MediaHeader from '@components/ui/header/media-header/media-header.component';
import Header from '@components/ui/header/header/header.component';
import Footer from '@components/ui/footer/footer/footer.component';

// Componente usado para envolver as páginas, evitando a repetição do código de Head das páginas e
// garatindo um fallback padrão para o título e descrição das páginas.

const fallback = {
    title: 'Pixel - Soluções Digitais',
    description:
        'Desenvolvendo soluções digitais que fazem a diferença. A Pixel é a empresa júnior de Ciências da Computação e de Sistemas de Informação da Universidade Federal de Santa Catarina (UFSC), sediada em Florianópolis.',
};

export default function PageContainer({
    title,
    description,
    children,
    hasHeader = true,
    hasFooter = true,
    hasWhatsappButton = true,
}) {
    return (
        <>
            <Head>
                <title>{title ? title : fallback.title}</title>
                <meta name="description" content={description ? description : fallback.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#82337e" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main id={styles.main}>
                {hasWhatsappButton && <WhatsappButton />}
                {hasHeader && <MediaHeader />}
                {hasHeader && <Header />}
                <div id={styles.page_content}>{children}</div>
                {hasFooter && <Footer />}
            </main>
        </>
    );
}
