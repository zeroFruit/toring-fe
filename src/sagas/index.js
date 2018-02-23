import { fork, all, call } from 'redux-saga/effects';
import quote from './quote';
import ws from './ws';
import auth from './auth';
import work from './work';

export default function* rootSaga() {
    yield all([
        fork(quote),
        fork(auth),
        fork(work),
        call(ws)
    ]);
}
