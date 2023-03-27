import '@styles/globals.css';
// Components
import Header from '@components/ui/header/header/header.component';
import MediaHeader from '@components/ui/header/media-header/media-header.component';
import Footer from '@components/ui/footer/footer/footer.component';

export default function App({ Component, pageProps }) {
    return (
        <>
            <MediaHeader />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
