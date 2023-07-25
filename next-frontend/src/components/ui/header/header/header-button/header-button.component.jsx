import styles from './header-button.module.css';
import Link from 'next/link';
import P from 'prop-types';

export default function HeaderButton({ children, href, selected, ...props }) {
    return (
        <Link href={href} className={selected ? `${styles.button} ${styles.selected}` : styles.button} {...props}>
            {children}
        </Link>
    );
}

HeaderButton.propTypes = {
    children: P.node.isRequired,
    href: P.string,
    selected: P.bool,
};

HeaderButton.highlighted = function HighlightedHeaderButton({ children, href, ...props }) {
    return (
        <Link href={href} className={styles.highlighted_button} {...props}>
            {children}
        </Link>
    );
};
