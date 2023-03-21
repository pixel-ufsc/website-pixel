// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import Card from '@components/ui/card/members-card/members-card.component';

export default function Home() {
    return (
        <PageContainer>
            <h1>Home</h1>
            <Card
                imageSrc={'https://ejpixel.com.br/wp-content/uploads/2022/11/Andre-280x280.jpg'}
                name={'Talis'}
                role={'Diretor de Comercial'}
            />
            <Card />
        </PageContainer>
    );
}
