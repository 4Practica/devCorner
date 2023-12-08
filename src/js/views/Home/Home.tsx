import React from 'react'
import { AppContainer, Navbar } from '../../common/layout'
import { Hero } from './Components'
//import styles from './Home.module.css'

export const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <AppContainer>
        <Hero />
      </AppContainer>
    </React.Fragment>
  )
}

export default Home
