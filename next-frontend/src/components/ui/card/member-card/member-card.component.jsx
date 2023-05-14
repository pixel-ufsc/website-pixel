import CardFrame from '@components/ui/card/card-frame/card-frame.component';
import styles from './member-card.module.css';
import Image from 'next/image';

export default function MemberCard({ imageSrc, name, role, ...imageProps }) {
    return (
        <CardFrame borderRadius={'6%'} className={styles.container}>
            <div className={styles.image_wrapper}>
                {imageSrc && (
                    <Image
                        fill
                        sizes="(max-width: 256px) 100vw, 256px"
                        className={styles.image}
                        src={imageSrc}
                        alt={name ? name : 'Foto do membro'}
                        quality={100}
                        {...imageProps}
                    />
                )}
            </div>
            <div className={styles.text_container}>
                <h4>{name ? name : 'Name'}</h4>
                <h5>{role ? role : 'Role'}</h5>
            </div>
        </CardFrame>
    );
}
