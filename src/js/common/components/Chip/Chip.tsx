import { BG_STYLES_CLASSES, COLOR_STYLES_CLASSES } from '@common/utils/enums'
import styles from './Chip.module.css'
import React from 'react'

interface ChipsProps {
  bgColor: BG_STYLES_CLASSES
  fontColor: COLOR_STYLES_CLASSES
  children: React.ReactNode
  proportion: 'sm' | 'md' | 'lg'
  shape?: 'rounded' | 'square'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  outline?: boolean //pending to develop
  bold?: boolean
}

const Chip: React.FC<ChipsProps> = ({
  bgColor,
  fontColor,
  proportion = 'sm',
  shape = 'rounded',
  icon,
  iconPosition = 'left',
  outline = false,
  bold = false,
  children,
}) => {
  return (
    <div
      className={`${styles.chip} ${styles[shape]} ${bgColor} ${fontColor} ${
        styles[proportion]
      } ${outline ? styles.outline : ''} ${bold ? styles.bold : ''}`}
    >
      {icon && iconPosition === 'left' ? icon : ''}
      {children}
      {icon && iconPosition === 'right' ? icon : ''}
    </div>
  )
}

export default Chip
