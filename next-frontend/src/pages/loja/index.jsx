import Image from 'next/image';
import styles from './loja.module.css';
import PageContainer from '@components/layout/page-container/page-container.component';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import productImage from './product.png'
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
            <div className={styles.product_section}>
                <h1 className={styles.product_section}>Produtos</h1>
                <div className={styles.product_section_infos}>
                    <Image className={styles.prodct_image}
                        src={productImage}
                        alt="xicarapixel"
                        width={530} // Set the width of the image
                        height={530} // Set the height of the image
                    />
                    <div className={styles.product_section_about}>
                        <h2 className={styles.product_section_about_title}>Caneca de café logo pixel</h2>
                        <p className={styles.caractry_text_propriety}>Capacidade: <span className={styles.caractry_text}>325 ml</span></p>
                        <p className={styles.caractry_text_propriety}>Medidas: <span className={styles.caractry_text}>X cm x Y cm</span></p>
                        <p className={styles.caractry_text_propriety}>Material: <span className={styles.caractry_text}>Cerãmica</span></p>
                        <p className={styles.caractry_text_propriety}>Cor: <span className={styles.caractry_text}>Branco</span></p>
                        <p className={styles.caractry_text_propriety}>Microondas: <span className={styles.caractry_text}>Sim</span></p>
                        <div>
                            <button className={styles.buy_button}><span className={styles.buy_button_text}>R$29,80</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <p>Jose - ultima sessao</p>
        </PageContainer>
    );
}
