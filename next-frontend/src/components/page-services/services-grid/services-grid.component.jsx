import styles from './services-grid.module.css';
// Components
import CardFrame from '@components/ui/card/card-frame/card-frame.component';
import ServiceCard from './service-card/service-card.component';
import Image from 'next/image';

export default function ServicesGrid() {
    return (
        <section className={styles.container}>
            <div className={styles.grid}>
                <ServiceCard.large
                    id={styles.optimized_seo}
                    title={'Otimizado para SEO'}
                    description={
                        'Projetado e desenvolvido com as mais recentes práticas de SEO. Os mecanismos de pesquisa vão adorar o seu site e ele terá uma classificação mais alta.'
                    }
                    image={'/images/services/seo-optimization.png'}
                    imageAlt={'SEO Optimization'}
                />

                <ServiceCard
                    id={styles.responsive_design}
                    title={'Design responsivo'}
                    description={
                        'Seu site com um design nítido e responsivo que o torna perfeito em todos os dispositivos.'
                    }
                    image={'/images/services/responsive-design.png'}
                    imageAlt={'Responsive Design'}
                />

                <ServiceCard
                    id={styles.security}
                    title={'Segurança e privacidade'}
                    description={
                        'Certificados de segurança que garantem a proteção de dados e integridade do seu site.'
                    }
                    image={'/images/services/security.png'}
                    imageAlt={'Security'}
                />

                <ServiceCard.large
                    id={styles.performance}
                    title={'Carregamento super rápido'}
                    description={
                        'Você sabia que 40% dos visitantes abandonam um site se ele demorar mais de 3 segundos para carregar? Otimizamos o seu site para que ele carregue super rapidamente, o que melhora a experiência do usuário e a classficação do SEO.'
                    }
                    image={'/images/services/performance.png'}
                    imageAlt={'Performance'}
                />

                <ServiceCard.large
                    id={styles.content_editing}
                    title={'Edição simplificada de conteúdo'}
                    description={
                        'Você escolhe quais informações devem ser editáveis! Desenvolveremos uma interface simples e personalizada para a edição do conteúdo do seu site onde qualquer um da sua equipe será capaz de fazer alterações no conteúdo do site.'
                    }
                    image={'/images/services/content-editing-fade.png'}
                    imageAlt={'Content Editing'}
                />

                <ServiceCard
                    id={styles.transparency}
                    title={'Transparência com o cliente'}
                    description={
                        'O contato com o cliente é mantido durante todo o processo de desenvolvimento do site.'
                    }
                    image={'/images/services/transparency.png'}
                    imageAlt={'Transparency'}
                />
            </div>
        </section>
    );
}
