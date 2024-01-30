import { usePostcard } from '../../PostCard.hooks'
import styles from './Image.module.css'
type PositionOptions =
  | 'center'
  | 'center right'
  | 'center left'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right'
export interface ImageProps {
  src: string
  alt: string
  position: PositionOptions
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  position = 'center',
}) => {
  usePostcard('Image')
  return (
    <div className={styles['image-box']}>
      <img
        src={src}
        alt={alt}
        loading={'lazy'}
        style={{ objectPosition: position }}
      />
    </div>
  )
}
