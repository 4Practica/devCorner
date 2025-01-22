interface ArrowDownProps {
  color?: `#${string}`
  width?: number
  height?: number
  className?: string
}
const ArrowDown: React.FC<ArrowDownProps> = ({
  color = 'black',
  width = '24',
  height = '24',
  className = '',
}) => {
  return (
    <svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      width={width}
      height={height}
      fill={color}
      className={className}
    >
      <path d='M2.38 7h12l-6 7-6-7z' />
      <path d='M10.37 8.11h-4v-6h4z' />
    </svg>
  )
}

export default ArrowDown
