import '@styles/globals.css';
import { useRouter } from 'next/router';
// Components
import Header from '@components/ui/header/header/header.component';
import MediaHeader from '@components/ui/header/media-header/media-header.component';

export default function App({ Component, pageProps }) {
    const router = useRouter();
    // Caso o path seja /links-uteis, não renderiza o Header
    // Adicione mais casos para caso a página não for renderizar o Header
    switch (router.pathname) {
        case '/links-uteis':
            return <Component {...pageProps} />;

        default:
            return (
                <>
                    <MediaHeader />
                    <Header />
                    <Component {...pageProps} />
                </>
            );
    }

    // return (
    //     <>
    //         <MediaHeader />
    //         <Header />
    //         <Component {...pageProps} />
    //     </>
    // );
}

