import '@styles/globals.css';
// Components
import Header from '@components/ui/header/header.component';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}
