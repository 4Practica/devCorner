import styles from './Button.module.css'

type ButtonTypes = 'submit' | 'reset' | 'button'
type BgColors = 'bg-primary' | 'bg-secondary' | 'bg-dark' | 'bg-light'
type FontColors =
  | 'color-primary'
  | 'color-secondary'
  | 'color-dark'
  | 'color-light'
type ButtonsProportion = 'button_big' | 'button_regular' | 'button_small'
type ButtonProps = {
  type: ButtonTypes
  bgColor: BgColors
  fontColor: FontColors
  text: string
  proportion: ButtonsProportion
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

const Button = ({
  type = 'button',
  bgColor = 'bg-primary',
  fontColor = 'color-dark',
  proportion = 'button_regular',
  text,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${bgColor} ${fontColor} ${styles[proportion]}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
