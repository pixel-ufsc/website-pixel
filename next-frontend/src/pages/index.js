// Lib
import { getAllDirectors, getAllProjectsPreview, getAllSocialInfo } from '@lib/sanity.client';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import IntroContent from '@components/page-home/intro-content/intro-content.component';
import AboutUs from '@components/page-home/about-us/about-us.component';
import Directors from '@components/page-home/directors-members/directors.component';
import Services from '@components/page-home/services/services.component';
import PortfolioPreview from '@components/page-home/portfolio-preview/portfolio-preview.component';
import SectionDivider from '@components/ui/section-divider/section-divider.component';

export default function Home({ directorsData, projectsPreviewData }) {
    return (
        <PageContainer>
            <IntroContent />
            <AboutUs />
            <SectionDivider />
            <PortfolioPreview projectsPreview={projectsPreviewData} />
            <SectionDivider />
            <Services />
            <SectionDivider />
            <Directors directors={directorsData} />
        </PageContainer>
    );
}

export async function getStaticProps() {
    const socialData = await getAllSocialInfo();
    const directorsData = await getAllDirectors();
    const projectsPreviewData = await getAllProjectsPreview();

    return {
        props: {
            socialData,
            directorsData,
            projectsPreviewData,
        },
    };
}
