import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MultipleChoice from 'views/MultipleChoice'
import Settings from 'views/Settings'

const Router = () => {
  return (
    <Switch>
      <Route path='/multiple-choice' component={MultipleChoice} />
      <Route path='/settings' component={Settings} />
      <Route path='/' component={MultipleChoice} />
    </Switch>
  )
}

export default Router
