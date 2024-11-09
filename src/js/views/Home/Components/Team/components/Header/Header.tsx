import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={`${styles.header_container}`}>
      <h2>Meet our team</h2>
      <p>
        Highly professional and capable of running your business across all
        digital channels.
      </p>
    </div>
  )
}
