import Image from 'next/image';
import styles from './loja.module.css';
import PageContainer from '@components/layout/page-container/page-container.component';
import productImage from './product.png';
import imageSVG from './image.svg';
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';
import SectionDivider from '@components/ui/section-divider/section-divider.component';
import HoverableButton from '@components/ui/buttons/hoverable-button/hoverable-button.component';

export default function Shop() {
    return (
        <PageContainer
            title={'Loja Da Pixel'}
            description={'Loja de produtos da Empresa Júnior Pixel Soluções Digitais'}
            hasWhatsappButton={false}
        >
            <section className={styles.intro_loja_container}>
                <h1 className={styles.title}>
                    {'A'}
                    <span className={styles.gradient}> loja&nbsp;oficial</span>
                    {' dos\nprodutos Pixel'}
                </h1>
                <div className={styles.icon_wrapper}>
                    <div id={styles.pixel_icon}></div>
                </div>
            </section>
            <section className={styles.about_loja_container}>
                <SimpleTitle textColor={'purple-gradient'}>A Loja</SimpleTitle>
                <p className={styles.about_loja_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo mattis, sollicitudin lorem
                    vehicula, eleifend mi. Praesent egestas sit amet orci ut interdum. Nunc varius nulla elit, nec
                    suscipit erat pretium a. Vivamus ut velit sapien. Quisque vel pretium leo, nec sodales quam. Integer
                    imperdiet tempor tortor nec ornare.
                </p>
            </section>
            <SectionDivider />
            <div className={styles.product_section}>
                <SimpleTitle textColor={'purple-gradient'}>Produtos</SimpleTitle>
                <div className={styles.product_section_infos}>
                    <Image
                        className={styles.prodct_image}
                        src={productImage}
                        alt="Xícara à venda da Pixel."
                        width={500}
                        height={500}
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
                            Material: <span className={styles.caractry_text}>Cerâmica</span>
                        </p>
                        <p className={styles.caractry_text_propriety}>
                            Cor: <span className={styles.caractry_text}>Branco</span>
                        </p>
                        <p className={styles.caractry_text_propriety}>
                            Microondas: <span className={styles.caractry_text}>Sim</span>
                        </p>
                        <div>
                            <div className={styles.buy_button}>
                                <span className={styles.buy_button_text}>R$29,80</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SectionDivider />
            <div className={styles.buy_section}>
                <div className={styles.content}>
                    <div className={styles.text_content}>
                        <SimpleTitle className={styles.title} textColor={'purple-gradient'}>
                            Comprar
                        </SimpleTitle>
                        <p>Está interessado em algum produto?</p>
                        <div className={styles.image_content_mobile}>
                            <Image
                                className={styles.svg_image}
                                src={imageSVG}
                                alt="auxImage"
                                width={400}
                                height={400}
                            />
                        </div>
                        <br />
                        <p>
                            Para adquirir os produtos Pixel, entre em nosso <strong>grupo no WhatsApp</strong>: todas as
                            informações acerca de disponibilidade de produtos, pagamento e envio estarão na{' '}
                            <strong>descrição</strong>.
                        </p>
                        <HoverableButton className={styles.join_group_button} label="Entrar no Grupo" href={'/'} />
                    </div>
                    <div className={styles.image_content_desktop}>
                        <Image className={styles.svg_image} src={imageSVG} alt="auxImage" width={400} height={400} />
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}
