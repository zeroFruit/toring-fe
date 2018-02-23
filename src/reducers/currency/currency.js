import { List } from 'immutable';
import {
    createType,
    action,
    createReducer
} from '../helper';

export const types = {
    FETCH_PRICE: createType(['FETCH', 'PRICE']),
    FETCH_BIDS: createType(['FETCH', 'BIDS']),
    FETCH_ASKS: createType(['FETCH', 'ASKS'])
};

export const is = {
    price: null,
    bids: List(),
    asks: List()
};

const price = {
    [types.FETCH_PRICE]: (state, action) => ({
        ...state,
        price: action.payload
    })
};

const trade = {
    [types.FETCH_BIDS]: (state, action) => ({
        ...state,
        bids: List(action.payload)
    }),
    [types.FETCH_ASKS]: (state, action) => ({
        ...state,
        asks: List(action.payload)
    })
};

export default createReducer(is, {
    ...price,
    ...trade
});

export const actions = {};

export const selectors = {
    getPrice: state => state.currency.price,
    getBids: state => state.currency.bids,
    getAsks: state => state.currency.asks
};
