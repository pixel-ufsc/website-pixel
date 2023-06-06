import styles from './project-card.module.css';

import CardFrame from '../card-frame/card-frame.component';

import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, tags, imageSrc, href, description, ...props }) {
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

            <div className={styles.text_content_wrapper}>
                {/* REMEMBER -> REMOVE TARGET ATRIBUTE FOR LINK */}
                <Link href={href} target="_blank">
                    <h3>{title}</h3>
                </Link>
                <p>{description}</p>
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
