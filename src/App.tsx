import { HomeView } from '@views'
import React from 'react'
import { Navbar } from './js/common/layout'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HomeView />
    </React.Fragment>
  )
}

export default App
