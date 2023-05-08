import styles from './hoverable-button.module.css';
import Link from 'next/link';
import P from 'prop-types';
// Assets
import SmallRightArrowIcon from '@public/svgs/icons/small-right-arrow';

export default function HoverableButton({ type, label, href, arrowed, className, ...props }) {
    return type == 'submit' ? (
        <button className={className ? `${styles.button} ${className}` : styles.button} {...props}>
            {label}
            {arrowed && <SmallRightArrowIcon color={'#FFF'} className={styles.arrow} />}
        </button>
    ) : (
        <Link
            href={href ? href : '/'}
            className={className ? `${styles.button} ${className}` : styles.button}
            {...props}
        >
            {label}
            {arrowed && <SmallRightArrowIcon color={'#FFF'} className={styles.arrow} />}
        </Link>
    );
}

HoverableButton.propTypes = {
    type: P.oneOf(['button', 'submit', undefined]),
    label: P.node.isRequired,
    href: P.string,
    arrowed: P.bool,
};
