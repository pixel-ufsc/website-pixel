import styles from './media-header.module.css';
// Assets
import FacebookIcon from '@public/svgs/social-media/facebook';
import InstagramIcon from '@public/svgs/social-media/instagram';
import LinkedinIcon from '@public/svgs/social-media/linkedin';
import WhatsappIcon from '@public/svgs/social-media/whatsapp';

export default function MediaHeader({ contact_email, facebook_url, instagram_url, linkedin_url, whatsapp_url }) {
    return (
        <aside className={styles.media_header_container}>
            <div className={styles.content_wrapper}>
                <p className={styles.email_text}>{contact_email ? contact_email : 'comercial@ejpixel.com.br'}</p>
                <div className={styles.icons_container}>
                    <a
                        href={facebook_url ? facebook_url : 'https://www.facebook.com/ejpixel'}
                        target="_blank"
                        className={styles.icon_wrapper}
                    >
                        <FacebookIcon className={styles.icon} />
                    </a>
                    <a
                        href={instagram_url ? instagram_url : 'https://instagram.com/ejpixel'}
                        target="_blank"
                        className={styles.icon_wrapper}
                    >
                        <InstagramIcon className={styles.icon} />
                    </a>
                    <a
                        href={linkedin_url ? linkedin_url : 'https://www.linkedin.com/company/ejpixel/'}
                        target="_blank"
                        className={styles.icon_wrapper}
                    >
                        <LinkedinIcon className={styles.icon} />
                    </a>
                    <a
                        href={whatsapp_url ? whatsapp_url : 'https://wa.me/554891447023'}
                        target="_blank"
                        className={styles.icon_wrapper}
                    >
                        <WhatsappIcon className={styles.icon} />
                    </a>
                </div>
            </div>
        </aside>
    );
}
