import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { Button } from '../../components'

const Navbar = () => {
  return (
    <nav className={styles.color}>
      <div>
        <picture>
          <source srcSet='' media='' />
          <img src='' alt='' />
        </picture>
      </div>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/about'>About us</Link>
      </ul>
      <Button
        type='button'
        bgColor='bg-primary'
        fontColor='color-light'
        text='Contact'
        proportion='button_regular'
        onClick={(event) => {
          console.log(event.target)
        }}
      />
    </nav>
  )
}

export default Navbar
