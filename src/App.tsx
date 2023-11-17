import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'

function App() {
  const initialCounter = 0
  const [count, setCount] = useState(initialCounter)

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className={styles.logo} alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img
            src={reactLogo}
            className={`${styles.logo} ${styles.react}`}
            alt='React logo'
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button
          onClick={() => {
            return setCount((count) => {
              const sumValue = 1
              return count + sumValue
            })
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={`${styles.readTheDocs}`}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
