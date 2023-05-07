// Lib
import { getAllDirectors, getAllSocialInfo } from '@lib/sanity.client';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import Directors from '@components/page-home/directors-members/directors.component';
import IntroContent from '@components/page-home/intro-content/intro-content.component';
import UnderMaintenance from '@components/ui/under-maintenance/under-maintenance.component';

export default function Home({ directorsData }) {
    return (
        <PageContainer>
            <IntroContent />
            <Directors directors={directorsData} />
            <UnderMaintenance />
        </PageContainer>
    );
}

export async function getStaticProps() {
    const socialData = await getAllSocialInfo();
    const directorsData = await getAllDirectors();

    return {
        props: {
            socialData,
            directorsData,
        },
    };
}
