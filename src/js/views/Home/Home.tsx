import { AppContainer } from '@common/layout'
import { Hero } from './Components'
import { BG_STYLES_CLASSES } from '@common/utils/enums'
//import styles from './Home.module.css'

export const Home = () => {
  return (
    <AppContainer bgColor={BG_STYLES_CLASSES.DARK}>
      <Hero />
    </AppContainer>
  )
}

export default Home
