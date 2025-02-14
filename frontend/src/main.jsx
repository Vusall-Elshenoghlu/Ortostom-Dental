import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LanguageProvider from './context/LanguageContext.jsx'
import UserProvider from './context/UserContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { Formik, FormikProvider } from 'formik'

createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <UserProvider>
        <LanguageProvider>
          <FormikProvider value={Formik}>
            <App />
          </FormikProvider>
        </LanguageProvider>,
      </UserProvider>
    </AuthProvider>
  </>
)
