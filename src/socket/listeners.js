import { types } from "../reducers/currency";
import { store } from '../App';

export const watchMessages = (sk) => {
    // sk.on('current_ethbtc_price', ({ data }) => {
    //     store.dispatch({
    //         type: types.FETCH_PRICE,
    //         payload: data
    //     });
    // });
    //
    // sk.on('current_ethbtc_depth', ({ data }) => {
    //     store.dispatch({
    //         type: types.FETCH_BIDS,
    //         payload: data.bids
    //     });
    //     store.dispatch({
    //         type: types.FETCH_ASKS,
    //         payload: data.asks
    //     });
    // });
}