import Head from 'next/head';
import '@/styles/globals.css'
import "../styles/scrollbar.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Portfólio - Thierry Castro</title>
    </Head>
    <Component {...pageProps} />
  </>
  )
}
