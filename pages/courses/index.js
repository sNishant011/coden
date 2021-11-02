import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAward } from '@fortawesome/free-solid-svg-icons'
import CoursesCard from '../../components/items/course_card'
import RequestCourseSection from '../../components/items/course_request'
import CoursesData from '../../components/data/courses_data'

const Courses = () => {
  const courses = CoursesData()

  return (
    <>
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
    </>
  )
}
export default Courses
