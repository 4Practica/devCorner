import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Loading } from '@views/Loading/Loading.tsx'

function App() {
  return (
    <React.Fragment>
      <RouterProvider
        router={router}
        fallbackElement={<Loading />}
      />
    </React.Fragment>
  )
}

export default App
