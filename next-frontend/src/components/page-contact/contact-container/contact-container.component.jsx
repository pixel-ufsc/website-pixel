import styles from './contact-container.module.css';
// Components
import ContactForm from '../contact-form/contact-form.component';
import ContactInformation from '../contact-information/contact-information.component';
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';

export default function ContactContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <SimpleTitle textColor="purple-gradient" fontSize="medium">
                    Entre em contato conosco
                </SimpleTitle>
                <p>Entre em contato conosco para sabermos como podemos te ajudar!</p>
            </div>
            <ContactForm />
            <ContactInformation />
        </div>
    );
}
