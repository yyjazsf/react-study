/**
 * Created by yyj on 14/12/2016.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
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
  applyMiddleware(reduxThunk),
  // other store enhancers if any
);

export default createStore(
  rootReducer,
  initialState,
  // applyMiddleware(reduxThunk),
  enhancer,
);
