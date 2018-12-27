import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import './styles/main.scss'

import App from './App.jsx'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
)

// hot.module.accept()
