import styles from './hoverable-button.module.css';
import Link from 'next/link';
import P from 'prop-types';
// Assets
import SmallRightArrowIcon from '@public/svgs/icons/small-right-arrow';

export default function HoverableButton({ children, href, arrowed = true, ...props }) {
    return (
        <Link href={href ? href : '/'} className={styles.button} {...props}>
            {children}
            {arrowed && <SmallRightArrowIcon color={'#FFF'} className={styles.arrow} />}
        </Link>
    );
}

/* HoverableButton.propTypes = {
    children: P.node.isRequired,
}; */
