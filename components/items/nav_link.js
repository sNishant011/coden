import Link from 'next/link'
const NavLink = ({ href, title, setNav }) => {
  return (
    <Link href={`/${href}`}>
      <a onClick={() => setNav(false)}>{title}</a>
    </Link>
  )
}
export default NavLink
