import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Start from './App.jsx'
import Init from './Init.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Start />
  </StrictMode>
)
