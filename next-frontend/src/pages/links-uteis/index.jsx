import styles from './links-uteis.module.css';
import Link from 'next/link';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import LinksHeader from '@components/ui/header/links-header/links-header.component';
import LinkButton from '@components/ui/buttons/link-button/link-button.component';
import { getLinksPageData } from '@lib/sanity.client';

export default function LinksUteis({ linksData }) {
    const links = linksData[0]?.data?.links ? linksData[0]?.data?.links : [];

    return (
        <PageContainer hasHeader={false} hasFooter={false} description={'Links úteis da Pixel.'}>
            <div className={styles.background}>
                <div className={styles.container}>
                    <Link href="/">
                        <LinksHeader />
                    </Link>
                    {links && links?.length > 0 && (
                        <div className={styles.container_buttons}>
                            {links?.map((link) => (
                                <LinkButton
                                    key={link?._id}
                                    url={link?.url ? link.url : '/'}
                                    title={link?.title ? link.title : '-'}
                                    target={link?.open_in_new_tab ? '_blank' : '_self'}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </PageContainer>
    );
}

export async function getStaticProps() {
    const linksData = await getLinksPageData();

    return {
        props: {
            linksData,
        },
    };
}
