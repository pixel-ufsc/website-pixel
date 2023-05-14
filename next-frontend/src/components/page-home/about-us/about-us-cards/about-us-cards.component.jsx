import styles from './about-us-cards.module.css';
// Components
import CardFrame from '@components/ui/card/card-frame/card-frame.component';
// Assets
import PixelLogoHorizontal from '@public/svgs/pixel/pixel-logo-horizontal';

export default function AboutUsCards() {
    // Calculate how many years of existence Pixel has based on its foundation (21/08/2013)
    const getYearsOfExistence = () => {
        const currentDate = new Date();
        const foundationDate = new Date(2013, 7, 21);
        const yearsOfExistence = currentDate.getFullYear() - foundationDate.getFullYear();

        return yearsOfExistence;
    };

    return (
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
    );
}
