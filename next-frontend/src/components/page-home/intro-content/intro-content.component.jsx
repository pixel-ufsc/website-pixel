import styles from './intro-content.module.css';
import Link from 'next/link';

export default function IntroContent() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                {'Desenvolvendo '}
                <span className={styles.gradient}>soluções&nbsp;digitais</span>
                {'\n que fazem a diferença'}
            </h1>
            <div className={styles.icon_wrapper}>
                <div id={styles.pixel_icon}></div>
            </div>
        </section>
    );
}
