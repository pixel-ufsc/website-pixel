// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import MembersGrid from '@components/page-about/members-grid/members-grid.component';
// Lib
import { getAllMembers } from '@lib/sanity.client';

export default function Sobre({ membersData }) {
    return (
        <PageContainer>
            <MembersGrid members={membersData} />
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
