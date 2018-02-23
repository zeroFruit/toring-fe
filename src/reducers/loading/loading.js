import {
  createType,
  createReducer,
  action
} from '../helper';

export const types = {
  UPDATE_LOADING: createType(['update', 'loading']),
  UPDATE_LOADED: createType(['update', 'loaded']),
  INCR_LCOUNT: createType(['increase', 'lcount']),
  DECR_LCOUNT: createType(['decrease', 'lcount']),
};

export const is = {
  loading: false,
  loaded: true,
  lcount: 0
};

const updateLoading = {
  [types.UPDATE_LOADING]: (state, action) => ({
    ...state,
  })
};

const updateLoaded = {
  [types.UPDATE_LOADED]: (state, action) => ({
    ...state,
  })
};

const incrLcount = {
  [types.INCR_LCOUNT]: (state, action) => ({
    ...state,
    lcount: state.lcount + 1
  })
};

const decrLcount = {
  [types.DECR_LCOUNT]: (state, action) => ({
    ...state,
    lcount: state.lcount - 1
  })
};

export default createReducer(is, {
  ...updateLoading,
  ...updateLoaded,
  ...incrLcount,
  ...decrLcount
});

export const actions = {
  updateLoading: lstate => action(types.UPDATE_LOADING, lstate),
  updateLoaded: lstate => action(types.UPDATE_LOADED, lstate),
  incrLcount: () => action(types.INCR_LCOUNT),
  decrLcount: () => action(types.DECR_LCOUNT),
};

export const selectors = {
  getLoading: state => state.loading.loading,
  getLoaded: state => state.loading.loaded,
  getLcount: state => state.loading.lcount
};
