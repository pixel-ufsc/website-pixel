import styles from './project-card.module.css';
import Image from 'next/image';
import Link from 'next/link';
// Components
import CardFrame from '@components/ui/card/card-frame/card-frame.component';
import SpanTag from '@components/ui/tag/span-tag/span-tag.component';

export default function ProjectCard({ title, tags, imageSrc, href, description, ...props }) {
    return (
        <CardFrame className={styles.container} {...props}>
            {/* TODO - REMOVE TARGET ATRIBUTE FOR LINK */}
            <Link href={href} target="_blank">
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
                    <h3>{title}</h3>
                    {description && <p>{description}</p>}
                    {tags && tags.length > 0 && (
                        <div className={styles.tags_container}>
                            {tags.map((tag, index) => (
                                <SpanTag key={index}>{tag}</SpanTag>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </CardFrame>
    );
}
