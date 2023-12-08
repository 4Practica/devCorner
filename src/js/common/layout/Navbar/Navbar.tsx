import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false)
  console.log(styles)
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

        <div
          className={`${styles.navbar_hamburguer}`}
          onClick={() => {
            setHamburguerIsOpen((prev) => {
              return !prev
            })
          }}
        >
          <div className={styles.navbar_hamburguer__item} />
        </div>
      </div>

      <div className={styles.navbar_content}>
        <ul className={`${styles.navbar_content__items}`}>
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
            bgColor='bg-primary'
            fontColor='color-light'
            text='Contact'
            proportion='button_small'
            onClick={(event) => {
              console.log(event.target)
            }}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
