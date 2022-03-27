import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
const BookCard = ({ src, title, active, description }) => {
  return (
    <div className={`course-card ${active ? 'active-card' : ''}`}>
      <Image
        src={src}
        width={400}
        priority
        objectFit='cover'
        height={300}
        alt={title}
      />
      <h3 className='course-title'>{`${title.slice(0, 15)}...`}</h3>
      <p>{description.slice(0, 150)}...</p>
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
export default BookCard
