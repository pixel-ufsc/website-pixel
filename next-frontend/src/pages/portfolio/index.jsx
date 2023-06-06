import styles from './portifolio.module.css';

import PageContainer from '@components/layout/page-container/page-container.component';
import ProjectCard from '@components/ui/card/project-card/project-card.component';

import { getAllProjectsPreview, sanityClient } from '@lib/sanity.client';
import { useNextSanityImage } from 'next-sanity-image';

export default function Portfolio({ projectsPreviewData }) {
    return (
        <PageContainer>
            <div className={styles.contentWrapper}>
                <h1 className={styles.title}>
                    {'Explore os '}
                    <span className={styles.gradient}>projetos&nbsp;e&nbsp;produtos</span>
                    {'\n desenvolvidos'}
                </h1>
                <section className={styles.projectsGrid}>
                    {projectsPreviewData?.map((project, index) => {
                        const imageProps = useNextSanityImage(sanityClient, project?.data?.preview_image);
                        return (
                            <ProjectCard
                                key={index}
                                title={project?.data?.name}
                                tags={project?.data?.tags}
                                imageSrc={imageProps?.src}
                                href={`/portifolio/${project?.data?.slug?.current}`}
                            />
                        );
                    })}
                </section>
            </div>
        </PageContainer>
    );
}

export async function getStaticProps() {
    const projectsPreviewData = await getAllProjectsPreview();

    return {
        props: {
            projectsPreviewData,
        },
    };
}
