import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';
import styles from './about-information-section.module.css';
import AboutUsCards from '@components/page-home/about-us/about-us-cards/about-us-cards.component';
import NumberInformationCard from '@components/ui/card/number-information-card/number-information-card.component';

export default function AboutInformationSection() {
    // Calculate how many years of existence Pixel has based on its foundation (21/08/2013)
    const getYearsOfExistence = () => {
        const currentDate = new Date();
        const foundationDate = new Date(2013, 7, 21);
        const yearsOfExistence = currentDate.getFullYear() - foundationDate.getFullYear();

        return yearsOfExistence;
    };

    return (
        <section className={styles.container}>
            <div className={styles.about_text_container}>
                <div className={styles.text_container}>
                    <SimpleTitle textColor={'purple-gradient'}>Sobre a Pixel</SimpleTitle>
                    <p>
                        A Pixel é uma empresa de desenvolvimento de software que atua no mercado desde 2013. Somos uma
                        empresa formada por jovens que trabalham acreditando no propósito da Pixel: construir soluções
                        digitais que impactem positivamente na vida das pessoas.
                        <br />A Pixel se estrutura em 6 diretorias: Presidência (trabalha com o relacionamento externo
                        da empresa), Gestão Interna (cuida da administração geral e financeira), Desenvolvimento Humano
                        e Organizacional (cuida do processo seletivo, acompanhamento e capacitação de membros), Projetos
                        (gerencia os processos de produção e de gestão das equipes executoras), Comercial (encarregada
                        pelas vendas e relacionamento com o cliente) e, por fim, Marketing (cuida da criação de
                        conteúdos e de ações de divulgação).
                    </p>
                </div>

                <div className={styles.card_container}>
                    <NumberInformationCard
                        title={'+50'}
                        subtitle={'projetos\u00A0realizados'} // \u00A0 is a non-breaking space
                        description={'Mais de 50 projetos dos mais variados tipos já realizados'}
                        className={styles.card}
                    />
                    <NumberInformationCard
                        title={'9.5'}
                        subtitle={'net\u00A0promoter\u00A0score'} // \u00A0 is a non-breaking space
                        description={'Nossos clientes aprovam nossos serviços'}
                        className={styles.card}
                    />
                    <NumberInformationCard
                        title={getYearsOfExistence()}
                        subtitle={'anos\u00A0de\u00A0sucesso'} // \u00A0 is a non-breaking space
                        description={'Desde 2013 oferecendo serviços de alta qualidade'}
                        className={styles.card}
                    />
                    <NumberInformationCard
                        title={'20+'}
                        subtitle={'membros\u00A0ativos'} // \u00A0 is a non-breaking space
                        description={'Uma equipe trabalhando para o sucesso do seu projeto'}
                    />
                </div>
            </div>
            <div className={`${styles.text_container} ${styles.text_container}`}>
                <SimpleTitle textColor={'purple-gradient'}>O que é uma Empresa Júnior?</SimpleTitle>
                <p>
                    Uma Empresa Júnior é uma associação civil sem fins lucrativos, formada e gerida por estudantes de
                    graduação de um curso superior. As EJs são constituídas por alunos que buscam desenvolver-se
                    profissionalmente, aplicando na prática os conhecimentos adquiridos em sala de aula, e que têm como
                    objetivo principal fomentar o empreendedorismo e a educação empreendedora.
                    <br />
                    As EJs são, também, uma ponte entre a universidade e o mercado de trabalho, pois oferecem serviços
                    de qualidade a preços acessíveis, permitindo que micro e pequenas empresas tenham acesso a serviços
                    de qualidade, além de serem uma excelente oportunidade para que os alunos desenvolvam habilidades e
                    competências que serão úteis para toda a vida.
                    <br />
                    Conheça mais sobre as Empresas Juniores no{' '}
                    <a href={'https://brasiljunior.org.br/'} target="_blank">
                        site da Brasil Júnior
                    </a>
                    .
                </p>
            </div>
        </section>
    );
}
