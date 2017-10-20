import modelExtend from 'dva-model-extend'
import { pageModel } from './common'

export default modelExtend(pageModel, {

  namespace: 'user',

  subscriptions: {
    // setup({ dispatch, history }) {
    //   history.listen((location) => {
    //     console.log(1, location)
    //   })
    // },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' })
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    },
  },

})
