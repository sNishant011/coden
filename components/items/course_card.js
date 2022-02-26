import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
const CoursesCard = ({
  src,
  title,
  active,
  description,
  completion_percent,
  course_slug,
}) => {
  return (
    <div className={`course-card ${active ? 'active-card' : ''}`}>
      <Image src={require(`../../public/${src}`)} quality={50} alt={title} />
      <h3 className='course-title'>{title}</h3>
      <p>{description}</p>
      <Link href='/courses/[course_slug]' as={`/courses/${course_slug}`}>
        <a className='btn warrow'>
          <span id='button-text'>Checkout</span>
          <div className='icon-container'>
            <FontAwesomeIcon icon={faArrowRight} className='icon' />
          </div>
        </a>
      </Link>
      {completion_percent ? (
        <span
          className='completion-status'
          style={{ width: completion_percent + '%' }}
        ></span>
      ) : (
        ''
      )}
    </div>
  )
}
export default CoursesCard
