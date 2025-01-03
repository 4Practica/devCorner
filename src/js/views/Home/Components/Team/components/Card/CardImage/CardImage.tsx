import styles from './CardImage.module.css'

interface CardImageProps {
  image: string
  alt: string
  shape?: 'rounded' | 'square'
  shadow?: boolean
}

export const CardImage: React.FC<CardImageProps> = ({
  image,
  alt,
  shape = 'square',
  shadow = false,
}) => {
  return (
    <div
      className={`${styles.img_container} ${styles[shape]} ${
        shadow ? styles.shadow : ''
      }`}
    >
      <img
        className={`${styles.card_image} ${styles[shape]}`}
        src={image}
        alt={alt}
        width={300}
        height={300}
        loading='lazy'
      />
    </div>
  )
}
