import styles from './directors.module.css';
import Link from 'next/link';
// Interfaces
import { useNextSanityImage } from 'next-sanity-image';
// Lib
import { sanityClient } from '@lib/sanity.client';
// Components
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';
import MemberCard from '@components/ui/card/member-card/member-card.component';
import SliderCarousel from './slider-carousel/slider-carousel.component';

export default function Directors({ title, directors }) {
    return (
        <div className={styles.container}>
            <SimpleTitle fontSize="small" textColor={'purple-gradient'}>
                Nossos membros
            </SimpleTitle>
            <SliderCarousel containerClassName={styles.slider_container} wrapperClassName={styles.slider_items_wrapper}>
                {directors?.map((director, index) => {
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
                            <SimpleTitle textColor={'white'}>+20</SimpleTitle>
                            <p>membros</p>
                        </div>
                    </div>
                </Link>
            </SliderCarousel>
        </div>
    );
}
