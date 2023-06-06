import styles from './gradient-long-title.module.css';

// Involve the text that should be highlighted with as a gradient with a <span> tag

export default function GradientLongTitle({ children, className, ...props }) {
    return (
        <div className={className ? `${styles.title} ${className}` : styles.title} {...props}>
            {children}
        </div>
    );
}
