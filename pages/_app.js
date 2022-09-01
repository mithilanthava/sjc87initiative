import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
