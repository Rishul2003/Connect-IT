import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkModeContextProvider } from './context/Darkmode.jsx'
import { AuthContextProvider } from './context/Authcontext.jsx'
import { PostContextProvider } from './context/Postcontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <PostContextProvider>
          <App />
    </PostContextProvider>
    </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
)
