import styles from './section-divider.module.css';
import P from 'prop-types';

export default function SectionDivider({ amount }) {
    return <div className={styles.divider}></div>;
}

SectionDivider.pageBorder = function PageBorder() {
    return <div className={styles.page_border}></div>;
};

SectionDivider.propTypes = {
    amount: P.number,
};
