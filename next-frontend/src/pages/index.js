// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import MemberCard from '@components/ui/card/member-card/member-card.component';

export default function Home() {
    return (
        <PageContainer>
            <h1>Home</h1>
            <MemberCard
                imageSrc={'https://ejpixel.com.br/wp-content/uploads/2022/11/Andre-280x280.jpg'}
                name={'Talis'}
                role={'Diretor de Comercial'}
            />
            <MemberCard />
        </PageContainer>
    );
}
