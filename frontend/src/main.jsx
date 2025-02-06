import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LanguageProvider from './context/LanguageContext.jsx'
import UserProvider from './context/UserContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <UserProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>,
      </UserProvider>
    </AuthProvider>
  </>
)
