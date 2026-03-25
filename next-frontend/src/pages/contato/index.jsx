// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import ContactContainer from '@components/page-contact/contact-container/contact-container.component';
import UnderMaintenance from '@components/ui/under-maintenance/under-maintenance.component';
import { getWhatsappUrl } from '@lib/sanity.client';
import { whatsappUrl } from '@lib/sanity.queries';

export default function Contato({ whatsappUrl }) {
    return (
        <PageContainer title={'Entre em contato'} description={'Entre em contato com a Pixel.'}>
            <ContactContainer whatsappUrl={whatsappUrl} />
        </PageContainer>
    );
}

export async function getStaticProps() {
    const query = await getWhatsappUrl();
    const whatsappUrl = query[0].data.whatsapp_url;
    console.log(whatsappUrl);

    return {
        props: {
            whatsappUrl
        },
    };
}
