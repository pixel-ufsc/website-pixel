import styles from './media-header.module.css';
// Assets
import FacebookIcon from '@public/svgs/social-media/facebook';
import InstagramIcon from '@public/svgs/social-media/instagram';
import LinkedinIcon from '@public/svgs/social-media/linkedin';
import WhatsappIcon from '@public/svgs/social-media/whatsapp';

export default function MediaHeader() {
    return (
        <aside className={styles.media_header_container}>
            <div className={styles.content_wrapper}>
                <p className={styles.email_text}>comercial@ejpixel.com.br</p>
                <div className={styles.icons_container}>
                    <a href="https://www.facebook.com/ejpixel" target="_blank" className={styles.icon_wrapper}>
                        <FacebookIcon className={styles.icon} />
                    </a>
                    <a href="https://instagram.com/ejpixel" target="_blank" className={styles.icon_wrapper}>
                        <InstagramIcon className={styles.icon} />
                    </a>
                    <a href="https://www.linkedin.com/company/ejpixel/" target="_blank" className={styles.icon_wrapper}>
                        <LinkedinIcon className={styles.icon} />
                    </a>
                    <a href="https://wa.a/p069um" target="_blank" className={styles.icon_wrapper}>
                        <WhatsappIcon className={styles.icon} />
                    </a>
                </div>
            </div>
        </aside>
    );
}