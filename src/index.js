/**
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Repos from './Repos';
import About from './About';
import User from './User';
import Contacts from './Contacts';
import ImmutableDemo from './Immutable';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/repos/:name" component={Repos} />
      <Route path="/about" component={About} />
      <Route path="/user" component={User} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/immutable" component={ImmutableDemo} />
    </Route>
  </Router>,
  document.querySelector('#main'));
