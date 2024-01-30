import React from 'react'
import styles from './Author.module.css'
import { usePostcard } from '../../PostCard.hooks'
export interface AuthorProps {
  children: React.ReactNode
}

export const Author: React.FC<AuthorProps> = ({ children }) => {
  usePostcard('Author')
  return <h5 className={styles.postcard_author}>{children}</h5>
}
