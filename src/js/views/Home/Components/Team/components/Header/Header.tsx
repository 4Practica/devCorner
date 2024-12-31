import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={`${styles.header_container}`}>
      <h2>Meet our team</h2>
      <p>
        Our team is made up of passionate developers and tech enthusiasts who
        are dedicated to sharing knowledge and driving innovation. With diverse
        expertise and a shared commitment to excellence, we work together to
        create valuable content that helps you stay ahead in the world of
        software development and technology.
      </p>
    </div>
  )
}
