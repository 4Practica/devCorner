import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeView } from '@views'
import ErrorPage from './error-page.tsx'
import '@styles/fonts.css'
import '@styles/variables.css'
import '@styles/responsive.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
