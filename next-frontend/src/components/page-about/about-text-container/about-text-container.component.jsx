import styles from './about-text-container.module.css';

export default function AboutTextContainer({ children }) {
    return <div className={styles.container}>{children}</div>;
}
