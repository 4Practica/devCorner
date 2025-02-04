import styles from './Categories.module.css'
import { Chip } from '@common/components/Chip'
import { categories } from './Categories.utils'
import { Category } from '../Category/Category'
import { SquareBackground, SquareMadeOfDots } from '@common/patterns'
import { CircleMadeOfDots } from '@common/patterns/CircleMadeOfDots'

const Categories = () => {
  return (
    <div className={styles['categories-box']}>
      <div className={styles.categories}>
        <div className={styles.categories__desc}>
          <Chip variant='primary' proportion='md' bold={true}>
            CATEGORIES
          </Chip>
          <h2>Development Insights and Resources</h2>
          <p>
            Whether you're diving into new frameworks, refining your coding
            skills, or staying updated with tech trends, this section provides
            valuable insights and tools to help developers at every level
            succeed.
          </p>
        </div>
        <div className={styles['categories__items']}>
          {categories.map((category) => (
            <Category
              key={crypto.randomUUID()}
              title={category.title}
              description={category.description}
              Icon={category.Icon}
            />
          ))}
        </div>
        <div className={styles['categories__img']}>
          <div className={styles['categories__img--pattern']}>
            <CircleMadeOfDots />
          </div>
          <picture>
            <source
              width='450'
              height='450'
              media='(min-width: 1220px)'
              srcSet='https://img.devcorner.top/landing/categories.webp'
            />
            <source
              width='420'
              height='420'
              media='(min-width: 1020px)'
              srcSet='https://img.devcorner.top/landing/categories.webp'
            />
            <source
              width='380'
              height='380'
              media='(min-width: 920px)'
              srcSet='https://img.devcorner.top/landing/categories.webp'
            />
            <source
              width='380'
              height='380'
              media='(min-width: 720px)'
              srcSet='https://img.devcorner.top/landing/categories.webp'
            />
            <source
              width='380'
              height='380'
              media='(min-width: 520px)'
              srcSet='https://img.devcorner.top/landing/categories.webp'
            />
            <img
              width='320'
              height='320'
              loading='lazy'
              src='https://img.devcorner.top/landing/categories.webp'
              alt=''
              className={styles['categories__img--pic']}
            />
          </picture>
          <div className={styles['categories__img--pattern']}>
            <SquareMadeOfDots />
          </div>
        </div>
      </div>
      <div className={styles['categories-background']}>
        <SquareBackground />
      </div>
    </div>
  )
}

export default Categories
