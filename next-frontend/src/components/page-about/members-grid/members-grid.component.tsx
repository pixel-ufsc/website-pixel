import React from 'react';
import styles from './members-grid.module.css';
// Interfaces
import { Member } from '@models/member.model';
import { useNextSanityImage } from 'next-sanity-image';
// Lib
import { sanityClient } from '@lib/sanity.client';
// Components
import MemberCard from '@components/ui/card/member-card/member-card.component';
import SimpleTitle from '@components/ui/title/simple-title/simple-title.component';

export default function MembersGrid({ members }: { members: Member[] }) {
    // Ordena os membros, colocando o presidente em primeiro lugar
    const sortedMembers = members?.sort((a, b) => {
        if (a?.data?.role === 'Presidente') return -1;
        if (b?.data?.role === 'Presidente') return 1;
        return 0;
    });

    return (
        <div className={styles.container}>
            <SimpleTitle textColor={'purple-gradient'} className={styles.title}>
                Nossos membros
            </SimpleTitle>

            <div className={styles.grid_wrapper}>
                {sortedMembers?.map((member) => {
                    const imageProps = useNextSanityImage(sanityClient, member.data.image);
                    return (
                        <MemberCard
                            key={member?._id}
                            name={member?.data?.name}
                            role={member?.data?.role}
                            imageSrc={imageProps?.src}
                            loader={imageProps?.loader}
                        />
                    );
                })}
            </div>
        </div>
    );
}
