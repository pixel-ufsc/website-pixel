import styles from '@styles/404.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';

export default function Submission() {
    const router = useRouter();
    // If the 'success' flag (in the URL) is set to 'true', then the submission was successful.
    const submissionStatus = router.query?.success && router.query.success === 'true';

    return submissionStatus ? (
        <PageContainer hasWhatsappButton={false}>
            <div className={styles.container}>
                <div className={styles.text_container}>
                    <span className={styles.tag_success}>Sucesso</span>
                    <SimpleTitle className={styles.title} textColor={'purple-gradient'}>
                        Seu formulário foi enviado com sucesso!
                    </SimpleTitle>
                    <p>
                        Obrigado por entrar em contato conosco. Em breve, retornaremos sua mensagem.
                        <br />
                        <Link href={'/'}> Voltar para a página inicial</Link>.
                    </p>
                </div>
            </div>
            <div className={styles.icon_wrapper}>
                <div id={styles.pixel_icon}></div>
            </div>
        </PageContainer>
    ) : (
        <PageContainer hasWhatsappButton={false}>
            <div className={styles.container}>
                <div className={styles.text_container}>
                    <span className={styles.tag_error}>Erro</span>
                    <SimpleTitle className={styles.title} textColor={'purple-gradient'}>
                        Ocorreu um erro no envio do seu formulário!
                    </SimpleTitle>
                    <p>
                        Por favor, tente novamente mais tarde. Se o problema persistir, entre em contato conosco através
                        do nosso e-mail ou WhatsApp.
                        <br />
                        <Link href={'/'}> Voltar para a página inicial</Link>.
                    </p>
                </div>
            </div>
            <div className={styles.icon_wrapper}>
                <div id={styles.pixel_icon}></div>
            </div>
        </PageContainer>
    );
}
