import styles from './contact-container.module.css';
// Components
import ContactForm from '../contact-form/contact-form.component';
import ContactInformation from '../contact-information/contact-information.component';

export default function ContactContainer() {
    return (
        <div className={styles.container}>
            <ContactForm />
            <ContactInformation />
        </div>
    );
}
