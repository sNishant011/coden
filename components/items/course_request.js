import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const RequestCourseSection = () => {
  return (
    <section className='course-request'>
      <h1>Didnt find the right course?</h1>
      <Link href='/course_request'>
        <a className='btn warrow'>
          <span id='button-text'>Request Course</span>
          <div className='icon-container'>
            <FontAwesomeIcon icon={faArrowRight} className='icon' />
          </div>
        </a>
      </Link>
    </section>
  )
}
export default RequestCourseSection
