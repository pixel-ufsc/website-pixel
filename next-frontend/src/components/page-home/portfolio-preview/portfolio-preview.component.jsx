import ProjectPreviewCard from '@components/ui/card/project-preview-card/project-preview-card.component';
import styles from './portfolio-preview.module.css';
import Link from 'next/link';
// Components
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';
import SliderCarousel from '@components/ui/slider-carousel/slider-carousel.component';

export default function PortfolioPreview() {
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
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
                <ProjectPreviewCard
                    title={'Projeto 1'}
                    tags={['WordPress', 'React', 'Website']}
                    image={'https://ejpixel.com.br/wp-content/uploads/2021/07/toque.png'}
                    href={'/'}
                />
            </SliderCarousel>
        </section>
    );
}
