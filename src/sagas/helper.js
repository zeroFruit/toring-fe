import { call, put } from 'redux-saga/effects';
import { types as LoadingTypes } from "../reducers/loading";

export function* ApiFlowFactory(task, errHandler) {
    return function* (args) {
        try {
            yield put({
                type: LoadingTypes.INCR_LCOUNT
            });
            yield* task(args);
            yield put({
                type: LoadingTypes.DECR_LCOUNT
            });
        } catch (err) {
            console.error(err);
            yield* errHandler(err);
            yield put({
                type: LoadingTypes.DECR_LCOUNT
            });
        }
    }
}