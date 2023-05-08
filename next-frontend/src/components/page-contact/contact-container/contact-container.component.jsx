import styles from './contact-container.module.css';
// Components
import ContactForm from '../contact-form/contact-form.component';
import ContactInformation from '../contact-information/contact-information.component';
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';

export default function ContactContainer() {
    return (
        <div className={styles.container}>
            <SimpleTitle textColor="purple-gradient" fontSize="medium" className={styles.title}>
                Entre em contato conosco
            </SimpleTitle>
            <div className={styles.wrapper}>
                <ContactForm />
                <ContactInformation />
            </div>
        </div>
    );
}
