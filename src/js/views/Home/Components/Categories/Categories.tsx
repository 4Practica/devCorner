import styles from './Categories.module.css'
import { Chip } from '@common/components/Chip'


const Categories = () => {
  return (
    <div className={styles.categories}>
      <Chip variant='primary' proportion='sm'>CATEGORIES</Chip>
      <h2>Categories</h2>
    </div>
  )
}

export default Categories