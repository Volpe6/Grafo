import '../styles/globals.css';
import type { AppProps } from 'next/app';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function MyApp({ Component, pageProps }: AppProps) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <Component {...pageProps} />;
}

export default MyApp;
