import { IconProps } from '@common/icons/icons.utils'
import styles from './Category.module.css'
import React from 'react'

interface CategoryProps {
  Icon: React.ComponentType<IconProps>
  title: string
  description: string
}
export const Category: React.FC<CategoryProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className={styles.category}>
      <div className={styles['category__icon']}>
        <Icon color={'white'} />
      </div>
      <div className={styles['category__desc']}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
