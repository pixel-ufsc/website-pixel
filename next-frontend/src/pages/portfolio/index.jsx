// Components
import GradientLongTitle from '@components/ui/title/gradient-long-title/gradient-long-title.component';
import SectionDivider from '@components/ui/section-divider/section-divider.component';
import PageContainer from '@components/layout/page-container/page-container.component';
import PortfolioGrid from '@components/page-portfolio/portfolio-grid/portfolio-grid.component';
// Lib
import { getAllProjects } from '@lib/sanity.client';

export default function Portfolio({ projectsData }) {
    return (
        <PageContainer>
            <SectionDivider.pageBorder />
            <GradientLongTitle>
                {'Explore os '}
                <span>projetos&nbsp;e&nbsp;produtos</span>
                {' desenvolvidos'}
            </GradientLongTitle>
            <SectionDivider />
            <PortfolioGrid projectsData={projectsData} />
            <SectionDivider.pageBorder />
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
