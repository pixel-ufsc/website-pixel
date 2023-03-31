import styles from './links-header.module.css';
// Assets
import PixelLogoHorizontalBranca from '@public/svgs/pixel/pixel-logo-horizontal-branca';

export default function LinksHeader() {
    return (
        <div className={styles.logo_wrapper}>
            <PixelLogoHorizontalBranca className={styles.logo} />
        </div>
    );
}

