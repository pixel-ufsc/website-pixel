import styles from './project-preview-card.module.css';
import Image from 'next/image';
import CardFrame from '../card-frame/card-frame.component';

export default function ProjectPreviewCard({ title, tags, image, href }) {
    // TODO - Adicionar link de redirecionamento para o projeto
    return (
        <CardFrame className={styles.container}>
            <div className={styles.image_wrapper}>
                <Image
                    fill
                    src={image}
                    alt={'Imagem de pré visualização do projeto ' + title}
                    quality={90}
                    className={styles.image}
                />
            </div>
            <div className={styles.title_wrapper}>
                <h3>{title}</h3>
                <div className={styles.tags_container}>
                    {tags.map((tag, index) => (
                        <span key={index}>
                            {tag}
                            {index != tags.length - 1 ? ' ∙ ' : ''}
                        </span>
                    ))}
                </div>
            </div>
        </CardFrame>
    );
}
