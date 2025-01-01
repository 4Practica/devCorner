import React from 'react'
import ReactDOM from 'react-dom/client'
import '@styles/fonts.css'
import '@styles/variables.css'
import '@styles/responsive.css'
import '@styles/global.css'
import '@styles/spacing.css'
import './index.css'
import App from './App.tsx'

// Vercel stuff
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Analytics />
    <SpeedInsights />
    <App />
  </React.StrictMode>
)
