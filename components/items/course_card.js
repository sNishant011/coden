import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
const CoursesCard = ({ src, title, active }) => {
  return (
    <div className={`course-card ${active ? 'active-card' : ''}`}>
      <Image src={require(`../../public/${src}`)} alt={title} />
      <h3 className='course-title'>{title}</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem blanditiis
        quae cumque non vero ad est atque! Deserunt similique a tenetur et dolor
        modi consequatur. Eum praesentium iure voluptatem excepturi.
      </p>
      <Link href='/books'>
        <a className='btn warrow'>
          <span id='button-text'>Checkout</span>
          <div className='icon-container'>
            <FontAwesomeIcon icon={faArrowRight} className='icon' />
          </div>
        </a>
      </Link>
    </div>
  )
}
export default CoursesCard
