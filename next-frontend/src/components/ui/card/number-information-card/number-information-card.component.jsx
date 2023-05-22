import styles from './number-information-card.module.css';
import P from 'prop-types';
// Components
import CardFrame from '../card-frame/card-frame.component';

export default function NumberInformationCard({ title, subtitle, description, className, ...props }) {
    return (
        <CardFrame className={className ? `${styles.text_card} ${className}` : styles.text_card} {...props}>
            {title && <h2>{title}</h2>}
            {subtitle && <h3>{subtitle}</h3>}
            {description && <p>{description}</p>}
        </CardFrame>
    );
}

NumberInformationCard.propTypes = {
    title: P.string.isRequired,
    subtitle: P.string.isRequired,
    description: P.string.isRequired,
    className: P.string,
};
