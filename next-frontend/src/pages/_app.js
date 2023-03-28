import '@styles/globals.css';
import { useRouter } from 'next/router';
// Components
import Header from '@components/ui/header/header/header.component';
import MediaHeader from '@components/ui/header/media-header/media-header.component';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
