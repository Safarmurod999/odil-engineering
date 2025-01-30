import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/app.scss'
import { BrowserRouter } from 'react-router'
import RouterApp from './router/routes.jsx'
import i18n from './utils/i18n.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  </StrictMode>,
)
