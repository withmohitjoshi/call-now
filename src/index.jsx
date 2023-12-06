import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import SocketWrapper from './hooks/useSocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketWrapper>
      <App />
    </SocketWrapper>
  </React.StrictMode>
)
