import { Navbar } from '@common/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  )
}

export default App
