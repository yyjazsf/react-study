/**
 * Created by yyj on 19/12/2016.
 */
import { createAction } from 'redux-actions';
import { UI } from '../constants/actionTypes';

export const showSpinner = createAction(UI.SHOW_SPINNER);
export const hideSpinner = createAction(UI.HIDE_SPINNER);
export const setUi = createAction(UI.SET_UI);
