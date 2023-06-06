import styles from './about-ej.module.css';
// Componets
import AboutTextContainer from '@components/page-about/about-text-container/about-text-container.component';
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';

export default function AboutEJ() {
    return (
        <div className={styles.container}>
            <AboutTextContainer>
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
            </AboutTextContainer>
        </div>
    );
}
