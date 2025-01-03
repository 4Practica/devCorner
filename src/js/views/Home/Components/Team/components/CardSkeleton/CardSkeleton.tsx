import styles from './CardSkeleton.module.css'

export function CardSkeleton() {
  return (
    <div className={`${styles['card-skeleton-box']}`}>
      <div
        className={`${styles.card_image_container} ${styles['animate-beat']}`}
      ></div>

      <div className={`${styles.card_info} `}>
        <div className={`${styles.card_name} ${styles['animate-beat']}`}></div>
        <div
          className={`${styles.card_position} ${styles['animate-beat']}`}
        ></div>
        <div className={`${styles.card_description} ${styles['animate-beat']}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`${styles.card_social} ${styles['animate-beat']}`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
