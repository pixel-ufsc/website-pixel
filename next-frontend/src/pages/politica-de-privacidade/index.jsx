import styles from './politica-de-privacidade.module.css';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import ArticleContainer from '@components/layout/article-container/article-container.component';

export default function PoliticaPrivacidade() {
    return (
        <PageContainer title={'Política de Privacidade'} description={'Política de Privacidade do nosso site.'}>
            <ArticleContainer className={styles.contentWrapper}>
                <article className={styles.topic}>
                    <h2>1. Porque temos uma Política de Privacidade?</h2>
                    <p>
                        A Política de Privacidade é destinada a explanar a vida útil dos dados adquiridos através do
                        nosso site, no qual você terá conhecimento acerca do tratamento dos dados coletados e sua
                        destinação final. Logo, ciente, a Pixel, de que os dados pessoais são peças fundamentais dentro
                        da confiança que se forma com os seus clientes, procuramos sempre prezar pela transparência
                        sobre como trabalhamos diante de todas as informações cedidas a nós e como estas estarão
                        seguras.
                    </p>
                    <p>
                        Nesse sentido, a presente política foi regida sob a égide da Lei Geral de Proteção de Dados
                        Pessoais (LGPD), de nº 13.709/2018, e do Marco civil da Internet, Lei nº 12.965/2014, que
                        protegem os titulares dos dados pessoais e fornecem a eles uma gama de direitos, tais como: a
                        garantia do uso objetivado dos dados, resguardando exclusivamente suas finalidades e objetivos,
                        que estão redigidos dentro desta política, além da utilização das informações para as
                        necessidades restritas e exclusivas aos serviços prestados pela Pixel.
                    </p>
                    <p>
                        Ao utilizar nosso site, considerando que se trata de informações de cunho pessoal, que
                        possibilitam a identificação de quem as forneceram, imprescindível faz-se o seu consentimento
                        sobre o que se pleiteia. Ademais, consideramos implícita a declaração do titular dos dados ser
                        maior de idade, caso não o seja, é dever dos seus responsáveis legais a permissão para a
                        concessão dos dados.
                    </p>
                    <p>
                        Por fim, reiteramos a especial preocupação da Pixel com o manuseio dos dados de nossos clientes,
                        garantindo a sua responsabilidade conforme a Lei Geral de Proteção de Dados Pessoais, buscando
                        fielmente a segurança dos dados e o resguardo de sua privacidade dentro da Empresa Júnior.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>2. Qual o objetivo da coleta de dados?</h2>
                    <p>
                        Nós, da Pixel Empresa Júnior - UFSC, fornecemos serviços voltados, mas não limitados, ao meio
                        tecnológico. Dessa forma, é preciso a coleta de dados almejando dispor de informações
                        personalizadas aos usuários do nosso site, visando o melhor desempenho da plataforma e
                        proporcionar um maior entendimento sobre nossa atuação.
                    </p>
                    <p>
                        Há, ainda, a hipótese de dados coletados objetivando o processo seletivo da Pixel, a qual se
                        adequa aos casos daqueles que objetivam se inscrever no referido processo interno e,
                        posteriormente, tentarem adentrar e fazer parte do quadro de membros efetivos da Empresa Júnior.
                        Vale ressaltar que a seção do Processo Seletivo será disponibilizada esporadicamente no site nos
                        momentos oportunos de recrutamento da empresa, podendo ser desativada do mesmo logo após o
                        cumprimento de sua função, qual seja a colheita de dados necessários para inscrição dos
                        candidatos.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>3. Quais os dados coletados e quais são suas respectivas finalidades?</h2>
                    <p>Os dados coletados em nossa plataforma têm as seguintes finalidades:</p>
                    <ol>
                        <li>
                            Quanto ao <strong>nome</strong>, este permite a identificação do usuário;
                        </li>
                        <li>
                            Em relação ao <strong>E-mail</strong>, este serve para ser um canal de comunicação junto com
                            o usuário dos dados fornecidos, além de ser o canal de envio de nossa newsletter, caso o
                            usuário queira;
                        </li>
                        <li>
                            O <strong>número do celular</strong> também possui a finalidade de ser um canal de
                            comunicação junto com o usuário dos dados.
                        </li>
                    </ol>
                    <p>
                        Quanto aos dados relativos à inscrição no processo seletivo, são necessários mais informações
                        com as seguintes finalidades:
                    </p>
                    <ol>
                        <li>
                            Quanto à <strong>foto</strong>, esta é destinada à identificação candidato, a fim de
                            facilitar a interação nas dinâmicas internas da Pixel, além de uso histórico e de divulgação
                            dos membros, quando necessário;
                        </li>
                        <li>
                            Em relação às <strong>redes socias</strong>, esta serve para ser um canal de comunicação
                            para determinadas funções da empresa, como também é destinada à identificação do membro;
                        </li>
                        <li>
                            A <strong>idade</strong> serve para um parâmetro avaliativo, dentro dos moldes
                            característicos do processo seletivo;
                        </li>
                        <li>
                            Informações acerca do <strong>curso de graduação</strong>, quais sejam a área, o período, o
                            ano previsto para conclusão, servem tanto para identificar aquele candidato, como também
                            para critérios de avaliação.
                        </li>
                    </ol>
                </article>
                <article className={styles.topic}>
                    <h2>4. Como a coleta dos dados é realizada?</h2>
                    <p>
                        A coleta de dados no site ocorre por meio do cadastro e fornecimento de cookies. O cadastro é
                        totalmente voluntário, mas incentivamos sua efetivação para permitir um melhor manuseio dos
                        serviços oferecidos na página online da Pixel.
                    </p>
                    <p>
                        Ademais, é possível coleta de dados caso o usuário informe matérias extras voluntariamente por
                        meio de comentários (ponto 5), mensagens ou na seção do Processo Seletivo do website.
                    </p>
                    <p>
                        Em relação a quaisquer dados relacionados ao nosso portfólio, esses são demonstrados com a
                        permissão dos clientes da empresa, com o intuito de demonstrar a devida credibilidade da atuação
                        da empresa.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>5. Comentários do site</h2>
                    <p>
                        Os dados fornecidos em comentários ou mensagens no site Pixel são feitos de maneira espontânea
                        pelo usuário, sendo também armazenados e disponíveis para alteração, conforme o desejo expresso
                        de quem os forneceu.
                    </p>
                    <p>
                        Informamos que os referidos comentários são públicos e necessitam da identificação de quem os
                        produziu. Nessa direção, o teor do conteúdo e as exposições presentes nos comentários são de
                        responsabilidade de quem decidiu comentar. No entanto, há a possibilidade da exclusão ou
                        mantimento do escrito, tanto por parte do seu criador quanto por parte da Pixel, se considerada
                        necessária a proteção da empresa e dos demais usuários.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>6. Como se dá o armazenamento dos dados?</h2>
                    <p>
                        Os dados coletados são mantidos em quatro plataformas, o Google Drive, Pipefy, Slack e no
                        WordPress, onde hospedamos no nosso site, com o objetivo de garantir aprimoramento da segurança
                        e organização na manipulação e armazenamento de informações em favor da melhoria dos serviços
                        ofertados. Porém, as plataformas acima referidas possuem políticas próprias e desvinculadas da
                        Pixel, que recomendamos conhecer.
                    </p>
                    <p>
                        A cópia das suas informações permanece e se renova com a Pixel enquanto você tiver vínculo com a
                        empresa; até a revogação explícita do consentimento dos dados pelo titular deles ou após o
                        período constante no ponto 11.
                    </p>
                    <p>
                        Os dados serão reservados principalmente na forma digital, porém aqueles que forem obtidos de
                        forma digital poderão ser convertidos à forma física e vice-versa, se necessário à boa
                        manipulação dos dados. Ressaltamos que a conversão de dados digitais para físicos não impede a
                        devida proteção dos dados, como apontado no ponto 12.
                    </p>
                    <p>
                        Portanto, questões relativas ao armazenamento, quando fornecidos os dados do usuário em nossa
                        plataforma, eles também permanecerão nas plataformas que funcionam para a hospedagem, como o
                        WordPress, assim como no Drive da empresa e nas plataformas de organização, Pipefy e Slack. Com
                        isso, é muito importante ressaltar que, após o fornecimento, os dados também ficarão respaldados
                        pelas seguintes políticas de privacidade:
                    </p>
                    <ol>
                        <li>
                            Google Drive -{' '}
                            <a href="https://policies.google.com/privacy?hl=pt-BR">
                                https://policies.google.com/privacy?hl=pt-BR
                            </a>
                        </li>
                        <li>
                            Pipefy -{' '}
                            <a href="https://www.pipefy.com/pt-br/politica-de-privacidade">
                                https://www.pipefy.com/pt-br/politica-de-privacidade/
                            </a>
                        </li>
                        <li>
                            Slack -{' '}
                            <a href="https://slack.com/intl/pt-br/trust/privacy/privacy-policy">
                                https://slack.com/intl/pt-br/trust/privacy/privacy-policy
                            </a>
                        </li>
                        <li>
                            WordPress -{' '}
                            <a href="https://br.wordpress.org/about/privacy/">
                                https://br.wordpress.org/about/privacy/
                            </a>
                        </li>
                    </ol>
                    <p>
                        Informamos que essas políticas de privacidade também são passíveis de mudança ao decorrer do
                        tempo, sendo tais mudanças totalmente independentes da Pixel.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>7. O tratamento dos dados</h2>
                    <p>
                        O tratamento dos dados pessoais diz respeito a toda e qualquer atividade realizada com os dados
                        pessoais de terceiros, desde a coleta até sua extinção. As finalidades de cada dado coletado
                        pela Pixel estão descritas no ponto 3, já citado. Assim exposto, é de competência do controlador
                        a tomada de decisões referente ao tratamento dos dados, do operador a manipulação das
                        informações fornecidas e coletadas, assim como do encarregado de ser um canal de comunicação
                        entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD).
                        Na Pixel, o responsável pela função de controlador é o Diretor de Gestão Interna, sendo este
                        atuante também como operador, dividindo tal função com o Diretor de Comercial, tendo, por fim,
                        como função de encarregado o Diretor Presidente da Pixel, com base no artigo 41 da LGPD.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>8. Os dados serão compartilhados?</h2>
                    <p>
                        Os dados depositados em nosso site serão de acesso exclusivo aos membros da Pixel, não sendo
                        estes compartilhados com terceiros. No entanto, há divulgação de dados de pessoas vinculadas à
                        Pixel em nossas plataformas digitais, a qual ocorre com o intuito de promover transparência,
                        acessibilidade e divulgação de suas competências aos usuários de nossas redes sociais, a exemplo
                        da evidenciação de nossos tutores representantes, imagens e identificação de membros atuais e
                        passados, e recolhimento de informações na seção “Processo Seletivo” para uso interno. Logo,
                        aqueles vinculados consentem no uso de seus dados divulgados no site, podendo requerer, via
                        expressa e a todo momento, a retirada de seus dados do site.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>9. Acesso a outras plataformas</h2>
                    <p>
                        O fornecimento de dados do usuário em outros sites e plataformas que não os nossos, ainda que
                        acessadas por meio de apresentação em nossa página, como Facebook, LinkedIn, Instagram e
                        WhatsApp não são abrangidas por essa política de privacidade. Portanto, ao adentrar em outro
                        website, o usuário é submetido à política de privacidade do respectivo.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>10. Cookies e dados de navegação</h2>
                    <p>
                        Os cookies contêm um código exclusivo, endereço ID, que permite o reconhecimento do seu
                        navegador durante visitas ao site, a fim de aprimorar e facilitar a experiência do usuário em
                        visitas recorrentes à plataforma.
                    </p>
                    <p>
                        Os cookies são informações sem caráter personalíssimo, ou seja, não possuem a identificação de
                        quem os concedeu, salvo se esse se identificar voluntariamente. Ao navegar no site da Pixel,
                        você autoriza a entrega de informações retiradas por meio dos cookies.
                    </p>
                    <p>
                        É possível que o seu aparelho esteja configurado para autorizar os cookies de maneira
                        automática. É recomendado permitir o uso de cookies para uma experiência personalizada no site
                        Pixel, mas na hipótese em que desejar desativar os cookies, ainda que consciente que perderá
                        certas funcionalidades do site - como o acesso automático durante o login - é possível desativar
                        essa função a depender do navegador utilizado.
                    </p>
                    <p>
                        Abaixo estão links de páginas dos principais navegadores para ajudar na gestão de cookies do
                        site:
                    </p>
                    <ol>
                        <li>
                            Internet Explorer:{' '}
                            <a href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies">
                                Excluir e gerenciar cookies
                            </a>
                        </li>
                        <li>
                            Safari:{' '}
                            <a href="https://support.apple.com/pt-br/HT201265">
                                Limpar o histórico e os cookies do Safari no iPhone, iPad ou iPod touch
                            </a>
                        </li>
                        <li>
                            Google Chrome:{' '}
                            <a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=pt-BR">
                                Limpar, ativar e gerenciar cookies no Chrome - Computador - Ajuda do Google Chrome
                            </a>
                        </li>
                        <li>
                            Mozilla Firefox:{' '}
                            <a href="https://support.mozilla.org/pt-BR/kb/impeca-que-sites-armazenem-cookies-e-dados-no-fire">
                                Impeça que sites armazenem cookies e dados no Firefox | Ajuda do Firefox
                            </a>
                        </li>
                        <li>
                            Opera:{' '}
                            <a href="https://www.opera.com/help/tutorials/security/privacy/">
                                Security and Privacy in Opera
                            </a>
                        </li>
                    </ol>
                </article>
                <article className={styles.topic}>
                    <h2>11. Pode alterar ou revogar o consentimento dos dados fornecidos?</h2>
                    <p>
                        Para o cumprimento de sua finalidade, os dados permanecerão em nosso banco de dados por um prazo
                        de 10 (dez) anos, uma vez que essas informações poderão ser usadas ao longo do processo de
                        efetivação e permanência dos membros na empresa, além de serem guardadas para recordação dos
                        integrantes da Pixel. No entanto, você tem a possibilidade de excluir seus dados a qualquer
                        momento, conforme explicita a Lei Geral de Proteção de Dados Pessoais, resguardada a
                        possibilidade de custódia mesmo depois do pedido de exclusão, oportunidade que o dado será
                        anonimizado, para o estrito exercício do direito de defesa ou mesmo da necessidade de
                        comunicação para autoridades públicas, observado o limite máximo dos prazos prescricionais
                        estabelecidos pela Lei.
                    </p>
                    <p>
                        Comprometidos em incentivar um bom relacionamento com os titulares das informações, bem como,
                        dar garantia aos seus direitos, torna-se ciente que, para fins de alteração ou da revogação do
                        consentimento dos dados, o titular deverá enviar um e-mail para{' '}
                        <a href="mailto:gestaointerna@ejpixel.com.br">gestaointerna@ejpixel.com.br</a>, informando sua
                        vontade e, se desejar, o motivo da decisão. Poderá utilizar esse canal de comunicação para,
                        também, tirar eventuais dúvidas e sugestões sobre esta Política de Privacidade.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>12. Segurança</h2>
                    <p>
                        Salientando o zelo e o comprometimento com os seus dados, nosso site encontra-se hospedado na
                        plataforma WordPress e conta com certificado SSL, uma tecnologia mundial de segurança, a qual
                        permite uma encriptação das informações, oferecendo, assim, uma maior segurança virtual para o
                        usuário. Aliás, são empregados variados meios para o devido resguardo de dados, a exemplo dos
                        vieses administrativo, físicos e jurídicos com o implemento de pessoas responsáveis na guarda
                        dos dados, local apropriado para o armazenamento e documentos que evidenciam segurança,
                        mitigando riscos de roubo ou adulteração das informações confidenciais.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>13. Alterações nesta política</h2>
                    <p>
                        É importante alertar que essa política de privacidade pode sofrer alterações e reajustes com o
                        passar do tempo, a fim de torná-la cada vez mais adequada à realidade da empresa e das
                        exigências legais brasileiras. Mas não se preocupe, se isso acontecer, os seus dados continuarão
                        seguros, e você, usuário de nossos serviços, será comunicado das referidas mudanças, por meio do
                        e-mail que nos foi fornecido anteriormente, a fim de receber seu devido consentimento. Depois
                        que este for concedido, a nova política terá efeito imediato.
                    </p>
                </article>
                <span className={styles.lastModification}>Última alteração: 09/06/2021</span>
            </ArticleContainer>
        </PageContainer>
    );
}
