import styles from './project-card.module.css';
import Link from 'next/link';
import CardFrame from '../card-frame/card-frame.component';
import Image from 'next/image';

export default function ProjectCard({ title, tags, imageSrc, href, ...props }) {
    return (
        <CardFrame className={styles.container} {...props}>
            <div className={styles.image_wrapper}>
                {imageSrc && (
                    <Image
                        fill
                        sizes="(max-width: 640px) 80vw, 640px"
                        src={imageSrc}
                        alt={'Imagem do projeto ' + title}
                        quality={90}
                        className={styles.image}
                    />
                )}
            </div>

            <div className={styles.title_wrapper}>
                <Link href={href}>
                    <h3>{title}</h3>
                </Link>
                <p>Possibilita que as informações sejam divulgadas.</p>
                {tags && tags.length > 0 && (
                    <div className={styles.tags_container}>
                        {tags.map((tag, index) => (
                            <span key={index}>
                                {tag}
                                {index != tags.length - 1 ? ' ∙ ' : ''}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </CardFrame>
    );
}
