import styles from './hoverable-button.module.css';
import Link from 'next/link';
import P from 'prop-types';
// Assets
import SmallRightArrowIcon from '@public/svgs/icons/small-right-arrow';

export default function HoverableButton({ label, href, arrowed, className, ...props }) {
    return (
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
    label: P.node.isRequired,
    href: P.string,
    arrowed: P.bool,
};
