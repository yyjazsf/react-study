/**
 * express
 */

import Express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import qs from 'qs';
import mongoose from 'mongoose';

// Client Packages
import React from 'react';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import Immutable from 'immutable';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';

// Common Packages
import routes from '../common/routes';
import config from './config';
import User from './models/user';
import Recipe from './models/recipe';
import configureStore from '../common/store';
import fetchComponentData from '../common/utils/fetchComponentData';
import apiRoutes from './controllers/api';

// config
const app = new Express();
const port = process.env.PORT || '3000';

// db
mongoose.connect(config.database);
app.set('env', 'dev');

app.use('/static', Express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// HTML Markup，同时也把 preloadedState 转成字串（stringify）传到 client-side，又称为 dehydration（脱水）
const renderFullPage = (html, preloadedState) => (`<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redux Universal Example</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="format-detection" content="telephone=no">
  <link href="//cdn.bootcss.com/material-design-lite/1.2.1/material.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
<body>
  <div id="app">${html}</div>
  <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
  </script>
  <script src="/static/app.js"></script>
  <script src="//cdn.bootcss.com/material-design-lite/1.2.1/material.min.js"></script>
</body>
</html>
`);

function handleRender(req, res) {
  // Query our mock API asynchronously
  match({
    routes,
    location: req.url,
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      res
        .status(500)
        .end(error.message);
    } else if (redirectLocation) {
      console.error(redirectLocation);

      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps == null) {
      res
        .status(404)
        .end('Not Found');
    }
    // get data
    fetchComponentData(req.cookies.token)
      .then((response) => {
        let isAuth = false;
        console.log(response[0].data);

        if (response[1].data.success === true) {
          isAuth = true;
        } else {
          isAuth = false;
        }
        const initialState = Immutable.fromJS({
          recipe: {
            recipes: response[0].data,
            recipe: {
              id: '',
              name: '',
              description: '',
              imagePath: '',
            },
          },
          user: {
            isAuth,
            isEdit: false,
          },
        });
        // server side 渲染页面
        // Create a new Redux store instance
        const store = configureStore(initialState);
        const initView = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>,
        );
        const state = store.getState();
        const page = renderFullPage(initView, state);
        return res.status(200).send(page);
      })
      .catch((err) => {
        res.end(err.message);
      });
  });
}

// 使用 middleware 与 webpack 去进行 hot module reloading
const compiler = webpack(webpackConfig);// client.js

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.use('/api', apiRoutes);
app.use(handleRender);

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==>Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
