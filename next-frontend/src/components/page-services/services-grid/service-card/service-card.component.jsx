import styles from './service-card.module.css';
import Image from 'next/image';
// Components
import CardFrame from '@components/ui/card/card-frame/card-frame.component';

export default function ServiceCard({ id, title, description, image, imageAlt }) {
    return (
        <CardFrame className={`${styles.card} ${styles.vertical}`} id={id}>
            <div className={styles.card_image_wrapper}>
                <Image fill src={image} alt={imageAlt} className={styles.card_image} />
            </div>

            <div className={styles.card_text}>
                <h2 className={styles.title}>{title}</h2>
                <p>{description}</p>
            </div>
        </CardFrame>
    );
}

ServiceCard.large = function ServiceCardLarge({ id, title, description, image, imageAlt }) {
    return (
        <CardFrame className={`${styles.card} ${styles.horizontal}`} id={id}>
            <div className={styles.card_text}>
                <h2 className={styles.title}>{title}</h2>
                <p>{description}</p>
            </div>

            <div className={styles.card_image_wrapper}>
                <Image fill src={image} alt={imageAlt} className={styles.card_image} />
            </div>
        </CardFrame>
    );
};
