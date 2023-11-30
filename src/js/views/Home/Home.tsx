import { Hero } from './Components'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <main className={`${styles.container} `}>
      <Hero />
    </main>
  )
}

export default Home
