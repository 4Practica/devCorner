import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components'
import styles from './Navbar.module.css'
import { NavbarHamburguer } from './components'
import { useButtonConfig, useButtonHandler } from './Navbar.hooks'

const Navbar = () => {
  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false)
  const buttonConfig = useButtonConfig()
  useEffect(() => {
    return setHamburguerIsOpen(false)
  }, [])
  return (
    <nav
      className={`${styles.navbar_box} ${
        hamburguerIsOpen ? styles.active : ''
      }`}
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
            bgColor={buttonConfig.background}
            fontColor={buttonConfig.color}
            proportion={buttonConfig.proportion}
            onClick={useButtonHandler}
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
