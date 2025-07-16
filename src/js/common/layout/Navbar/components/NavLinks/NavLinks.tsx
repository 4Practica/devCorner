import { NavLink } from 'react-router-dom'
// import styles from './NavLinks.module.css'

const NavLinks = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/blog', label: 'Blog' },
  ]

  return (
    <>
      {links.map((link) => (
        <li key={link.to}>
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </>
  )
}

export default NavLinks
