import { BG_STYLES_CLASSES, COLOR_STYLES_CLASSES } from '@common/utils/enums'
import styles from './Button.module.css'

type ButtonTypes = 'submit' | 'reset' | 'button'
type ButtonsProportion = 'lg' | 'md' | 'sm'
type ButtonStyle = 'primary' | 'secondary'

interface ButtonProps {
  type: ButtonTypes
  bgColor?: BG_STYLES_CLASSES
  fontColor?: COLOR_STYLES_CLASSES
  buttonStyle?: ButtonStyle
  proportion: ButtonsProportion
  customClasses?: string
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  bgColor,
  fontColor,
  proportion = 'md',
  customClasses = '',
  buttonStyle = 'primary',
  children,
  onClick,
}) => {
  const buttonClasses = [styles.button, styles[proportion], bgColor, fontColor, customClasses, styles[buttonStyle]]
  return (
    <button
      type={type}
      className={buttonClasses.join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
