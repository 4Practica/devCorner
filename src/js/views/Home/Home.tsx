import { AppContainer, Navbar } from '../../common/layout'
import { Hero } from './Components'
//import styles from './Home.module.css'

export const Home = () => {
  return (
    <div style={{ minHeight: '500vh' }}>
      <AppContainer>
        <Navbar />
        <Hero />
      </AppContainer>
    </div>
  )
}

export default Home
