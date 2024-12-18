import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './home.scss';/* Pour importer les fichiers Sass!! */
import './about.scss';
import './projects.scss';
import './Programminglanguages.scss';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

