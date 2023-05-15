import styles from './project-preview-card.module.css';
import Image from 'next/image';
import Link from 'next/link';
// Components
import CardFrame from '../card-frame/card-frame.component';

export default function ProjectPreviewCard({ title, tags, imageSrc, href, ...props }) {
    return (
        <CardFrame className={styles.container} {...props}>
            <div className={styles.image_wrapper}>
                {imageSrc && (
                    <Image
                        fill
                        sizes="(max-width: 400px) 80vw, 400px"
                        src={imageSrc}
                        alt={'Imagem de pré visualização do projeto ' + title}
                        quality={90}
                        className={styles.image}
                    />
                )}
            </div>

            <div className={styles.title_wrapper}>
                <Link href={href ? href : '/portfolio'}>
                    <h3>{title}</h3>
                </Link>
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
