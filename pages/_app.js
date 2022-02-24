import Head from "next/head";
import "../styles/globals.css";
import favicon from "public/favicon.ico";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>PokeStore</title>
        <meta name="description" content="PokeStore app" />
        <link rel="icon" type="image/x-icon" href={favicon.src} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
