import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import Router from 'router/Router'
import CategoryDrawer from 'components/static/header/Drawer'

const App = () => {
  return (
    <RecoilRoot>
      <div className='App'>
        <BrowserRouter>
          <CategoryDrawer />
          <main style={{ width: '100%' }}>
            <Router />
          </main>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  )
}

export default App
