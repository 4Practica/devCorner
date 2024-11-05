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

      <AppContainer elementType='section' bgColor={BG_STYLES_CLASSES.LIGHT}>
        <Categories />
      </AppContainer>

      <AppContainer elementType='section' bgColor={BG_STYLES_CLASSES.LIGHT}>
        <Team />
      </AppContainer>
    </React.Fragment>
  )
}

export default Home
