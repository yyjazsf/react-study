/**
 * Created by yyj on 14/12/2016.
 */

import { combineReducers } from 'redux-immutable';
import ui from './uiReducers';
import github from './githubReducers';

const rootReducers = combineReducers({
  ui,
  github,
});

export default rootReducers;
