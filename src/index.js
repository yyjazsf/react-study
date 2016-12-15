import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, Router } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components';
import HomeContainer from './containers/homeContainer';
import ResultContainer from './containers/resultContainer';
import noMatch from './containers/noMatch';
import store from './store';

injectTapEventPlugin();
const routes = {
  path: '/',
  component: App,
  indexRoute: { component: HomeContainer },
  childRoutes: [
    {
      path: 'index',
      component: HomeContainer,
    },
    {
      path: 'result',
      component: ResultContainer,
    },
    {
      path: '*',
      component: noMatch,
    },
  ],
};


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app'),
);
