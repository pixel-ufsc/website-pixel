import styles from './directors.module.css';
import Link from 'next/link';
// Interfaces
import { useNextSanityImage } from 'next-sanity-image';
// Lib
import { sanityClient } from '@lib/sanity.client';
// Components
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';
import MemberCard from '@components/ui/card/member-card/member-card.component';
import SliderCarousel from '@components/ui/slider-carousel/slider-carousel.component';
// Assets
import { HiUserGroup } from 'react-icons/hi';

export default function Directors({ title, directors }) {
    // Ordena os diretores, colocando o presidente em primeiro lugar
    const sortedDirectors = directors?.sort((a, b) => {
        if (a?.data?.role === 'Presidente') return -1;
        if (b?.data?.role === 'Presidente') return 1;
        return 0;
    });

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <SimpleTitle fontSize="small" textColor={'purple-gradient'}>
                    Nossos membros
                </SimpleTitle>
                <p>
                    Esses são alguns dos membros que fazem parte da nossa equipe. Conheça todos os membros em{' '}
                    <Link href={'/sobre'}>sobre nós</Link>.
                </p>
            </div>
            <SliderCarousel containerClassName={styles.slider_container} wrapperClassName={styles.slider_items_wrapper}>
                {sortedDirectors?.map((director, index) => {
                    const imageProps = useNextSanityImage(sanityClient, director?.data?.image);
                    return (
                        <MemberCard
                            key={index}
                            name={director?.data?.name}
                            role={director?.data?.role}
                            imageSrc={imageProps.src}
                        />
                    );
                })}
                <Link href={'/sobre'} className={styles.link}>
                    <div className={styles.circle_container}>
                        <div className={styles.circle}>
                            <div className={styles.hover_content}>
                                <div className={styles.hover_circle} />
                                <HiUserGroup className={styles.group_icon} />
                            </div>
                            <SimpleTitle textColor={'white'}>+20</SimpleTitle>
                            <p>membros</p>
                        </div>
                    </div>
                </Link>
            </SliderCarousel>
        </div>
    );
}
