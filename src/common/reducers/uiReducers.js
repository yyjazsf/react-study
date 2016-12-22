/**
 * Created by yyj on 20/12/2016.
 */
import { handleActions } from 'redux-actions';

import {
  UI,
} from '../constants/actionTypes';
import { UiState } from '../constants/models';

const UiReducers = handleActions({
  [UI.SHOW_SPINNER]: state => (
    state.set('spinnerVisible', true)
  ),
  [UI.HIDE_SPINNER]: state => (
    state.set('spinnerVisible', false)
  ),
  SET_UI: (state, { payload }) => (
    state.set(payload.key, payload.value)
  ),
}, UiState);

export default UiReducers;

