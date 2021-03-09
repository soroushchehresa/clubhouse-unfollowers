import {
  fork,
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import _ from 'lodash';
import {
  GET_CONFIRMATION_CODE,
  GET_CONFIRMATION_CODE_SUCCESS,
  GET_CONFIRMATION_CODE_FAIL,

  SUBMIT_CONFIRMATION_CODE,
  SUBMIT_CONFIRMATION_CODE_SUCCESS,
  SUBMIT_CONFIRMATION_CODE_FAIL,
} from './redux';
import API from '../../utils/API';

function* getConfirmationCode() {
  yield takeLatest(GET_CONFIRMATION_CODE, function* cb(action) {
    let request: object | null = null;
    try {
      request = yield (API as any).post('start_phone_number_auth', _.get(action, 'data'));
    } catch (e) {
      request = null;
    }
    if (_.get(request, ['data', 'success'])) {
      yield put({ type: GET_CONFIRMATION_CODE_SUCCESS, data: _.get(request, 'data') });
    } else {
      yield put({ type: GET_CONFIRMATION_CODE_FAIL, data: _.get(request, 'data') });
    }
  });
}

function* submitConfirmationCode() {
  yield takeLatest(SUBMIT_CONFIRMATION_CODE, function* cb(action) {
    let request: object | null = null;
    try {
      request = yield (API as any).post('complete_phone_number_auth', _.get(action, 'data'));
    } catch (e) {
      request = null;
    }
    if (_.get(request, ['data', 'success'])) {
      yield put({ type: SUBMIT_CONFIRMATION_CODE_SUCCESS, data: _.get(request, 'data') });
    } else {
      yield put({ type: SUBMIT_CONFIRMATION_CODE_FAIL, data: _.get(request, 'data') });
    }
  });
}

export default function* saga() {
  yield all([
    fork(getConfirmationCode),
    fork(submitConfirmationCode),
  ]);
}
