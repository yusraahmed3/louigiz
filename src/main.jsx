import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { initGA } from './analytics';

initGA()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
