import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './home.scss';/* Pour importer les fichiers Sass!! */
import App from './home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
