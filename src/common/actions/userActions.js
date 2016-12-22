/**
 * Created by yyj on 19/12/2016.
 */
import { createAction } from 'redux-actions';
import { AUTH } from '../constants/actionTypes';
import WebAPI from '../utils/WebAPI';

export const authStart = createAction(AUTH.START, WebAPI.signin);
export const authComplete = createAction(AUTH.COMPLETE);
export const authError = createAction(AUTH.ERROR);
export const startLogout = createAction(AUTH.LOGOUT, WebAPI.logout);
export const checkAuth = createAction(AUTH.CHECK_AUTH);
export const setUser = createAction(AUTH.SET_USER);
