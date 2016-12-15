/**
 * Created by yyj on 14/12/2016.
 */

// import { createAction } from 'redux-actions';
import constants from '../constants';

export const showSpinner = () => ({ type: constants.SHOW_SPINNER });

export const hideSpinner = () => ({ type: constants.HIDE_SPINNER });
