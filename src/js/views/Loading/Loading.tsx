import styles from './Loading.module.css'
export const Loading = () => {
  return (
    <div className={styles['loader-box']}>
      <div className={styles['loader']}></div>
    </div>
  )
}
