import { BG_STYLES_CLASSES, COLOR_STYLES_CLASSES } from '@common/utils/enums'
import styles from './Button.module.css'

type ButtonTypes = 'submit' | 'reset' | 'button'
type ButtonsProportion = 'lg' | 'md' | 'sm'

interface ButtonProps {
  type: ButtonTypes
  bgColor: BG_STYLES_CLASSES
  fontColor: COLOR_STYLES_CLASSES
  proportion: ButtonsProportion
  customClasses?: string
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  bgColor = BG_STYLES_CLASSES.PRIMARY,
  fontColor = COLOR_STYLES_CLASSES.DARK,
  proportion = 'md',
  customClasses = '',
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[proportion]} ${bgColor} ${fontColor} ${customClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
