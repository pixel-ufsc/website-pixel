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
    // Separar membros atuais e ex-membros
    const currentMembers = members?.filter((member) => member?.data?.isCurrentMember);
    const exMembers = members?.filter((member) => !member?.data?.isCurrentMember);

    // Ordenar os membros atuais, colocando o presidente em primeiro lugar
    const sortedCurrentMembers = currentMembers?.sort((a, b) => {
        if (a?.data?.role === 'Presidente') return -1;
        if (b?.data?.role === 'Presidente') return 1;
        return 0;
    });

    return (
        <div className={styles.container}>
            {/* Seção de Membros Atuais */}
            <SimpleTitle textColor={'purple-gradient'} className={styles.title}>
                Nossos membros
            </SimpleTitle>
            <div className={styles.grid_wrapper}>
                {sortedCurrentMembers?.map((member) => {
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

            {/* Seção de Ex-Membros */}
            {exMembers.length >= 0 && (
                <>
                    <SimpleTitle textColor={'purple-gradient'} className={styles.title}>
                        Ex-Membros
                    </SimpleTitle>
                    <div className={styles.grid_wrapper}>
                        {exMembers?.map((member) => {
                            const imageProps = useNextSanityImage(sanityClient, member.data.image);
                            return (
                                <MemberCard
                                    key={member?._id}
                                    name={member?.data?.name}
                                    // role={member?.data?.role}
                                    imageSrc={imageProps?.src}
                                    loader={imageProps?.loader}
                                />
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
}

