import { AppContainer } from '@common/layout'
import { Hero, Categories, Team } from './Components'
import { BG_STYLES_CLASSES } from '@common/utils/enums'
import React from 'react'
//import styles from './Home.module.css'

export const Home = () => {
  return (
    <React.Fragment>
      <AppContainer elementType='section' bgColor={BG_STYLES_CLASSES.DARK}>
        <Hero />
      </AppContainer>
      <AppContainer
        padding
        elementType='section'
        bgColor={BG_STYLES_CLASSES.LIGHT}
      >
        <Categories />
      </AppContainer>

      <AppContainer
        padding
        elementType='section'
        bgColor={BG_STYLES_CLASSES.DARK}
      >
        <Team />
      </AppContainer>
    </React.Fragment>
  )
}

export default Home
