import styles from './services.module.css';
import websiteServiceImage from '@public/website-service.png';
import consultancyServiceImage from '@public/consultancy-service.png';

import Image from 'next/image';

export default function Services() {
    return (
        <section className={styles.servicesContainer}>
            <h2>Serviços</h2>
            <div>
                <div className={styles.serviceCard}>
                    <Image
                        src={websiteServiceImage}
                        width={106}
                        height={86}
                        alt="Página web em um navegador tendo como conteúdo a sintaxe de um elemento HTML."
                    />
                    <h3>Desenvolvimento de sites</h3>
                    <p>
                        Desenvolvimento de sistemas web e sites baseados nas mais novas tecnologias, com a preocupação
                        de adaptar ao ambiente mobile.
                    </p>
                </div>
                <div className={styles.serviceCard}>
                    <Image
                        src={consultancyServiceImage}
                        width={91}
                        height={92}
                        alt="Pessoa com um headset, ao lado de uma ilustração com uma engrenagem e uma chave fixa, representando o serviço de consultoria."
                    />
                    <h3>Consultoria</h3>
                    <p>
                        Para quem possui um site ou sistema e precisa de ajuda. Ou para quem está a procura de uma
                        solução ideal. Nós te ajudamos em qualquer situação!
                    </p>
                </div>
            </div>
        </section>
    );
}
