import { call, put, takeLatest } from 'redux-saga/effects';
import { types as LoadingTypes } from "../reducers/loading";
import { types as AuthTypes } from '../reducers/auth';
import * as api from '../api';

function* asyncSignUp(action) {
    const { email, uname, pw } = action.payload.toJS();
    console.log(action.payload.toJS());
    try {
        yield put({
            type: LoadingTypes.INCR_LCOUNT
        });
        const { status } = yield call(api.Auth.signup, {
            email,
            username: uname,
            password: pw
        });
        if (status !== 200)
            throw new Error("Sign up error");
        yield put({
            type: LoadingTypes.DECR_LCOUNT
        });
        yield put({
            type: AuthTypes.SIGN_UP.SUCCESS
        });

    } catch (e) {
        console.error(e);
        yield put({
            type: LoadingTypes.DECR_LCOUNT
        });
        yield put({
            type: AuthTypes.SIGN_UP.FAILURE
        });
    }
}

function* asyncSignIn(action) {
    const { email, pw } = action.payload.toJS();

    try {
        yield put({
            type: LoadingTypes.INCR_LCOUNT
        });
        const { status, headers, data } = yield call(api.Auth.signin, {
            email,
            password: pw
        });
        yield call([localStorage, 'setItem'], 'token', headers['x-auth']);
        yield call([localStorage, 'setItem'], 'email', data.user.email);
        if (status !== 200)
            throw new Error("Sign in error");
        yield put({
            type: LoadingTypes.DECR_LCOUNT
        });
        yield put({
            type: AuthTypes.SIGN_IN.SUCCESS
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: LoadingTypes.DECR_LCOUNT
        });
        yield put({
            type: AuthTypes.SIGN_IN.FAILURE
        });
    }
}

function* asyncSignOut(action) {
    try {
        yield put({
            type: LoadingTypes.INCR_LCOUNT
        });
        const token = yield call([localStorage, 'getItem'], 'token');
        const { status, headers, data } = yield call(api.Auth.signout, { token });
        if (status !== 200)
            throw new Error("Sign out error");
        yield call([localStorage, 'removeItem'], 'token');
        yield call([localStorage, 'removeItem'], 'email');
        yield put({
            type: LoadingTypes.DECR_LCOUNT
        });
        yield put({
            type: AuthTypes.SIGN_OUT.SUCCESS
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: LoadingTypes.DECR_LCOUNT
        });
        yield put({
            type: AuthTypes.SIGN_OUT.FAILURE
        });
    }
}

export default function* rootSaga() {
    yield takeLatest(AuthTypes.SIGN_UP.REQUEST, asyncSignUp);
    yield takeLatest(AuthTypes.SIGN_IN.REQUEST, asyncSignIn);
    yield takeLatest(AuthTypes.SIGN_OUT.REQUEST, asyncSignOut);
}