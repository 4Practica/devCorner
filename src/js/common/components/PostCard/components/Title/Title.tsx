import React from 'react'
import styles from './Title.module.css'
import { usePostcard } from '../../PostCard.hooks'
export type TitleProps = {
  headerType: 'h2' | 'h3' | 'h4'
  children: React.ReactNode
}
const Title: React.FC<TitleProps> = ({ headerType, children }) => {
  usePostcard('Title')
  const title = React.createElement(
    headerType,
    {
      className: `${styles['post-title']}`,
    },
    children
  )
  return title
}
export default Title
