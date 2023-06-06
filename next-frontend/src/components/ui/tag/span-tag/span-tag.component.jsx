import styles from './span-tag.module.css';

export default function SpanTag({ textColor, backgroundColor, children, ...props }) {
    return (
        <span
            className={styles.tag}
            style={{
                color: textColor ? textColor : '#959595',
                backgroundColor: backgroundColor ? backgroundColor : '#EEEEEE',
            }}
            {...props}
        >
            {children}
        </span>
    );
}
