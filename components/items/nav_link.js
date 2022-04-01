import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import styles from './Items.module.scss'
const NavLink = ({ href, title, setNav }) => {
  const router = useRouter()
  console.log(router.asPath)
  return (
    <li className={styles.nav_link}>
      <Link href={`/${href}`}>
        <a onClick={() => setNav(false)}>{title}</a>
      </Link>
      <span
        className={`${styles.link_underline} ${
          router.asPath === '/' + href ? styles.active : ''
        }`}
      ></span>
    </li>
  )
}
export default NavLink
