import { BG_STYLES_CLASSES, COLOR_STYLES_CLASSES } from '@common/utils/enums'
import styles from './Button.module.css'
import { TVariants } from '@common/utils/types/global'

type ButtonTypes = 'submit' | 'reset' | 'button'
type ButtonsProportion = 'lg' | 'md' | 'sm'

interface ButtonProps {
  type: ButtonTypes
  bgColor?: BG_STYLES_CLASSES
  fontColor?: COLOR_STYLES_CLASSES
  variant?: TVariants
  proportion: ButtonsProportion
  customClasses?: string
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  bgColor,
  fontColor,
  proportion = 'md',
  customClasses = '',
  variant = 'primary',
  children,
  onClick,
}) => {
  const buttonClasses = [
    styles.button,
    styles[proportion],
    bgColor,
    fontColor,
    customClasses,
    styles[variant],
  ]
  return (
    <button type={type} className={buttonClasses.join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}

