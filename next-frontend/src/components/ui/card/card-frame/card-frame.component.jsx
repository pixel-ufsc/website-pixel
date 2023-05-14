import styles from './card-frame.module.css';

export default function CardFrame({ children, className, borderRadius, ...props }) {
    return (
        <div
            className={className ? `${styles.container} ${className}` : styles.container}
            style={{ borderRadius: borderRadius ? borderRadius : '10px' }}
            {...props}
        >
            {children}
        </div>
    );
}
