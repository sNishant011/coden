import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import landingImage from '../public/illustrations_imgs/landing.png'
import style from '../styles/home.module.scss'
import Link from 'next/link'
const Landing = () => {
  return (
    <>
      <div className={style.landing_container}>
        <div className={style.text_container}>
          <h1>
            Best Platform for Self{' '}
            <span id={style.highlighted_text}>
              <br />
              Learners
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            reprehenderit fugit officiis ut consequatur sapiente a facilis
            deleniti, expedita iste!
          </p>
          <Link href='/courses'>
            <a className={`${style.btn} btn warrow`}>
              <span className={`${style.button_text}`}>Browse Courses</span>
              <div className='icon-container'>
                <FontAwesomeIcon icon={faArrowRight} className='icon' />
              </div>
            </a>
          </Link>
        </div>
        <div className='svg-container'>
          <Image src={landingImage} alt='landing-img' />
        </div>
      </div>
    </>
  )
}
export default Landing
