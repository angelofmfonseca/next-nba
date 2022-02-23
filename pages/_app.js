import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NBA App</title>
        <meta name="description" content="Superheroes app" />
        <link rel="icon" type="image/x-icon" href="/basketball.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
