import { call, put, takeLatest } from 'redux-saga/effects';
import { types as LoadingTypes } from "../reducers/loading";
import { types as WorkTypes } from '../reducers/work';
import * as api from '../api';

function* asyncUpload(action) {
    const { fd } = action.payload;
    try {
        yield put({
            type: LoadingTypes.INCR_LCOUNT
        });
        const token = yield call([localStorage, 'getItem'], 'token');
        if(!token)
            throw new Error('Token is null');

        const { status } = yield call(api.Work.upload, { fd, token });

        if(status !== 200)
            throw new Error('Upload error');

        yield put({
            type: LoadingTypes.DECR_LCOUNT
        });
        yield put({
            type: WorkTypes.UPLOAD_WORK.SUCCESS
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LoadingTypes.DECR_LCOUNT
        });
        yield put({
            type: WorkTypes.UPLOAD_WORK.FAILURE
        })
    }
}

export default function* rootSaga() {
    yield takeLatest(WorkTypes.UPLOAD_WORK.REQUEST, asyncUpload);
}