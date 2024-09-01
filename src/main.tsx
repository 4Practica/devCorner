import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@styles/fonts.css'
import '@styles/variables.css'
import '@styles/responsive.css'
import '@styles/global.css'
import './index.css'
import App from './App.tsx'
import { BlogLandingView, ErrorPageView, HomeView } from '@views/index.ts'
import { Navbar } from '@common/layout/index.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <React.Fragment>
        <Navbar />
        <ErrorPageView />
      </React.Fragment>
    ),
    children: [
      {
        path: '',
        element: <HomeView />,
      },
      {
        path: 'blog',
        element: <BlogLandingView />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
