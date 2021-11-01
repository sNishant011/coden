import MetaHeading from '../components/meta-heading'
import Nav from '../components/nav'
import Landing from '../components/landing'
import Features from '../components/features'
import Courses from '../components/courses'
import RequestCourseSection from '../components/items/course_request'
import Testemonials from '../components/testemonials'
import PlatformFeature from '../components/platform-feature'
const Home = () => {
  return (
    <>
      <Landing />
      <Features />
      <Courses />
      <RequestCourseSection />
      <Testemonials />
      <PlatformFeature />
    </>
  )
}
export default Home
