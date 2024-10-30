import styles from './Categories.module.css'
import { Chip } from '@common/components/Chip'

const Categories = () => {
  return (
    <div className={styles.categories}>
      <Chip variant='primary' proportion='sm'>
        CATEGORIES
      </Chip>
      <h2>Explore the World of Development</h2>
      <p>
        Whether you're diving into new frameworks, refining your coding skills,
        or exploring trends in tech, this space is designed for developers at
        every level. Discover topics, gain insights, and keep your projects
        sharp and future-ready!
      </p>
      <div>
        
      </div>
    </div>
  )
}

export default Categories
