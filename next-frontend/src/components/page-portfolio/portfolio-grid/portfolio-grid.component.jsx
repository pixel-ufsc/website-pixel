import styles from './portfolio-grid.module.css';
// Interfaces
import { useNextSanityImage } from 'next-sanity-image';
// Lib
import { sanityClient } from '@lib/sanity.client';
import ProjectCard from '@components/ui/card/project-card/project-card.component';

export default function PortfolioGrid({ className, projectsData, ...props }) {
    return (
        <section className={className ? `${styles.container} ${className}` : styles.container} {...props}>
            <div className={styles.grid}>
                {projectsData?.map((project, index) => {
                    const imageProps = useNextSanityImage(sanityClient, project?.data?.preview_image);
                    return (
                        <ProjectCard
                            key={index}
                            title={project?.data?.name}
                            tags={project?.data?.tags}
                            imageSrc={imageProps?.src}
                            dateFinished={project?.data?.date_finished}
                            // TODO - href={`/portifolio/${project?.data?.slug?.current}`} -> change href to this url
                            href={project?.data?.url}
                            description={project?.data?.description}
                        />
                    );
                })}
            </div>
        </section>
    );
}
