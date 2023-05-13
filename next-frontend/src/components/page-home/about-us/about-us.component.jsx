import CardFrame from '@components/ui/card/card-frame/card-frame.component';
import styles from './about-us.module.css';
// Components
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';
import PixelLogoHorizontal from '@public/svgs/pixel/pixel-logo-horizontal';

export default function AboutUs() {
    // Calculate how many years of existence Pixel has based on its foundation (21/08/2013)
    const getYearsOfExistence = () => {
        const currentDate = new Date();
        const foundationDate = new Date(2013, 7, 21);
        const yearsOfExistence = currentDate.getFullYear() - foundationDate.getFullYear();

        return yearsOfExistence;
    };

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

            <div className={styles.stats}>
                <CardFrame className={`${styles.card} ${styles.text_card}`}>
                    <h2>+50</h2>
                    <h3>projetos&nbsp;realizados</h3>
                    <p>Mais de 50 projetos dos mais variados tipos já realizados</p>
                </CardFrame>
                <CardFrame className={`${styles.card} ${styles.text_card}`}>
                    <h2>9.5</h2>
                    <h3>net&nbsp;promoter&nbsp;score</h3>
                    <p>Nossos clientes aprovam nossos serviços</p>
                </CardFrame>
                <CardFrame className={`${styles.card} ${styles.text_card}`}>
                    <h2>{getYearsOfExistence()}</h2>
                    <h3>anos&nbsp;de&nbsp;sucesso</h3>
                    <p>Desde 2013 oferecendo serviços de alta qualidade</p>
                </CardFrame>
                <CardFrame className={`${styles.card} ${styles.logo_card}`}>
                    <PixelLogoHorizontal className={styles.pixel_logo} />
                </CardFrame>
            </div>
        </section>
    );
}
