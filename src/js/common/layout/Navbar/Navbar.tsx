import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../components'
import styles from './Navbar.module.css'
import { NavbarHamburguer } from './components'
import { useButtonHandler } from './Navbar.hooks'
import { AppContainer } from '..'
import { BG_STYLES_CLASSES } from '@common/utils/enums'

const Navbar = () => {
  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    return setHamburguerIsOpen(false)
  }, [])
  return (
    <AppContainer elementType='header' bgColor={BG_STYLES_CLASSES.DARK}>
      <nav
        className={`${styles.navbar_box} ${
          hamburguerIsOpen ? styles.active : ''
        } ${location.pathname === '/' ? styles.home_nav : styles.regular_nav}
        `}
      >
        <div className={`${styles.navbar_main}`}>
          <div className={styles.navbar_logo}>
            <picture>
              <source srcSet='' media='' />
              <img src='' alt='' />
            </picture>
            <h2><Link to="/">{'4Practice.'}</Link></h2>
          </div>
          <NavbarHamburguer
            isOpen={hamburguerIsOpen}
            handleOpen={setHamburguerIsOpen}
          />
        </div>

        <div className={styles.navbar_content}>
          <ul className={`${styles.navbar_content__items}`}>
            {/* <NavbarLink /> */}
            <li className={``}>
              <Link to='/'>Home</Link>
            </li>
            <li className={``}>
              <Link to='/blog'>Blog</Link>
            </li>
            <li className={``}>
              <Link to='/about'>About us</Link>
            </li>
          </ul>
          <div className={``}>
            <Button
              type='button'
              variant='primary'
              proportion={'md'}
              onClick={useButtonHandler(navigate)}
            >
              Newsletter
            </Button>
          </div>
        </div>
      </nav>
    </AppContainer>
  )
}

export default Navbar
