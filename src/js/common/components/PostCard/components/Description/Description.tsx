import React from 'react'
import styles from './Description.module.css'
import { usePostcard } from '../../PostCard.hooks'

export interface DescriptionProps {
  children: React.ReactNode
}

export const Description: React.FC<DescriptionProps> = ({ children }) => {
  usePostcard('Description')
  return (
    <div className={styles.postcard_description}>
      <p>{children}</p>
    </div>
  )
}
