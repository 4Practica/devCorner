import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom'
import { Layout } from './Layout'

const paths: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    /* async lazy() {       Desactivado en dev.
      const { ErrorPageView } = await import('@views/ErrorPage')
      return { errorElement: <ErrorPageView /> }
    }, */
    children: [
      {
        path: '',
        element: <Outlet />,
        children: [
          {
            index: true,
            async lazy() {
              const { HomeView } = await import('@views/Home')
              return { Component: HomeView }
            },
          },
          {
            path: 'blog',
            async lazy() {
              const { BlogLandingView } = await import('@views/BlogLandings')
              return { Component: BlogLandingView }
            },
          },
          {
            path: 'blog/:postSlug',
            loader: ({ params }) => {
              /* https://reactrouter.com/en/main/route/route#loader */
              return 'blog data to be fetch for the path: ' + params.postSlug
            },
            async lazy() {
              const { BlogPostView } = await import('@views/BlogPost')
              return { Component: BlogPostView }
            },
          },
          {
            path: '*',
            async lazy() {
              const { ErrorPageView } = await import('@views/ErrorPage')
              return { element: <ErrorPageView /> }
            },
          },
        ],
      },
    ],
  },
]

export const router = createBrowserRouter(paths)
