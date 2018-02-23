import { Map } from 'immutable';
import {
  createRequestTypes,
  createReducer,
  action
} from '../helper';

export const types = {
  FETCH_QUOTES: createRequestTypes(['fetch', 'quote']),
  FETCH_QUOTES2: createRequestTypes(['fetch', 'quote2'])
};

export const is = {
  quote: Map(),
  quote2: Map()
};

const fetchQuotes = {
  [types.FETCH_QUOTES.REQUEST]: (state, action) => ({
    ...state
  }),
  [types.FETCH_QUOTES.SUCCESS]: (state, action) => ({
    ...state,
    quote: Map(action.payload)
  }),
  [types.FETCH_QUOTES.FAIL]: (state, action) => ({
    ...state
  }),
};

const fetchQuotes2 = {
  [types.FETCH_QUOTES2.REQUEST]: (state, action) => ({
    ...state
  }),
  [types.FETCH_QUOTES2.SUCCESS]: (state, action) => ({
    ...state,
    quote2: Map(action.payload)
  }),
  [types.FETCH_QUOTES2.FAIL]: (state, action) => ({
    ...state
  }),
};

export default createReducer(is, {
  ...fetchQuotes,
  ...fetchQuotes2
});

export const actions = {
  fetchQuotes: () => action(types.FETCH_QUOTES.REQUEST),
  fetchQuotes2: () => action(types.FETCH_QUOTES2.REQUEST)
};

export const selectors = {
  getQuote: state => state.quote.quote,
  getQuote2: state => state.quote.quote2,
};
