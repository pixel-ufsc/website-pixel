// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import MembersGrid from '@components/page-about/members-grid/members-grid.component';
// Lib
import { getAllMembers } from '@lib/sanity.client';
import SectionDivider from '@components/ui/section-divider/section-divider.component';
import AboutPixel from '@components/page-about/about-pixel/about-pixel.component';
import AboutEJ from '@components/page-about/about-ej/about-ej.component';

export default function Sobre({ membersData }) {
    return (
        <PageContainer>
            <SectionDivider.pageBorder />
            <AboutPixel />
            <SectionDivider />
            <AboutEJ />
            <SectionDivider />
            <MembersGrid members={membersData} />
            <SectionDivider.pageBorder />
        </PageContainer>
    );
}

export async function getStaticProps() {
    const membersData = await getAllMembers();

    return {
        props: {
            membersData,
        },
    };
}
