import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAward } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/items/footer'
import MetaHeading from '../components/meta-heading'
import Nav from '../components/nav'
import NewsletterResistor from '../components/newsletter_registor'
import CoursesCard from '../components/items/course_card'
const Courses = () => {
  return (
    <>
      <MetaHeading title='Courses' />
      <Nav />
      <div className='main-courses-pg'>
        <h1>Our Courses</h1>
        <div className='search-container'>
          <input
            type='text'
            placeholder='Type to Search...'
            name='search-query'
            id='search-query'
            autoComplete='off'
            required
          />
          <Link href='/courses'>
            <a>
              <button className='btn round-rect'>
                <FontAwesomeIcon icon={faSearch} className='icon' />
                <div className='text'>Search</div>
              </button>
            </a>
          </Link>
        </div>
        <h2>
          <div className='icon-container'>
            <FontAwesomeIcon icon={faAward} className='icon' />
          </div>
          Certifable Course
        </h2>
        <div className='course-container'>
          <div className='courses'>
            <CoursesCard
              title='Full on Laravel and Vue'
              src='illustrations_imgs/landing.png'
            />
            <CoursesCard
              title='Build Apps with Flutter'
              src='illustrations_imgs/flutter.png'
            />
            <CoursesCard
              title='Reactify Web'
              src='illustrations_imgs/react.png'
            />
          </div>
        </div>
      </div>
      <div className='footer-container'>
        <NewsletterResistor />
        <Footer />
      </div>
    </>
  )
}
export default Courses
