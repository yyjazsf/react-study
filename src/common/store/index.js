/**
 * Created by yyj on 15/12/2016.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import rootReducer from '../reducers';

const initialState = Immutable.Map();

function configStore(preloadedState = initialState) {
  const composeEnhancers =
          process.env.NODE_ENV !== 'production' &&
          typeof window === 'object' &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify here name, actionsBlacklist, actionsCreators and other options
            }) : compose;

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );

  return store;
}

export default configStore;
