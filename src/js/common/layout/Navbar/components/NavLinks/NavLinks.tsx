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
        <NavLink key={link.to} to={link.to}>
          <li>{link.label}</li>
        </NavLink>
      ))}
    </>
  )
}

export default NavLinks
