import styles from './highlighted-title.module.css';

export default function HighlightedTitle({ children, className, fontSize = 'medium', ...props }) {
    return (
        <h1 className={className ? `${styles.title} ${className}` : styles.title} {...props}>
            <span className={styles.text}>{children}</span>
        </h1>
    );
}
