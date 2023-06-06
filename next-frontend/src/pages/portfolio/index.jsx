import styles from './portifolio.module.css';

import PageContainer from '@components/layout/page-container/page-container.component';
import ProjectCard from '@components/ui/card/project-card/project-card.component';

import { getAllProjects, sanityClient } from '@lib/sanity.client';
import { useNextSanityImage } from 'next-sanity-image';

export default function Portfolio({ projectsData }) {
    return (
        <PageContainer>
            <div className={styles.contentWrapper}>
                <h1 className={styles.title}>
                    {'Explore os '}
                    <span className={styles.gradient}>projetos&nbsp;e&nbsp;produtos</span>
                    {'\n desenvolvidos'}
                </h1>
                <section className={styles.projectsGrid}>
                    {projectsData?.map((project, index) => {
                        const imageProps = useNextSanityImage(sanityClient, project?.data?.preview_image);
                        return (
                            <ProjectCard
                                key={index}
                                title={project?.data?.name}
                                tags={project?.data?.tags}
                                imageSrc={imageProps?.src}
                                // href={`/portifolio/${project?.data?.slug?.current}`} REMEMBER -> change href to this url
                                href={project?.data?.url}
                                description={project?.data?.description}
                            />
                        );
                    })}
                </section>
            </div>
        </PageContainer>
    );
}

export async function getStaticProps() {
    const projectsData = await getAllProjects();

    return {
        props: {
            projectsData,
        },
    };
}
