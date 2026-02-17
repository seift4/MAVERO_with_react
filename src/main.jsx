import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css' // ملف الـ CSS اللي سميته global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)