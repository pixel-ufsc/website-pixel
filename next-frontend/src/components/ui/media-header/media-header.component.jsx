import styles from './media-header.module.css';

import FacebookIcon from '@public/svgs/social-media/facebook';
import InstagramIcon from '@public/svgs/social-media/instagram';

export default function MediaHeader() {
    return (
        <aside className={styles.media_header_container}>
            <div className={styles.content_wrapper}>
                <p className={styles.email_text}>comercial@ejpixel.com.br</p>
                <div className={styles.logo_container}>
                    <div className={styles.icon_wrapper}>
                        <FacebookIcon />
                    </div>
                    <div className={styles.icon_wrapper}>
                        <InstagramIcon />
                    </div>
                    <div className={styles.icon_wrapper}>
                        <FacebookIcon />
                    </div>
                    <div className={styles.icon_wrapper}>
                        <FacebookIcon />
                    </div>
                </div>
            </div>
        </aside>
    );
}
