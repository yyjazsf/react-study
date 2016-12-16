/**
 * Created by yyj on 16/12/2016.
 */

import { handleActions } from 'redux-actions';

import actionTypes from '../constants/actionTypes';
import CounterState from '../constants/models';

const counterReducers = handleActions({
  [actionTypes.INCREMENT_COUNT]: state => (
    state.set('count', state.get('count') + 1)
  ),
  [actionTypes.DECREMENT_COUNT]: state => (
    state.set('count', state.get('count') - 1)
  ),
}, CounterState);

export default counterReducers;
