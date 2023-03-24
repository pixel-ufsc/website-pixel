import styles from './links-uteis.module.css';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import WhatsappButton from '@components/ui/buttons/whatsapp-button/whatsapp-button.component';
import LinksHeader from '@components/ui/header/links-header/links-header.component';
import LinkButton from '@components/ui/buttons/link-button/link-button.component';

export default function LinksUteis() {
    return (
        <div className={styles.background}>
            <PageContainer>
                <div className={styles.container}>
                    <LinksHeader />
                    <ul className={styles.container_buttons}>
                        <il>
                            <LinkButton texto="Nosso Site" link="/" />
                        </il>
                        <il>
                            <LinkButton texto="LinkedIn" link="https://www.linkedin.com/company/ejpixel" />
                        </il>
                        <il>
                            <LinkButton texto="Facebook" link="https://www.fb.com/ejpixel" />
                        </il>
                        <il>
                            <LinkButton
                                texto="E-book Gestão do conhecimento"
                                link="https://drive.google.com/file/d/1dLGZcmuvDa9tutWsMEfMLOGMvdeUZjlI/view"
                            />
                        </il>
                    </ul>
                </div>
            </PageContainer>
            <WhatsappButton />
        </div>
    );
}

