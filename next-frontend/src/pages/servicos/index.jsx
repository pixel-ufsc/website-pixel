// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import UnderMaintenance from '@components/ui/under-maintenance/under-maintenance.component';

export default function Servicos() {
    return (
        <PageContainer
            title={'Serviços'}
            description={'Somos especializados em desenvolvimento sites e soluções digitais.'}
        >
            <UnderMaintenance />
        </PageContainer>
    );
}
