import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserContext from './context/UserContext.jsx';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>  
    </UserContext>
  </StrictMode>,
)
