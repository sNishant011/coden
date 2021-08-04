import MetaHeading from '../components/meta-heading'
import Nav from '../components/nav'
import Landing from '../components/landing'
import Features from '../components/features'
import Courses from '../components/courses'
import RequestCourseSection from '../components/items/course_request'
import Testemonials from '../components/testemonials'
import PlatformFeature from '../components/platform-feature'
import NewsletterResistor from '../components/newsletter_registor'
import Footer from '../components/items/footer'
const Home = () => {
  return (
    <>
      <MetaHeading
        title='Home'
        thumbnail='https://i.ibb.co/bm4ZLHn/Screenshot-2021-08-03-10-48-11.png'
      />
      <Nav />
      <div className='main'>
        <Landing />
        <Features />
        <Courses />
        <RequestCourseSection />
        <Testemonials />
        <PlatformFeature />
      </div>
      <div className='footer-container'>
        <NewsletterResistor />
        <Footer />
      </div>
    </>
  )
}
export default Home
