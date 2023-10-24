import styles from './project-card.module.css';
import Image from 'next/image';
import Link from 'next/link';
// Components
import CardFrame from '@components/ui/card/card-frame/card-frame.component';
import SpanTag from '@components/ui/tag/span-tag/span-tag.component';

export default function ProjectCard({ title, dateFinished, tags, imageSrc, href, description, ...props }) {
    // From the date received from sanity (e.g. '2023-07-29'), extract the year (e.g. '2023')
    function getYearFromDate(date) {
        return date.split('-')[0];
    }

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
                    <h3>
                        {title}
                        {dateFinished && <span>{getYearFromDate(dateFinished)}</span>}
                    </h3>
                    {description && <p>{description}</p>}
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
            </Link>
        </CardFrame>
    );
}
