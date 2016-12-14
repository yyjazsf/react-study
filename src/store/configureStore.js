/**
 *
 */
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import Immutable from 'immutable';
import rootReducer from '../reducers';

const initialState = Immutable.Map();

const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify here name, actionsBlacklist, actionsCreators and other options
          }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(createLogger({ stateTransformer: state => state.toJS() })),
  // other store enhancers if any
);

export default createStore(
  rootReducer,
  initialState,
  enhancer,
);
