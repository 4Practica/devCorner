import { BG_STYLES_CLASSES, COLOR_STYLES_CLASSES } from '@common/utils/enums'
import styles from './Chip.module.css'
import React from 'react'
import { TVariants } from '@common/utils/types/global'

interface ChipsProps {
  bgColor?: BG_STYLES_CLASSES
  fontColor?: COLOR_STYLES_CLASSES
  variant?: TVariants
  children: React.ReactNode
  proportion: 'sm' | 'md' | 'lg'
  shape?: 'rounded' | 'square'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  outline?: boolean //pending to develop
  bold?: boolean
}

export const Chip: React.FC<ChipsProps> = ({
  bgColor,
  fontColor,
  variant = 'primary',
  proportion = 'sm',
  shape = 'rounded',
  icon,
  iconPosition = 'left',
  outline = false,
  bold = false,
  children,
}) => {
  const chipClasses = [
    styles.chip,
    styles[shape],
    bold ? styles.bold : '',
    styles[proportion],
    outline ? styles.outline : '',
    bgColor,
    fontColor,
    styles[variant],
  ]
  return (
    <div className={chipClasses.join(' ')}>
      {icon && iconPosition === 'left' ? icon : ''}
      {children}
      {icon && iconPosition === 'right' ? icon : ''}
    </div>
  )
}

