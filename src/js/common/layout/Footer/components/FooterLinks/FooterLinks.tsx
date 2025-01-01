import { Link } from 'react-router-dom'
import styles from './FooterLinks.module.css'

type FooterLinkProps = {
  arrayOfLinks: {
    id: string
    route: string
    text: string
  }[]
}

const FooterLinks = ({ arrayOfLinks }: FooterLinkProps) => {
  return (
    <ul className={`${styles.list_container}`}>
      {arrayOfLinks.map((link) => (
        <li key={link.id}>
          <Link to={link.route} className={`${styles.link}`}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default FooterLinks
