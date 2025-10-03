import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'
import { Toaster } from 'sonner@2.0.3'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster position="top-center" richColors />
  </React.StrictMode>,
)