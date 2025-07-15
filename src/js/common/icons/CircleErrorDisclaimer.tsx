interface CircleErrorDisclaimerProps {
  color?: `#${string}`
  width?: number
  height?: number
}
const CircleErrorDisclaimer: React.FC<CircleErrorDisclaimerProps> = ({
  color = '#22C55E',
  width = '24',
  height = '24',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={height}
      viewBox='0 0 32 32'
      width={width}
    >
      <g>
        <g id='Error_1_'>
          <g id='Error'>
            <circle cx='16' cy='16' id='BG' r='16' style={{ fill: color }} />
            <path
              d='M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z'
              id='Exclamatory_x5F_Sign'
              style={{ fill: '#E6E6E6' }}
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default CircleErrorDisclaimer
