export default {
  namespace: 'more',
  state: {},
  effects: {
    *getProductList({ payload }, { put }) {
      yield put({ type: 'getProduct', payload });
    },
  },
  reducers: {
    getProduct(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
