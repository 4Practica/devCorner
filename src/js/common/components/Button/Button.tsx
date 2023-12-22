import { BG_STYLES_CLASSES, COLOR_STYLES_CLASSES } from '@common/utils/enums'
import styles from './Button.module.css'

type ButtonTypes = 'submit' | 'reset' | 'button'
type ButtonsProportion = 'button_big' | 'button_regular' | 'button_small'

interface ButtonProps {
  type: ButtonTypes
  bgColor: BG_STYLES_CLASSES
  fontColor: COLOR_STYLES_CLASSES
  proportion: ButtonsProportion
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  bgColor = BG_STYLES_CLASSES.PRIMARY,
  fontColor = COLOR_STYLES_CLASSES.DARK,
  proportion = 'button_regular',
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${bgColor} ${fontColor} ${styles[proportion]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
