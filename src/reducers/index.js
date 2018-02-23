import { List } from 'immutable';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect'
import { quote } from './quote';
import { loading } from './loading';
import { currency, selectors } from './currency';
import { auth } from './auth';
import { work } from './work';


export const priceSelector = createSelector(
    selectors.getPrice,
    (ethbtc) => List().push(ethbtc)
);

export default combineReducers({
    quote,
    loading,
    currency,
    auth,
    work
});
