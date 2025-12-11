import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './nav.jsx'
import "./fonts.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
  </StrictMode>,
)
