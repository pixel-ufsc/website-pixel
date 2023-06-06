import styles from './span-tag.module.css';

export default function SpanTag({ textColor, backgroundColor, children }) {
    return (
        <span
            className={styles.tag}
            style={{
                color: textColor ? textColor : '#ACACAC',
                backgroundColor: backgroundColor ? backgroundColor : '#F9F9F9',
            }}
        >
            {children}
        </span>
    );
}
