import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Router from '@/router/Router'
import logo from './assets/images/logo.svg'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
