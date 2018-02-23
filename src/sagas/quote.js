import { call, put, takeLatest } from 'redux-saga/effects';
import { types as QuoteTypes } from '../reducers/quote';
import { types as LoadingTypes } from '../reducers/loading';
import axios from 'axios';

function* asyncFetchQuotes(action) {
  try {
    yield put({
      type: LoadingTypes.INCR_LCOUNT
    });
    const { data } = yield call(axios.get, 'https://demo7764001.mockable.io ');
    yield put({
      type: QuoteTypes.FETCH_QUOTES.SUCCESS,
      payload: data.value
    });
  } catch (e) {
    yield put({
      type: QuoteTypes.FETCH_QUOTES.FAIL
    });
  } finally {
    yield put({
      type: LoadingTypes.DECR_LCOUNT
    });
  }
}

function* asyncFetchQuotes2(action) {
  try {
    yield put({
      type: LoadingTypes.INCR_LCOUNT
    });
    const { data } = yield call(axios.get, 'https://demo7764001.mockable.io ');
    yield put({
      type: QuoteTypes.FETCH_QUOTES2.SUCCESS,
      payload: data.value
    });
  } catch (e) {
    yield put({
      type: QuoteTypes.FETCH_QUOTES2.FAIL
    });
  } finally {
    yield put({
      type: LoadingTypes.DECR_LCOUNT
    });
  }
}

export default function* rootSaga() {
  yield takeLatest(QuoteTypes.FETCH_QUOTES.REQUEST, asyncFetchQuotes);
  yield takeLatest(QuoteTypes.FETCH_QUOTES2.REQUEST, asyncFetchQuotes2);
}
