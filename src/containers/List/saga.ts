import {
  fork,
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import _ from 'lodash';
import {
  GET_FOLLOWING_LIST,
  GET_FOLLOWING_LIST_SUCCESS,
  GET_FOLLOWING_LIST_FAIL,

  GET_FOLLOWERS_LIST,
  GET_FOLLOWERS_LIST_SUCCESS,
  GET_FOLLOWERS_LIST_FAIL,

  UNFOLLOW_USER,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAIL,
} from './redux';
import API from '../../utils/API';

function* getFollowingList() {
  yield takeLatest(GET_FOLLOWING_LIST, function* cb() {
    let request: object | null = null;
    try {
      let uid: string | null = localStorage.getItem('CH-uid');
      request = yield (API as any).get(`get_following?page_size=100000&page=1&user_id=${uid}`);
    } catch (e) {
      request = null;
    }
    if (_.get(request, ['data', 'success'])) {
      yield put({ type: GET_FOLLOWING_LIST_SUCCESS, data: _.get(request, ['data', 'users']) });
    } else {
      yield put({ type: GET_FOLLOWING_LIST_FAIL, data: _.get(request, 'data') });
    }
  });
}

function* getFollowersList() {
  yield takeLatest(GET_FOLLOWERS_LIST, function* cb() {
    let request: object | null = null;
    try {
      let uid: string | null = localStorage.getItem('CH-uid');
      request = yield (API as any).get(`get_followers?page_size=100000&page=1&user_id=${uid}`);
    } catch (e) {
      request = null;
    }
    if (_.get(request, ['data', 'success'])) {
      yield put({ type: GET_FOLLOWERS_LIST_SUCCESS, data: _.get(request, ['data', 'users']) });
    } else {
      yield put({ type: GET_FOLLOWERS_LIST_FAIL, data: _.get(request, 'data') });
    }
  });
}

function* unfollowUser() {
  yield takeLatest(UNFOLLOW_USER, function* cb(action) {
    let request: object | null = null;
    try {
      request = yield (API as any).post('unfollow', { user_id: _.get(action, 'data') });
    } catch (e) {
      request = null;
    }
    if (_.get(request, ['data', 'success'])) {
      yield put({ type: UNFOLLOW_USER_SUCCESS, data: _.get(action, 'data') });
    } else {
      yield put({ type: UNFOLLOW_USER_FAIL, data: _.get(request, 'data') });
    }
  });
}

export default function* saga() {
  yield all([
    fork(getFollowingList),
    fork(getFollowersList),
    fork(unfollowUser),
  ]);
}
