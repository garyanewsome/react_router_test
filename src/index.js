import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, Switch } from 'react-router-dom'
import history from './history.js'

import App from './app.js'
import PageToo from './components/pageToo.js'
import PageAlso from './components/pageAlso.js'

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route  exact path='/' component={App}/>
      <Route  path='/page_too' component={PageToo}/>
      <Route  path='/page_also' component={PageAlso}/>
    </Switch>
  </Router>,
  document.getElementById('root')
)
