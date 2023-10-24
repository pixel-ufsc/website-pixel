import Image from 'next/image';
import styles from './loja.module.css';
import PageContainer from '@components/layout/page-container/page-container.component';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import productImage from './product.png';
import imageSVG from './image.svg';
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';
import GradientLongTitle from '@components/ui/title/gradient-long-title/gradient-long-title.component';
import LinkButton from '@components/ui/buttons/link-button/link-button.component';
import SectionDivider from '@components/ui/section-divider/section-divider.component';
import HoverableButton from '@components/ui/buttons/hoverable-button/hoverable-button.component';

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
                    <Image
                        className={styles.prodct_image}
                        src={productImage}
                        alt="xicarapixel"
                        width={530} // Set the width of the image
                        height={530} // Set the height of the image
                    />
                    <div className={styles.product_section_about}>
                        <h2 className={styles.product_section_about_title}>Caneca de café logo pixel</h2>
                        <p className={styles.caractry_text_propriety}>
                            Capacidade: <span className={styles.caractry_text}>325 ml</span>
                        </p>
                        <p className={styles.caractry_text_propriety}>
                            Medidas: <span className={styles.caractry_text}>X cm x Y cm</span>
                        </p>
                        <p className={styles.caractry_text_propriety}>
                            Material: <span className={styles.caractry_text}>Cerãmica</span>
                        </p>
                        <p className={styles.caractry_text_propriety}>
                            Cor: <span className={styles.caractry_text}>Branco</span>
                        </p>
                        <p className={styles.caractry_text_propriety}>
                            Microondas: <span className={styles.caractry_text}>Sim</span>
                        </p>
                        <div>
                            <button className={styles.buy_button}>
                                <span className={styles.buy_button_text}>R$29,80</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <SectionDivider />
            {/* <p>Jose - ultima sessao</p> */}

            <div className={styles.buy_section}>
                <div className={styles.content}>
                    <div className={styles.text_content}>
                        <SimpleTitle className={styles.title} textColor={'purple-gradient'}>
                            Comprar
                        </SimpleTitle>
                        <p>Está interessado em algum produto?</p>
                        <br />
                        <p>
                            Para adquirir os produtos Pixel, entre em nosso <strong>grupo no WhatsApp</strong>: todas as
                            informações acerca de disponibilidade de produtos, pagamento e envio estarão na{' '}
                            <strong>descrição</strong>.
                        </p>
                        <div className={styles.container_buttons}>
                            <a href="">Entrar no Grupo</a>
                        </div>
                    </div>
                    <div className={styles.image_content}>
                        <Image className={styles.svg_image} src={imageSVG} alt="auxImage" width={400} height={400} />
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}
