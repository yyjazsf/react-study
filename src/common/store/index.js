/**
 * Created by yyj on 15/12/2016.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

function configStore(preloadedState) {
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

  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = rootReducer;
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
}

export default configStore;
