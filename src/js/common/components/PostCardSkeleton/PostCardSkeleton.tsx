import styles from './PostCardSkeleton.module.css'

interface PostCardSkeletonProps {
  opacity?: string
}

const POSTCARD_DEFAULT_OPACITY = 0.8

export const PostCardSkeleton: React.FC<PostCardSkeletonProps> = ({
  opacity = POSTCARD_DEFAULT_OPACITY,
}) => {
  return (
    <div className={`${styles.postcard_skeleton_box}`} style={{ opacity }}>
      <div className={`${styles.image}`}></div>
      <div className={`${styles.tags_box}`}></div>
      <div>
        <div className={`${styles.large_box}`}></div>
        <div className={`${styles.large_box}`}></div>
      </div>
      <div>
        <div className={`${styles.medium_box}`}></div>
        <div className={`${styles.medium_box}`}></div>
      </div>
      <div className={`${styles.small_box}`}></div>
    </div>
  )
}
