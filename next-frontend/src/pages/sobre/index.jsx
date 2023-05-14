import styles from './sobre.module.css';
import Image from 'next/image';
import aboutUsImage from '@public/images/about-us.png';

// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import MembersGrid from '@components/page-about/members-grid/members-grid.component';
import HighlightedTitle from '@components/ui/title/highlighted-title/highlighted-title.component';
// Lib
import { getAllMembers } from '@lib/sanity.client';

export default function Sobre({ membersData }) {
    return (
        <PageContainer>
            <section className={styles.aboutUsIntro}>
                <div>
                    <HighlightedTitle>Sobre nós</HighlightedTitle>
                    <p>
                        Somos uma empresa formada por jovens que trabalham acreditando no propósito da Pixel: construir
                        soluções digitais que impactem positivamente na vida das pessoas. A Pixel se estrutura em 6
                        (seis) diretorias: <strong>Presidência</strong> (trabalha com o relacionamento externo da
                        empresa), <strong>Gestão Interna</strong> (cuida da administração geral e financeira),{' '}
                        <strong>Desenvolvimento Humano e Organizacional</strong> (cuida do processo seletivo,
                        acompanhamento e capacitação de membros), <strong>Projetos</strong> (gerencia os processos de
                        produção e de gestão das equipes executoras), <strong>Comercial</strong> (encarregada pelas
                        vendas e relacionamento com o cliente) e, por fim, <strong>Marketing</strong> (cuida da criação
                        de conteúdos e de ações de divulgação).
                    </p>
                </div>
                <Image
                    src={aboutUsImage}
                    width={617}
                    height={617}
                    alt="Ilustração de quatro pessoas representando os membros da Pixel. No plano de fundo,, tem-se uma página web com o logotipo da empresa."
                />
            </section>
            <section className={styles.members}>
                <HighlightedTitle>Nossos membros</HighlightedTitle>
                <MembersGrid members={membersData} />
            </section>
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
