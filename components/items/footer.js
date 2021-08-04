import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import {
  faBookReader,
  faBookmark,
  faLayerGroup,
  faFeatherAlt,
  faPhoneAlt,
  faMapMarkedAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <footer>
      <div className='about-section'>
        <h2>About Code Nepal</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex nam eum
          id, porro inventore, non nesciunt sapiente tenetur officiis et quis
          libero, beatae architecto fuga exercitationem. Earum, repellendus.
          Quasi, et!
        </p>
      </div>
      <div className='quick-links'>
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link href='/courses'>
              <a>
                <FontAwesomeIcon icon={faBookmark} />
                Courses
              </a>
            </Link>
          </li>
          <li>
            <Link href='/books'>
              <a>
                <FontAwesomeIcon icon={faBookReader} />
                Notes
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>
                <FontAwesomeIcon icon={faLayerGroup} />
                Community
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>
                <FontAwesomeIcon icon={faFeatherAlt} />
                Careers at CodeN
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='contacts'>
        <h2>Contact Us</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faPhoneAlt} />
            +977-9800000000
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            shresthanishant011@gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            Tokha-3, Kathmandu, Nepal
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
