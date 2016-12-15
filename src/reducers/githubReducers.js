/**
 * Created by yyj on 14/12/2016.
 */

import { handleActions } from 'redux-actions';

import constants, { GithubState } from '../constants';

const githubReducers = handleActions({
  GET_GITHUB_SUCCESS: (state, { payload }) => (
    state.merge(payload)
  ),
  CHAGE_USER_ID: (state, { payload }) => (
    state.merge(payload)
  ),
}, GithubState);

export default githubReducers;
