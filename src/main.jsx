import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'


// document.title = import.meta.env.VITE_PUBLIC_NAME.charAt(0).toUpperCase() + import.meta.env.VITE_PUBLIC_NAME.slice(1);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
