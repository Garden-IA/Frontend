// pages/_app.js
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import './src/config/i18n';
import { appWithTranslation } from 'next-i18next';
import SessionAuthProvider from './src/context/SessionAuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
