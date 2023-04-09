// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import MembersGrid from '@components/page-about/members-grid/members-grid.component';
// Lib
import { getAllDirectors, getAllMembers } from '@lib/sanity.client';

export default function Sobre({ membersData }) {
    console.log('membersData', membersData);

    return (
        <PageContainer>
            <h1>Sobre</h1>
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
