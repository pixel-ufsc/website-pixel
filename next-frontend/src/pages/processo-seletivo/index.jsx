import styles from './processo-seletivo.module.css';
import Image from 'next/image';
import aboutUsImage from '@public/images/about-us.png';

// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import HighlightedTitle from '@components/ui/title/highlighted-title/highlighted-title.component';

export default function ProcessoSeletivo() {
    return (
        <PageContainer>
            <section className={styles.processoSeletivo}>
                <div>
                    <HighlightedTitle>Processo Seletivo</HighlightedTitle>
                    <p>
                        Nos últimos 8 anos, a Pixel buscou, por meio de um ambiente acolhedor e diverso,{' '}
                        <strong>proporcionar constante evolução aos seus membros e aos seus clientes.</strong>
                    </p>
                    <p>
                        Somos movidos por desafios e pelo desejo de vitória. Somos inconformados por natureza, porque
                        acreditamos que <strong>onde há vontade, há um caminho.</strong>
                    </p>
                    <p>Venha fazer parte do nosso time!</p>
                </div>
                <Image
                    src={aboutUsImage}
                    width={617}
                    height={617}
                    alt="Ilustração de quatro pessoas representando os membros da Pixel. No plano de fundo, tem-se uma página web com o logotipo da empresa."
                />
            </section>
            <a href="https://app.pipefy.com/public/form/jWOO-A1H" target="_blank" className={styles.subscribeBtn}>
                Inscreva-se
            </a>
        </PageContainer>
    );
}
