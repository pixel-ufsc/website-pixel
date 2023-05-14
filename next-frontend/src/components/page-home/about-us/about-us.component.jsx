import CardFrame from '@components/ui/card/card-frame/card-frame.component';
import styles from './about-us.module.css';
// Components
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';
import PixelLogoHorizontal from '@public/svgs/pixel/pixel-logo-horizontal';
import AboutUsCards from './about-us-cards/about-us-cards.component';

export default function AboutUs() {
    return (
        <section className={styles.container}>
            <div className={styles.about_description}>
                <SimpleTitle textColor={'purple-gradient'}>Sobre nós</SimpleTitle>
                <p>
                    A Pixel é a empresa júnior de Ciências da Computação e de Sistemas de Informação da Universidade
                    Federal de Santa Catarina (UFSC), sediada em Florianópolis. A empresa, fundada em 2013, é formada
                    por membros acadêmicos da Universidade, que buscam, por meio da paixão por aprender, desenvolver
                    empreendedorismo e criar soluções digitais que façam a diferença na vida de nossos clientes.
                </p>
            </div>

            <AboutUsCards />
        </section>
    );
}
