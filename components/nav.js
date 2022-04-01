import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import NavLink from './items/nav_link'
const Nav = () => {
  const [nav, setNav] = useState(false)
  // for sticky nav
  const navRef = useRef(null)
  if (typeof window !== 'undefined') {
    var prevScrollpos = window.pageYOffset
  }
  function onScroll() {
    //navRef.current
    var currentScrollPos = window.pageYOffset
    if (navRef.current !== null) {
      if (prevScrollpos > currentScrollPos) {
        navRef.current.style.top = '0'
        navRef.current.style.background = '#1f1d1d'
        if (currentScrollPos === 0) {
          navRef.current.style.background = '#3f3f3f'
        }
      } else {
        navRef.current.style.top = '-80px'
      }
      prevScrollpos = currentScrollPos
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return (
    <nav ref={navRef}>
      <div className='logo'>
        <span id='logo'>
          <NavLink href='' title='CodeN' setNav={setNav} />
        </span>
      </div>
      <ul className={`links ${nav ? 'open' : ''}`}>
        <NavLink href='' title='Home' setNav={setNav} />

        <NavLink href='courses' title='Courses' setNav={setNav} />

        <NavLink href='books' title='Books' setNav={setNav} />
        <NavLink href='queries' title='Queries' setNav={setNav} />

        <Link href='/dashboard'>
          <a onClick={() => setNav(false)}>
            <button className='btn stroke'>My&nbsp;Progress</button>
          </a>
        </Link>
      </ul>

      <div
        className={`menu-btn ${nav ? 'close-btn' : ''}`}
        onClick={() => setNav(!nav)}
      >
        <span className='burger b1'></span>
        <span className='burger b2'></span>
        <span className='burger b3'></span>
      </div>
    </nav>
  )
}
export default Nav
