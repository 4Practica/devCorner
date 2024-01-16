import { AppContainer, Navbar } from '@common/layout'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Outlet />
    </AppContainer>
  )
}

export default App
