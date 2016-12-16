/**
 * Created by yyj on 16/12/2016.
 */

import { createAction } from 'redux-actions';

import actionTypes from '../constants/actionTypes';

export const incrementCount = createAction(actionTypes.INCREMENT_COUNT);
export const decrementCount = createAction(actionTypes.DECREMENT_COUNT);
