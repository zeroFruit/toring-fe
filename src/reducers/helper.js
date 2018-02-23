export const createReducer = (is, handlers) =>
  (state = is, action) => {
    return handlers.hasOwnProperty(action.type) ?
      handlers[action.type](state, action) :
      state;
};

export const createRequestTypes = (_base) => {
  const base = joinBaseName(_base);
  const res = {};

  ['REQUEST', 'SUCCESS', 'FAILURE']
    .forEach(type => res[type] = `${base}_${type}`);
  return res;
}

export const createType = (_base) => {
  return joinBaseName(_base);
};

export const patch = (type, _payload = {}, mergeKeys) => {
  const rt = { type, payload: _payload };
  if (mergeKeys) {
    rt.mergeKeys = Array.isArray(mergeKeys) ? mergeKeys : [mergeKeys];
  }
  return rt;
};

export const action = (type, payload = {}) =>
  ({ type, payload });

const joinBaseName = (_base) => {
  let base = _base;
  if (Array.isArray(base)) {
    base = base.join('/');
  }
  return base;
};
