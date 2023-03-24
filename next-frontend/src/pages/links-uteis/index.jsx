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
                    <div className={styles.container_buttons}>
                        <LinkButton texto="Nosso Site" link="/" />
                        <LinkButton texto="LinkedIn" link="https://www.linkedin.com/company/ejpixel" />
                        <LinkButton texto="Facebook" link="https://www.fb.com/ejpixel" />
                        <LinkButton
                            texto="E-book Gestão do conhecimento"
                            link="https://drive.google.com/file/d/1dLGZcmuvDa9tutWsMEfMLOGMvdeUZjlI/view"
                        />
                    </div>
                </div>
            </PageContainer>
            <WhatsappButton />
        </div>
    );
}

