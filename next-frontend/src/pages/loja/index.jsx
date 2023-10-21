import styles from './loja.module.css';
import PageContainer from '@components/layout/page-container/page-container.component';

export default function Shop() {
    return (
        <PageContainer
            title={'Loja Da Pixel'}
            description={'Loja de produtos da Empresa Júnior Pixel Soluções Digitais'}
            hasWhatsappButton={false}
        >
            <h1 className={styles.heading}>Loja Pixel</h1>
            <p>Luis - primeira sessao</p>
            <p>Gustavo - segunda sessao</p>
            <p>Jose - ultima sessao</p>
        </PageContainer>
    );
}
