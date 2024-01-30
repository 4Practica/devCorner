import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../components'
import styles from './Navbar.module.css'
import { NavbarHamburguer } from './components'
import { useButtonHandler } from './Navbar.hooks'
import { BG_STYLES_CLASSES, COLOR_STYLES_CLASSES } from '@common/utils/enums'
import { AppContainer } from '..'

const Navbar = () => {
  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    return setHamburguerIsOpen(false)
  }, [])
  return (
    <AppContainer>
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
            <h2>{'<Img/>'}Logo</h2>
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
              bgColor={BG_STYLES_CLASSES.PRIMARY}
              fontColor={COLOR_STYLES_CLASSES.LIGHT}
              proportion={'md'}
              onClick={useButtonHandler(navigate)}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </nav>
    </AppContainer>
  )
}

export default Navbar
