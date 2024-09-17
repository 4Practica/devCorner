import { Navbar } from '@common/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  )
}
