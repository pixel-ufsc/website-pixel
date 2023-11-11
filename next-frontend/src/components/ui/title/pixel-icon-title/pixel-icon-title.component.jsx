import styles from './pixel-icon-title.module.css';
import PropTypes from 'prop-types';

export function PixelIconTitle({ title, coloredText }) {
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

PixelIconTitle.propTypes = {
    title: PropTypes.array.isRequired,
    coloredText: PropTypes.string.isRequired,
};

