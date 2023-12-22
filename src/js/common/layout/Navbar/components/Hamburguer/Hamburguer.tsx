import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './Hamburguer.module.css'

interface HamburguerProps {
  isOpen: boolean
  handleOpen: Dispatch<SetStateAction<boolean>>
}

const Hamburguer: React.FC<HamburguerProps> = ({ isOpen, handleOpen }) => {
  const [alreadyOpened, setAlreadyOpend] = useState(false)
  useEffect(() => {
    if (isOpen) {
      setAlreadyOpend(true)
    }
  }, [isOpen])
  return (
    <div
      className={`${styles.hamburguer} ${isOpen ? styles.open : ''} ${
        !isOpen && alreadyOpened ? styles.close : ''
      } ${alreadyOpened ? '' : styles.stop}`}
      onClick={() => {
        handleOpen((prev) => {
          return !prev
        })
      }}
    >
      <div className={styles.hamburguer__item} />
    </div>
  )
}

export default Hamburguer
