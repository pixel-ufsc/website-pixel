import styles from './services-grid.module.css';
// Components
import CardFrame from '@components/ui/card/card-frame/card-frame.component';
import Image from 'next/image';

export default function ServicesGrid() {
    return (
        <section className={styles.container}>
            <div className={styles.grid}>
                <CardFrame className={styles.card}>
                    <div className={styles.card_image_wrapper}>
                        <Image
                            fill
                            src={'/images/services/responsivity-image.png'}
                            alt={'Website'}
                            className={styles.card_image}
                        />
                    </div>

                    <div className={styles.card_text}>
                        <h2 className={styles.title}>Design responsivo</h2>
                        <p>Seu site com um design nítido e responsivo que o torna perfeito em todos os dispositivos.</p>
                    </div>
                </CardFrame>
                <CardFrame className={styles.card}>Teste</CardFrame>
                <CardFrame className={styles.card}>Teste</CardFrame>
            </div>
        </section>
    );
}
