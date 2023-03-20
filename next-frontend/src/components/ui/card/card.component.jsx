import P from 'prop-types';
import styles from './card.module.css'

export default function Card ({imageSrc, name, role}) {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.imageContainer}>
                <img className={styles.memberPic} src={imageSrc} alt="imagem" />
            </div>
            <div className={styles.textContainer}>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}