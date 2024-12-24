import { Navbar } from '@common/layout'
import Footer from '@common/layout/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}
