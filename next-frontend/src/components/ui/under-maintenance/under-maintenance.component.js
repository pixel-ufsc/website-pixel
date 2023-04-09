import styles from './under-maintenance.module.css';
// Assets
import { IoIosWarning } from 'react-icons/io';
import { FaExclamationTriangle } from 'react-icons/fa';

// This component should be placed on pages that are under maintenance

export default function UnderMaintenance() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.icon_container}>
                    <IoIosWarning id={styles.icon} />{' '}
                </div>
                <div className={styles.text}>
                    <p>
                        <strong>Em manutenção...</strong>
                    </p>
                    <p>
                        Nosso site está passando por manutenção e, infelizmente, essa página não está disponível no
                        momento! Por favor, entre em contato conosco ou volte mais tarde.
                    </p>
                </div>
            </div>
        </div>
    );
}
