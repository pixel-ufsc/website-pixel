import styles from './about-us-cards.module.css';
// Components
import CardFrame from '@components/ui/card/card-frame/card-frame.component';
import NumberInformationCard from '@components/ui/card/number-information-card/number-information-card.component';
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
            <NumberInformationCard
                title={'+50'}
                subtitle={'projetos\u00A0realizados'} // \u00A0 is a non-breaking space
                description={'Mais de 50 projetos dos mais variados tipos já realizados'}
                className={styles.card}
            />
            <NumberInformationCard
                title={'9.5'}
                subtitle={'net\u00A0promoter\u00A0score'} // \u00A0 is a non-breaking space
                description={'Nossos clientes aprovam nossos serviços'}
                className={styles.card}
            />
            <NumberInformationCard
                title={getYearsOfExistence()}
                subtitle={'anos\u00A0de\u00A0sucesso'} // \u00A0 is a non-breaking space
                description={'Desde 2013 oferecendo serviços de alta qualidade'}
                className={styles.card}
            />
            <CardFrame className={`${styles.card} ${styles.logo_card}`}>
                <PixelLogoHorizontal className={styles.pixel_logo} />
            </CardFrame>
        </div>
    );
}
