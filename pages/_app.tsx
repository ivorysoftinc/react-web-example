import '../styles/main.css';
import Head from "next/head";
import type { AppProps } from 'next/app'


// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <>       
    <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />
      <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> 
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
