/**
 * Created by yyj on 16/12/2016.
 */
import { combineReducers } from 'redux-immutable';
import counterReducers from './counterReducers';

const rootReducer = combineReducers({
  counterReducers,
});

export default rootReducer;
