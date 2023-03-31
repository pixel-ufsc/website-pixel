// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import MemberCard from '@components/ui/card/member-card/member-card.component';
import HoverableButton from '@components/ui/buttons/hoverable-button/hoverable-button.component';
import WhatsappButton from '@components/ui/buttons/whatsapp-button/whatsapp-button.component';

export default function Home() {
    return (
        <>
            <PageContainer>
                <h1>Home</h1>
                <MemberCard
                    imageSrc={'https://ejpixel.com.br/wp-content/uploads/2022/11/Andre-280x280.jpg'}
                    name={'Talis'}
                    role={'Diretor de Comercial'}
                />
                <MemberCard />
                <div style={{ margin: '20px 0', marginLeft: '5px' }}>
                    <HoverableButton href={'/servicos'} label={'Conheça nossos serviços'} arrowed />
                </div>
            </PageContainer>
            <WhatsappButton />
        </>
    );
}
