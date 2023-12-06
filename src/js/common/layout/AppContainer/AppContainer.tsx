import React, { createElement } from 'react'
import styles from './AppContainer.module.css'

type PropsType = {
  children: React.ReactNode | React.ReactNode[]
  elementType?: string
}

const AppContainer = ({ elementType = 'main', children }: PropsType) => {
  const element = createElement(
    elementType,
    {
      className: styles.app_container,
    },
    children
  )
  return element
}

export default AppContainer
