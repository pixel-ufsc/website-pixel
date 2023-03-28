import styles from './links-uteis.module.css';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import WhatsappButton from '@components/ui/buttons/whatsapp-button/whatsapp-button.component';
import LinksHeader from '@components/ui/header/links-header/links-header.component';
import LinkButton from '@components/ui/buttons/link-button/link-button.component';

export default function LinksUteis({ links }) {
    return (
        <PageContainer>
            <div className={styles.background}>
                <div className={styles.container}>
                    <LinksHeader />
                    <div className={styles.container_buttons}>
                        {Object.keys(links).map((key) => (
                            <LinkButton key={key} link={links[key].link} texto={links[key].texto} />
                        ))}
                    </div>
                </div>
                <WhatsappButton />
            </div>
        </PageContainer>
    );
}

// get static props
export async function getStaticProps() {
    // temporario
    const links = {
        0: {
            link: '/',
            texto: 'Nosso Site',
        },
        1: {
            link: 'https://www.linkedin.com/company/ejpixel',
            texto: 'LinkedIn',
        },
        2: {
            link: 'https://www.fb.com/ejpixel',
            texto: 'Facebook',
        },
        3: {
            link: 'https://drive.google.com/file/d/1dLGZcmuvDa9tutWsMEfMLOGMvdeUZjlI/view',
            texto: 'E-book Gestão do conhecimento',
        },
    };

    return {
        props: {
            links,
        },
    };
}
