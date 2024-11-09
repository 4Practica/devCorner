import styles from './CardInfo.module.css'

interface CardInfoProps {
  name: string
  position: string
  description: string
}

export const CardInfo: React.FC<CardInfoProps> = ({
  name,
  position,
  description,
}) => {
  return (
    <div className={`${styles.card_info}`}>
      <h1 className={`${styles.card_name}`}>{name}</h1>
      <span className={`${styles.card_position}`}>{position}</span>
      <p className={`${styles.card_description}`}>{description}</p>
    </div>
  )
}
