import Head from 'next/head';

// Assets
import styles from './page-container.module.css';

// Componente usado para envolver as páginas, evitando a repetição do código de Head das páginas e
// garatindo um fallback padrão para o título e descrição das páginas.

const fallback = {
    title: 'Pixel - Soluções Digitais',
    description:
        'Desenvolvendo soluções digitais que fazem a diferença. A Pixel é a empresa júnior de Ciências da Computação e de Sistemas de Informação da Universidade Federal de Santa Catarina (UFSC), sediada em Florianópolis.',
};

export default function PageContainer({ title, description, children }) {
    return (
        <>
            <Head>
                <title>{title ? title : fallback.title}</title>
                <meta name="description" content={description ? description : fallback.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.page_container}>{children}</main>
        </>
    );
}
