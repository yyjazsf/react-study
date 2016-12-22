/**
 * Created by yyj on 16/12/2016.
 */
import { combineReducers } from 'redux-immutable';
import recipe from './recipeReducers';
import user from './userReducers';
import ui from './uiReducers';

const rootReducer = combineReducers({
  recipe,
  user,
  ui,
});

export default rootReducer;
