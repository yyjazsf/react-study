import React from 'react'
import { Switch, Route, routerRedux } from 'dva/router'
import PropTypes from 'prop-types'
import dynamic from 'dva/dynamic'

import App from './routes/app'
import ManinLayout from './components/layout'

const { ConnectedRouter } = routerRedux

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

function RouterConfig({ history, app }) {
  registerModel(app, require('./models/auth'))

  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })

  const Login = dynamic({
    app,
    component: () => import('./routes/login'),
  })

  const routes = [
    {
      path: '/index',
      models: () => [
        import('./models/home'),
      ],
      component: () => import('./routes/home'),
    }, {
      path: '/user',
      models: () => [
        import('./models/user'),
      ],
      component: () => import('./routes/user'),
    }, {
      path: '/user/:username',
      models: () => [
        import('./models/user'),
      ],
      component: () => import('./routes/user'),
    },
  ]

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Login} />
          <ManinLayout>
            {
              routes.map(({ path, ...dynamics }, key) => (
                <Route
                  key={key}
                  exact
                  path={path}
                  component={dynamic({
                    app,
                    ...dynamics, // (models and) component
                  })}
                />
              ))
            }
          </ManinLayout>
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
