import React from 'react'
import { Router, Switch, Route } from 'dva/router'
import dynamic from 'dva/dynamic'

function RouterConfig({ history, app }) {
  const Home = dynamic({
    app,
    models: () => [
      import('./models/home'),
    ],
    component: () => import('./routes/home'),
  })

  const Login = dynamic({
    app,
    models: () => [
      import('./models/login'),
    ],
    component: () => import('./routes/login'),
  })

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
