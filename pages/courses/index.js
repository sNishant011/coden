import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAward } from '@fortawesome/free-solid-svg-icons'
import CoursesCard from '../../components/items/course_card'
import RequestCourseSection from '../../components/items/course_request'
import CoursesData from '../../data/courses_data'
import style from '../../styles/course.module.scss'
import { useState } from 'react'
const Courses = () => {
  const courses = CoursesData()
  const [filteredCourses, setFilteredCourses] = useState(CoursesData())
  const [query, setQuery] = useState('')
  const filterCourse = (query1) => {
    setFilteredCourses(
      courses.filter((c) =>
        c.title.toLocaleLowerCase().includes(query1.toLowerCase())
      )
    )
  }
  return (
    <>
      <div className={style.main_courses_pg}>
        <h1>Our Courses</h1>
        <div className={style.search_container}>
          <input
            type='text'
            placeholder='Type to Search...'
            name='search-query'
            id='search-query'
            autoComplete='off'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              filterCourse(e.target.value)
            }}
            required
          />
          <button
            className={`btn ${style.round_rect}`}
            onClick={() => filterCourse}
          >
            <FontAwesomeIcon icon={faSearch} className={style.icon} />
            <div className='text'>Search</div>
          </button>
        </div>
        <h2>
          <div className={style.icon_container}>
            <FontAwesomeIcon icon={faAward} className={style.icon} />
          </div>
          Certifable Course
        </h2>
        <div className={style.course_container}>
          <div className='courses'>
            {filteredCourses.map((course, index) => (
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
