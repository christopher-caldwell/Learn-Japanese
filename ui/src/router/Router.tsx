import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MultipleChoice from 'views/MultipleChoice'

const Router = () => {
  return (
    <Switch>
      <Route path='/multiple-choice' component={MultipleChoice} />
      <Route path='/' component={MultipleChoice} />
    </Switch>
  )
}

export default Router
