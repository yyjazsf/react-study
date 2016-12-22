/**
 * Created by yyj on 20/12/2016.
 */
import { handleActions } from 'redux-actions';

import {
  AUTH,
} from '../constants/actionTypes';
import { UserState } from '../constants/models';

const UserReducers = handleActions({
  [AUTH.START]: state => (
    state.merge({
      isAuth: false,
    })
  ),
  [AUTH.COMPLETE]: state => (
    state.merge({
      email: '602988068@qq.com',
      password: '123456.',
      isAuth: true,
    })
  ),
  [AUTH.ERROR]: state => (
    state.merge({
      username: '',
      email: '',
      password: '',
      isAuth: false,
    })
  ),
  [AUTH.LOGOUT]: state => (
    state.merge({
      isAuth: false,
    })
  ),
  [AUTH.CHECK_AUTH]: state => (
    state.set('isAuth', false)
  ),
  [AUTH.SET_USER]: (state, { payload }) => (
    state.set(payload.key, payload.value)
  ),
}, UserState);

export default UserReducers;

