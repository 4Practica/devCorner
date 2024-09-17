import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {
  return (
    <React.Fragment>
      <RouterProvider
        router={router}
        fallbackElement={
          <h1>
            Loadinggggggg. Remember to make the global {'<LoadingView />'}
          </h1>
        }
      />
    </React.Fragment>
  )
}

export default App
