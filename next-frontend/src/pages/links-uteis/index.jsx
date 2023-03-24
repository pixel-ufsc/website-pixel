// Assets
import PixelLogoHorizontalBranca from '@public/svgs/pixel/pixel-logo-horizontal-branca';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import WhatsappButton from '@components/ui/buttons/whatsapp-button/whatsapp-button.component';

export default function LinksUteis() {
    return (
        <>
            <PageContainer>
                <PixelLogoHorizontalBranca />
                <h1>Portfolio</h1>
            </PageContainer>
            <WhatsappButton />
        </>
    );
}

