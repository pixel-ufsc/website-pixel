import styles from './politica-de-privacidade.module.css';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import ArticleContainer from '@components/layout/article-container/article-container.component';

export default function PoliticaPrivacidade() {
    return (
        <PageContainer title={'Política de Privacidade'} description={'Política de Privacidade do nosso site.'}>
            <ArticleContainer className={styles.contentWrapper}>
                <article className={styles.topic}>
                    <h2>1. Por que temos uma Política de Privacidade?</h2>
                    <p>
                        A Pixel está ciente de que a responsabilidade para com os dados pessoais de seus clientes é peça
                        fundamental na relação de confiança a ser construída e, por isso, procura sempre zelar pela
                        transparência na sua forma de atuação, inclusive no que diz respeito às informações cedidas. Por
                        essa razão, foi desenvolvida a presente Política de Privacidade, a qual é destinada a explanar a
                        vida útil dos dados coletados através do nosso site. Por meio dela, você terá conhecimento
                        acerca do tratamento dos dados pessoais coletados pela Pixel e sua destinação final.
                    </p>
                    <p>
                        As políticas aqui descritas foram redigidas em atendimento ao que prevê a Lei Geral de Proteção
                        de Dados Pessoais (LGPD), nº 13.709/2018, e o Marco civil da Internet, Lei nº 12.965/2014, cujo
                        escopo principal é a proteção dos titulares dos dados pessoais, garantindo-lhes o uso dos dados
                        pessoais para finalidades específicas, as quais estão previstas ao longo desta Política de
                        Privacidade, bem como a utilização das informações exclusivamente para a prestação de serviços
                        pela Pixel.
                    </p>
                    <p>
                        As informações coletadas quando você utiliza nosso site possibilitam a sua identificação, razão
                        pela qual o consentimento sobre o tratamento realizado é imprescindível. Além disso, também
                        consideramos implícita a declaração de que o titular dos dados pessoais é maior de idade. Caso
                        não o seja, é dever dos seus responsáveis legais fornecer o consentimento necessário.
                    </p>
                    <p>
                        Por fim, reiteramos a especial preocupação da Pixel com o tratamento dos dados de nossos
                        clientes, garantindo a sua responsabilidade conforme a Lei Geral de Proteção de Dados Pessoais,
                        buscando fielmente a segurança das informações e o resguardo de sua privacidade dentro da
                        Empresa Júnior.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>2. Qual o objetivo da coleta de dados?</h2>
                    <p>
                        Nós da Pixel Empresa Júnior - UFSC fornecemos serviços voltados, mas não limitados, ao meio
                        tecnológico. Dessa forma, é preciso realizar a coleta de dados a fim de melhorar o desempenho da
                        plataforma, disponibilizando informações personalizadas aos usuários do nosso site. Além disso,
                        o tratamento dos dados visa conferir à Pixel um maior entendimento sobre sua atuação.
                    </p>
                    <p>
                        A Pixel também coleta dados pessoais de usuários que objetivam se inscrever no nosso processo
                        seletivo para, posteriormente, integrar o quadro de membros efetivos da Empresa Júnior. A seção
                        referente ao processo seletivo será disponibilizada no site esporadicamente, no período em que
                        estiver sendo realizado o recrutamento, podendo ser desativada logo após o cumprimento de sua
                        função (coleta dos dados necessários para inscrição dos candidatos).
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>3. Quais são os dados coletados e para quais finalidades?</h2>
                    <p>
                        No caso de acessos realizados por usuários que não pretendam se inscrever no processo seletivo
                        da Empresa Júnior, os dados coletados serão:
                    </p>
                    <ol>
                        <li>
                            <strong>Nome: </strong>permite a identificação do usuário;
                        </li>
                        <li>
                            <strong>Endereço de e-mail: </strong>serve como canal de comunicação com o usuário, além de
                            ser o canal de envio de nossa <i>newsletter</i>, caso o usuário assim deseje;
                        </li>
                        <li>
                            <strong>Número do telefone celular: </strong> também tem como finalidade ser um canal de
                            comunicação junto ao usuário.
                        </li>
                    </ol>
                    <p>
                        Já os usuários que realizarão a inscrição no processo seletivo da Pixel, além das informações
                        acima, também serão coletadas as seguintes:
                    </p>
                    <ol>
                        <li>
                            <strong>Foto: </strong>destinada à identificação do usuário/candidato, a fim de facilitar a
                            interação nas dinâmicas internas Empresa Júnior, além de uso histórico e de divulgação dos
                            membros, quando necessário;
                        </li>
                        <li>
                            <strong>Perfis nas redes sociais: </strong>tem como finalidade tanto a identificação do
                            usuário/candidato, como também ser um canal de comunicação para determinadas funções a serem
                            desempenhadas dentro da Pixel;
                        </li>
                        <li>
                            <strong>Idade: </strong> serve como parâmetro avaliativo, dentro dos moldes característicos
                            do processo seletivo;
                        </li>
                        <li>
                            <strong>
                                Informações sobre o Curso de graduação (área, período, ano previsto para conclusão):{' '}
                            </strong>
                            são utilizados para identificar o usuário/candidato e também como critério de avaliação do
                            processo seletivo.
                        </li>
                    </ol>
                </article>
                <article className={styles.topic}>
                    <h2>4. O tratamento dos dados</h2>
                    <p>
                        Tratamento dos dados pessoais corresponde a toda e qualquer atividade realizada com os dados do
                        usuário, desde a coleta até sua eliminação.
                    </p>
                    <h3>4.1 Como a coleta dos dados é realizada?</h3>
                    <p>
                        Coletamos dados em nosso site por meio do cadastro e fornecimento de cookies. O cadastro é
                        totalmente voluntário, mas incentivamos sua efetivação para permitir um melhor manuseio dos
                        serviços oferecidos na página online da Pixel.
                    </p>
                    <p>
                        Também é possível a coleta de dados caso o usuário faça comentários ou envie mensagens, bem como
                        caso acesse a seção do processo seletivo, quando esta estiver ativada no site.
                    </p>
                    <p>
                        Especificamente em relação aos comentários e mensagens, vale destacar que eles são
                        postados/enviados espontaneamente pelo usuário, ficando armazenados e disponíveis para alteração
                        por quem os forneceu.
                    </p>
                    <p>
                        Os comentários são públicos e necessitam da identificação de quem os produziu, o(a) qual será
                        responsável pelo seu conteúdo. Existe a possibilidade da exclusão daquilo que foi escrito, tanto
                        pelo usuário/criador quanto pela Pixel, a seu critério, caso entenda que o comentário viola, de
                        alguma forma, a Empresa Júnior e/ou os demais usuários.
                    </p>
                    <h3>4.2 Como ocorre o armazenamento dos dados?</h3>
                    <p>
                        Quando o usuário fornece seus dados em nosso site, estes são mantidos em quatro plataformas:
                        Google Drive da Empresa Júnior, Pipefy, Slack e WordPress, (hospedeiro do site). Esse
                        armazenamento objetiva garantir aprimoramento da segurança e organização na manipulação e
                        tratamento de informações para melhoria dos serviços ofertados.
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
                            <a href="https://www.pipefy.com/pt-br/politica-de-privacidade/">
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
                        Informamos ainda que essas políticas de privacidade também são passíveis de mudança, as quais
                        ocorrem de maneira totalmente independente da Empresa Júnior.
                    </p>
                    <p>
                        Os dados serão armazenados principalmente na forma digital. Porém, aqueles que forem obtidos
                        digitalmente poderão ser convertidos à forma física, e vice-versa, caso tal medida seja
                        necessária para sua boa manipulação. Qualquer dessas formas de conversão não impede a devida
                        proteção dos dados coletados.
                    </p>
                    <p>
                        Os seus dados permanecerão armazenados pela Pixel até a revogação explícita do consentimento ou,
                        caso isso não aconteça, até que decorra o período de 10 (dez) anos. Esse prazo é necessário uma
                        vez que as informações poderão ser utilizadas ao longo do processo de efetivação e permanência
                        dos membros na Empresa Júnior, além de serem guardadas para registro dos integrantes.
                    </p>
                    <h3> 4.3 Os dados serão compartilhados?</h3>
                    <p>
                        Os dados fornecidos em nosso site serão de acesso exclusivo aos membros da Pixel e não serão
                        compartilhados com terceiros.{' '}
                    </p>
                    <p>
                        A exceção à regra do parágrafo anterior fica por conta da possibilidade de divulgação, em nossas
                        plataformas digitais, de dados de pessoas vinculadas à Pixel, com o objetivo de promover
                        transparência, acessibilidade e para divulgação das competências daquele usuário. Exemplos dessa
                        veiculação dos dados são as postagens sobre os nossos tutores representantes ou sobre membros
                        atuais e passados da Empresa Júnior.
                    </p>
                    <p>
                        Assim, os usuários que tenham vínculo com a Pixel desde logo consentem com o uso dos dados
                        fornecidos, podendo requerer, a qualquer momento, a retirada de tais informações do site.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>5. Direitos dos titulares</h2>
                    <p>
                        De acordo com a Lei Geral de Proteção de Dados, você, na qualidade de titular dos dados
                        tratados, possui uma série de direitos, quais sejam: confirmação da existência de tratamento;
                        acesso aos dados tratados; correção de dados incompletos, inexatos ou desatualizados;
                        anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em
                        desconformidade com o disposto na LGPD; requerer a portabilidade dos dados a outro fornecedor de
                        serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade
                        nacional, observados os segredos comercial e industrial; eliminação dos dados pessoais tratados
                        com o consentimento do titular, exceto nas hipóteses previstas no art. 16 da LGPD; obter
                        informação das entidades públicas e privadas com as quais o controlador realizou uso
                        compartilhado de dados; ser informado sobre a possibilidade de não fornecer consentimento e
                        sobre as consequências da negativa e; revogar seu consentimento.
                    </p>
                    <p>
                        Esses direitos poderão ser exercidos a qualquer tempo. Em caso de solicitação de exclusão dos
                        dados tratados, a Pixel se resguarda ao direito de mantê-los armazenados, devidamente
                        anonimizados, para o estrito exercício do direito de defesa ou para casos de necessidade de
                        comunicação às Autoridades Públicos, sempre observando o prazo limite de armazenamento (10 anos)
                        e os prazos prescricionais previstos em Lei.
                    </p>
                    <p>
                        Comprometidos em incentivar um bom relacionamento com os titulares dos dados pessoais, bem como
                        garantir o pleno exercício dos seus direitos, a Pixel informa que para fins de alteração ou
                        revogação do consentimento, o usuário/titular deverá enviar um e-mail para {''}
                        <a href="mailto:gestaointerna@ejpixel.com.br">gestaointerna@ejpixel.com.br</a>, informando sua
                        vontade e, se desejar, o motivo da decisão. Esse canal de comunicação pode também ser utilizado
                        para tirar eventuais dúvidas e fazer sugestões sobre esta Política de Privacidade.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>6. Agentes de tratamento</h2>
                    <p>
                        Cabe ao controlador a tomada de decisões acerca do tratamento dos dados, ao operador a
                        manipulação das informações coletadas e, ao encarregado, ser o canal de comunicação entre o
                        controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados.
                    </p>
                    <p>
                        Na Pixel, o responsável pela função de controlador é o Diretor de Gestão Interna, o qual atua
                        também como operador, dividindo esta atribuição com o Diretor Comercial. A função de encarregado
                        é exercida pelo Diretor Presidente da Pixel.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>7. Segurança</h2>
                    <p>
                        Salientando o zelo e o comprometimento com os seus dados, nosso site encontra-se hospedado na
                        plataforma WordPress e conta com certificado SSL, uma tecnologia mundial de segurança, a qual
                        permite uma encriptação das informações, oferecendo, assim, uma maior segurança virtual ao
                        usuário.
                    </p>
                    <p>
                        Além disso, a Empresa Júnior emprega variadas estratégias para o devido resguardo dos dados
                        tratados, a exemplo da implementação de pessoas responsáveis pela guarda dessas informações,
                        local apropriado para o armazenamento e documentos que evidenciam segurança, mitigando assim os
                        riscos de subtração, vazamento ou adulteração das informações.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>8. Cookies e dados de navegação</h2>
                    <p>
                        Os cookies contêm um código exclusivo, endereço ID, que permite o reconhecimento do seu
                        navegador durante as visitas ao site e visa aprimorar e facilitar a experiência do usuário na
                        plataforma.
                    </p>
                    <p>
                        Os cookies são informações sem caráter personalíssimo, ou seja, não possuem a identificação de
                        quem os concedeu, salvo se o usuário se identificar voluntariamente. Ao navegar no site da
                        Pixel, você autoriza a coleta de informações obtidas por meio dos cookies.
                    </p>
                    <p>
                        É possível que o seu equipamento esteja configurado para autorizar os cookies de maneira
                        automática. Recomendamos permitir o uso de cookies para uma experiência personalizada no site da
                        Pixel, mas caso deseje desativá-los, consciente de que isso acarretará a perda de certas
                        funcionalidades - como o acesso automático durante o login -, é possível desabilitar essa função
                        a depender do navegador utilizado.
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
                    <h2>9. Acesso a outras plataformas</h2>
                    <p>
                        O fornecimento de dados do usuário em outros sites e plataformas que não os da Pixel, como
                        Facebook, LinkedIn, Instagram e WhatsApp, ainda que acessadas por meio de apresentação em nossa
                        página, <u>não são abrangidas</u> por esta Política de Privacidade. Logo, ao adentrar em outro
                        website, o usuário se submete à sua respectiva política de privacidade.
                    </p>
                </article>
                <article className={styles.topic}>
                    <h2>10. Alterações nesta Política de Privacidade</h2>
                    <p>
                        É importante alertar que a presente Política de Privacidade pode ser reajustada ao longo do
                        tempo, sempre com o objetivo de torná-la cada vez mais adequada à realidade da Empresa Júnior e
                        das exigências legais brasileiras. Mas não se preocupe, se isso acontecer, os seus dados
                        continuarão seguros, e você, usuário de nossos serviços, será comunicado das mudanças por meio
                        do e-mail que nos foi fornecido e assim poderá fornecer seu consentimento. A partir daí, a nova
                        Política de Privacidade que vier a ser estabelecida terá efeitos imediatos.
                    </p>
                </article>

                <span className={styles.lastModification}>Última alteração: 18/06/2024</span>
            </ArticleContainer>
        </PageContainer>
    );
}
