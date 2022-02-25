import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import style from '../../styles/item/course_request.module.scss'
const RequestCourseSection = () => {
  return (
    <section className={style.course_request}>
      <h1>Didnt find the right course?</h1>
      <Link href='/course_request'>
        <a className={`${style.btn} btn warrow`}>
          <span className={style.button_text}>Request Course</span>
          <div className='icon-container'>
            <FontAwesomeIcon icon={faArrowRight} className='icon' />
          </div>
        </a>
      </Link>
    </section>
  )
}
export default RequestCourseSection
