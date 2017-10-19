export default {

  namespace: 'home',

  state: {},

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

}
