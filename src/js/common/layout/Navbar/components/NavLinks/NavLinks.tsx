import { Link } from 'react-router-dom'
import styles from './NavLinks.module.css'

const NavLinks = () => {
  return (
    <Link to='/' className={`${styles.link}`}>
      Algún texto {/* Falta culminar */}
    </Link>
  )
}

export default NavLinks
