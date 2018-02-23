import io from 'socket.io-client';
import { take, call, put } from 'redux-saga/effects';
import { types } from '../reducers/ws';
import { watchMessages } from '../socket/listeners';

export default function* webSocketSagas() {
    while (true) {
        yield take(types.START_WS);
        // const sk = io('http://localhost:8080/');
        // yield call(watchMessages, sk);
        // console.log('start websocket');
    }
}

