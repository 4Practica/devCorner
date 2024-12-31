import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '@common/components/Button'
import styles from './Navbar.module.css'
import { NavbarHamburguer } from './components'
import { useButtonHandler } from './Navbar.hooks'
import { AppContainer } from '..'
import { BG_STYLES_CLASSES } from '@common/utils/enums'

const Navbar = () => {
  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    return setHamburguerIsOpen(false)
  }, [])

  return (
    <AppContainer
      padding={false}
      elementType='header'
      bgColor={BG_STYLES_CLASSES.DARK}
    >
      <nav
        className={`${styles.navbar_box} ${
          hamburguerIsOpen ? styles.active : ''
        }
        `}
      >
        <div className={`${styles.navbar_main}`}>
          <div className={styles.navbar_logo}>
            <picture>
              <source srcSet='' media='' />
              <img src='' alt='' />
            </picture>
            <h2>
              <NavLink to='/'>{'DevCorner'}</NavLink>
            </h2>
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
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className={``}>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
            <li className={``}>
              <NavLink to='/about'>About us</NavLink>
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
