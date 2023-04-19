import React from 'react';
import styles from './members-grid.module.css';
// Interfaces
import { Member } from '@models/member.model';
import { useNextSanityImage } from 'next-sanity-image';
// Lib
import { sanityClient } from '@lib/sanity.client';
// Components
import MemberCard from '@components/ui/card/member-card/member-card.component';

export default function MembersGrid({ members }: { members: Member[] }) {
    return (
        <div className={styles.container}>
            <div className={styles.grid_wrapper}>
                {members?.map((member) => {
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
