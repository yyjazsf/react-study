import React from 'react'
import { Switch, Route, routerRedux } from 'dva/router'
import PropTypes from 'prop-types'
import dynamic from 'dva/dynamic'

import App from './routes/app'
import AuthorizedRoute from './components/authorizedRoute'

const { ConnectedRouter } = routerRedux

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

function RouterConfig({ history, app }) {
  registerModel(app, require('./models/auth'))

  const Home = dynamic({
    app,
    models: () => [
      import('./models/home'),
    ],
    component: () => import('./routes/home'),
  })

  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })

  const Login = dynamic({
    app,
    component: () => import('./routes/login'),
  })

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/app" component={Home} />
          <Route component={error} />
        </Switch>
      </App>
    </ConnectedRouter>
  )
}
RouterConfig.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}
export default RouterConfig
