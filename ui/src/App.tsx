import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Router from 'router/Router'
import Header from 'components/static/header/Header'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <main style={{ marginTop: '50px', width: '100%' }}>
          <Router />
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
