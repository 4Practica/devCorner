import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@styles/fonts.css'
import '@styles/variables.css'
import '@styles/responsive.css'
import '@styles/global.css'
import './index.css'
import App from './App.tsx'
import { Navbar } from '@common/layout/index.ts'

export const ErrorPageView = React.lazy(() => import('@views/ErrorPage/ErrorPage.tsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <React.Fragment>
        <Navbar />
        <Suspense fallback={<span />}>
          <ErrorPageView />
        </Suspense>
      </React.Fragment>
    ),
    children: [
      {
        path: '',
        async lazy () {
          const { HomeView } = await import('@views/Home')
          return {Component: HomeView}
        }
      },
      {
        path: 'blog',
        loader: () =>  {
          /* https://reactrouter.com/en/main/route/route#loader */
          return "blog data to be fetch for the path"
        },
        async lazy () {
          const { BlogLandingView } = await import('@views/BlogLandings')
          return {Component: BlogLandingView}
        }
      },
      {
        path: 'blog/:postPath',
        loader: ({ params }) =>  {
          /* https://reactrouter.com/en/main/route/route#loader */
          return "blog data to be fetch for the path: " + params.postPath
        },
        async lazy () {
          const { BlogPostView } = await import('@views/BlogPost')
          return {Component: BlogPostView}
        }
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
