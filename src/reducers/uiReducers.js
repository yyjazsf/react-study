/**
 * Created by yyj on 14/12/2016.
 */

import { handleActions } from 'redux-actions';
import constants, { UiState } from '../constants';

const uiReducers = handleActions({
  [constants.SHOW_SPINNER]: state => (
    state.set({
      spinnerVisible: true,
    })
),
  [constants.HIDE_SPINNER]: state => (
    state.set({
      spinnerVisible: false,
    })
  ),
}, UiState);

export default uiReducers;
