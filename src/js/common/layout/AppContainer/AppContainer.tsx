import React, { createElement } from 'react'
import styles from './AppContainer.module.css'
import { BG_STYLES_CLASSES } from '@common/utils/enums'

type PropsType = {
  bgColor?: BG_STYLES_CLASSES
  className?: string
  children: React.ReactNode | React.ReactNode[]
  elementType?: string
}

const AppContainer = ({
  bgColor = BG_STYLES_CLASSES.LIGHT,
  elementType = 'main',
  className = '',
  children,
}: PropsType) => {
  const element = createElement(
    elementType,
    {
      className: `${className} ${styles.app_container}`,
    },
    children
  )
  return <div className={`${styles.app_main_box} ${bgColor}`}>{element}</div>
}

export default AppContainer
