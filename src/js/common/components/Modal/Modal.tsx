import { useEffect } from 'react'
import styles from './Modal.module.css'
import { Button } from '../Button'

interface Props {
  open: boolean
  cancelFn?: () => void
  primaryFn?: () => void
  secondaryFn?: () => void
  content?: string
  icon?: React.ReactNode
  className?: string
}

export const Modal: React.FC<Props> = (props) => {
  const { open, cancelFn, primaryFn, secondaryFn, icon, content } = props

  // simple useEffect to capture ESC key to close the modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        if (cancelFn) {
          cancelFn()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, cancelFn])

  if (!open) {
    return null
  }

  return (
    <div className={`${styles['modalBackground']}`}>
      <div className={`${styles['modalContainer']}`}>
        {icon && <div className={`${styles['icon']}`}>{icon}</div>}

        <div className={`${styles['body']}`}>
          {content?.split('\n').map((text) => <p key={text}>{text}</p>)}
        </div>

        <div className={`${styles['footer']}`}>
          {primaryFn && (
            <Button
              type='button'
              onClick={primaryFn}
              proportion='md'
              variant='transparent'
            >
              Cancel
            </Button>
          )}
          {secondaryFn && (
            <Button
              onClick={secondaryFn}
              type='button'
              proportion='md'
              variant='primary'
            >
              Go to blogs
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
