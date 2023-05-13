import styles from './article-container.module.css';

export default function ArticleContainer({ children, className, ...props }) {
    return (
        <div className={className ? `${styles.container} ${className}` : styles.container} {...props}>
            {children}
        </div>
    );
}
