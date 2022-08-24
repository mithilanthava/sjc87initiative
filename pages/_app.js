import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
