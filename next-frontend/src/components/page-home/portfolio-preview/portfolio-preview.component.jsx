import ProjectPreviewCard from '@components/ui/card/project-preview-card/project-preview-card.component';
import styles from './portfolio-preview.module.css';
import Link from 'next/link';
// Interfaces
import { useNextSanityImage } from 'next-sanity-image';
// Lib
import { sanityClient } from '@lib/sanity.client';
// Components
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';
import SliderCarousel from '@components/ui/slider-carousel/slider-carousel.component';

export default function PortfolioPreview({ projectsPreview }) {
    return (
        <section className={styles.container}>
            <div className={styles.title_container}>
                <SimpleTitle textColor={'purple-gradient'}>Nosso portfólio</SimpleTitle>
                <p>
                    Esses são alguns dos projetos que nós já realizamos. Descubra em mais detalhes os{' '}
                    <Link href={'/portfolio'}>nossos projetos</Link>.
                </p>
            </div>

            <SliderCarousel containerClassName={styles.slider_container} wrapperClassName={styles.slider_items_wrapper}>
                {projectsPreview?.map((project, index) => {
                    const imageProps = useNextSanityImage(sanityClient, project?.data?.preview_image);
                    return (
                        <ProjectPreviewCard
                            key={index}
                            title={project?.data?.name}
                            tags={project?.data?.tags}
                            imageSrc={imageProps?.src}
                            href={`/portfolio/${project?.data?.slug?.current}`}
                        />
                    );
                })}
            </SliderCarousel>
        </section>
    );
}
