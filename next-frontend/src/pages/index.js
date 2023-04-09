// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import MemberCard from '@components/ui/card/member-card/member-card.component';
import HoverableButton from '@components/ui/buttons/hoverable-button/hoverable-button.component';
import WhatsappButton from '@components/ui/buttons/whatsapp-button/whatsapp-button.component';
// Lib
import { getAllDirectors, getAllMembers } from '@lib/sanity.client';

export default function Home({ members, directors }) {
    return (
        <PageContainer>
            <h1>Home</h1>
        </PageContainer>
    );
}

export async function getStaticProps() {
    const members = await getAllMembers();
    const directors = await getAllDirectors();

    return {
        props: {
            members,
            directors,
        },
    };
}
