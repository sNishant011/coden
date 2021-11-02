import Footer from '../components/items/footer'
import MetaHeading from '../components/meta-heading'
import Nav from '../components/nav'
import NewsletterResistor from '../components/newsletter_registor'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className='app'>
      <MetaHeading
        title='Home'
        thumbnail='https://i.ibb.co/bm4ZLHn/Screenshot-2021-08-03-10-48-11.png'
      />

      <Nav />
      <div className='main'>
        <Component {...pageProps} />
      </div>
      <div className='footer-container'>
        <NewsletterResistor />
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
