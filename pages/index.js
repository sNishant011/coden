import Landing from '../components/landing'
import Features from '../components/features'
import Courses from '../components/courses'
import RequestCourseSection from '../components/items/course_request'
import Testemonials from '../components/testemonials'
import PlatformFeature from '../components/platform-feature'
import Head from 'next/head'
const Home = () => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

        <meta name='description' content='Coden, An e-learning platform.' />
        <meta name='theme-color' content='#00c997' />
        <title>CODEN | E-Learning Platform</title>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />

        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png'></link>
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-icon.png'></link>
      </Head>
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
