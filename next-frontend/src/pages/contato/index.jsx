// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import ContactContainer from '@components/page-contact/contact-container/contact-container.component';
import UnderMaintenance from '@components/ui/under-maintenance/under-maintenance.component';

export default function Contato() {
    return (
        <PageContainer>
            <UnderMaintenance />
            {/* <ContactContainer /> */}
        </PageContainer>
    );
}
