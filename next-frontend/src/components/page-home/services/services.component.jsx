import styles from './services.module.css';
import Image from 'next/image';
// Components
import HoverableButton from '@components/ui/buttons/hoverable-button/hoverable-button.component';
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';
// Assets

export default function Services() {
    return (
        <section className={styles.container}>
            <div className={styles.description}>
                <SimpleTitle textColor={'purple-gradient'} className={styles.title}>
                    Nossos serviços
                </SimpleTitle>
                <p className={styles.primary}>
                    Atuamos no <strong>desenvolvimento de sites</strong> com foco em usabilidade, performance e
                    conversão.
                </p>
                <p className={styles.secondary}>
                    Desenvolvemos sites personalizados e responsivos, combinando as mais recentes tecnologias para
                    oferecer uma experiência única em todos os dispositivos. Conte conosco para consolidar sua
                    identidade visual, gerar reconhecimento de marca e melhorar o envolvimento com seu público-alvo.
                </p>
                <HoverableButton href={'/servicos'} arrowed={true} label={'Saiba mais sobre os nossos serviços'} />
            </div>

            <div className={styles.mockup}>
                <Image
                    className={styles.computer_image}
                    fill
                    src={'/images/macbook-with-shadow.png'}
                    sizes="35vw"
                    priority
                    quality={80}
                    placeholder="blur"
                />
                <div className={styles.site_image_container}>
                    <Image
                        fill
                        className={styles.site_image}
                        src={'/images/banner.png'}
                        sizes="35vw"
                        priority
                        quality={80}
                        placeholder="blur"
                    />
                </div>
            </div>
        </section>
    );
}
