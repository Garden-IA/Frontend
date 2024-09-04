// pages/_app.js
import './public/output.css';
import type { AppProps } from 'next/app';
import './src/config/i18n';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
