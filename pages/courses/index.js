import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAward } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/items/footer'
import MetaHeading from '../../components/meta-heading'
import Nav from '../../components/nav'
import NewsletterResistor from '../../components/newsletter_registor'
import CoursesCard from '../../components/items/course_card'
import RequestCourseSection from '../../components/items/course_request'
import CoursesData from '../../courses_data'

const Courses = () => {
  const courses = CoursesData()

  return (
    <>
      <MetaHeading
        title='Courses'
        thumbnail='https://i.ibb.co/tXnnyj4/Screenshot-2021-08-03-10-45-41.png'
      />
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
            {courses.map((course, index) => (
              <CoursesCard
                key={index}
                title={course.title}
                src={course.thumbnail_src}
                description={course.course_description}
                course_slug={course.slug}
              />
            ))}
          </div>
        </div>
        <RequestCourseSection />
      </div>
      <div className='footer-container'>
        <NewsletterResistor />
        <Footer />
      </div>
    </>
  )
}
export default Courses
