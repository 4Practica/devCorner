import { AppContainer, Navbar } from '@common/layout'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div style={{ minHeight: '500vh' }}>
      <AppContainer>
        <Navbar />
        <Outlet />
      </AppContainer>
  </div>)
}

export default App
