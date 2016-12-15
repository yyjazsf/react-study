/**
 * Created by yyj on 14/12/2016.
 */

import 'whatwg-fetch';
import constants from '../constants';

import {
  showSpinner,
  hideSpinner,
} from './uiActions';

export const getGithub = (userId = 'yyjazsf') => ((dispatch) => {
  dispatch({
    type: constants.GET_GITHUB_INITIATE,
  });
  dispatch(showSpinner());
  fetch(`https://api.github.com/users/${userId}`)
    .then(res => (res.json()))
    .then((json) => {
      dispatch({
        type: constants.GET_GITHUB_SUCCESS,
        payload: {
          data: json,
        },
      });
      dispatch(hideSpinner());
    })
    .catch((err) => {
      console.log(err);

      dispatch({
        type: constants.GET_GITHUB_FAIL,
        error: true,
        payload: { data: err.toString() },
      });
    });
});

export const changeUserId = text => (
  {
    type: constants.CHAGE_USER_ID,
    payload: {
      userId: text,
    },
  }
);
