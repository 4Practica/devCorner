import styles from './CardImage.module.css'

interface CardImageProps {
  image: string
  shape?: 'rounded' | 'square'
  shadow?: boolean
}

export const CardImage: React.FC<CardImageProps> = ({
  image,
  shape = 'square',
  shadow = false,
}) => {
  return (
    <div
      className={`${styles.img_container} ${styles[shape]} ${
        shadow ? styles.shadow : ''
      }`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/*    <img
         className={`${styles.card_image} ${styles[shape]}`}
         src={image}
         alt='Team member'
       /> */}
    </div>
  )
}
