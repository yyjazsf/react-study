
import { message } from 'antd'
import modelExtend from 'dva-model-extend'

import { model } from './common'
import * as authServices from '../services/auth'

export default modelExtend(model, {
  namespace: 'auth',
  state: {
    login: false,
  },
  subscriptions: {
    // if has login,check user token
    // setup({ dispatch, history }) {
    //   history.listen((location) => {
    //     if (location.pathname === '/login') {
    //       const query = queryString.parse(location.search)
    //       dispatch({ type: 'fetch', payload: query })
    //     }
    //   })
    // },
  },

  effects: {
    *login({ payload }, { call, put }) {
      const data = yield call(authServices.login, payload)
      if (payload.username === 'root' && payload.password === 'root') {
        yield put({
          type: 'updateState',
          payload: {
            login: true,
          },
        })
        yield put({
          type: 'app/updateState',
          payload: {
            user: data,
            menu: [
              {
                key: 1,
                path: '/',
                title: '主页',
              },
            ],
          },
        })
        message.success('登录成功', 1)
        // yield put(routerRedux.push('/app'))
      } else {
        message.error('账号或密码错误')
      }
    },
  },

  reducers: {
  },
})
