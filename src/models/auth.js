
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
    // setup({ dispatch, history }) {
    //   history.listen((location) => {
    //     if (location.pathname === '/') {
    //       // do something
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
        window.localStorage.setItem('user', JSON.stringify(data))
        yield put({
          type: 'app/updateState',
          payload: {
            user: data,
            menu: [
              {
                key: 1, // id
                path: '/index',
                title: '主页',
              },
              {
                key: 2,
                path: '/user',
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

    *register({ payload }, { call, put }) {
      const data = yield call(authServices.login, payload)
      if (payload.username === 'root' && payload.password === 'root') {
        yield put({
          type: 'updateState',
          payload: {
            login: true,
          },
        })
        window.localStorage.setItem('user', JSON.stringify(data))
        yield put({
          type: 'app/updateState',
          payload: {
            user: data,
            menu: [
              {
                key: 1, // id
                path: '/index',
                title: '主页',
              },
              {
                key: 2,
                path: '/user',
                title: '主页',
              },
            ],
          },
        })
        message.success('注册成功', 1)
        // yield put(routerRedux.push('/app'))
      }
    },
  },

  reducers: {
  },
})
