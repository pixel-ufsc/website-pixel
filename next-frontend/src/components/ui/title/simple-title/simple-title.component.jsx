import styles from './simple-title.module.css';
import P from 'prop-types';

export default function SimpleTitle({ children, className, textColor, ...props }) {
    const id = {
        white: styles.white,
        purple: styles.purple,
        'purple-gradient': styles.purple_gradient,
    };

    return (
        <h1
            className={className ? `${styles.title} ${className}` : styles.title}
            id={textColor && id[textColor] ? id[textColor] : styles.purple}
            {...props}
        >
            {children}
        </h1>
    );
}

SimpleTitle.propTypes = {
    children: P.node.isRequired,
    className: P.string,
    fontSize: P.oneOf(['small', 'medium', 'large']),
    textColor: P.oneOf(['white', 'purple', 'purple-gradient']),
};
