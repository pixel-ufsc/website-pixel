import styles from './servicos.module.css';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import ServicesGrid from '@components/page-services/services-grid/services-grid.component';
import SectionDivider from '@components/ui/section-divider/section-divider.component';
import GradientLongTitle from '@components/ui/title/gradient-long-title/gradient-long-title.component';

export default function Servicos() {
    return (
        <PageContainer
            title={'Serviços'}
            description={'Somos especializados em desenvolvimento sites e soluções digitais.'}
        >
            <SectionDivider.pageBorder />
            <GradientLongTitle>
                {'Desenvolva o '}
                <span>seu&nbsp;website</span>
                {' com a Pixel!'}
            </GradientLongTitle>
            <SectionDivider />
            <ServicesGrid />
        </PageContainer>
    );
}
