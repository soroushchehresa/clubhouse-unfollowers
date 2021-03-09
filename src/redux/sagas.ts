import { all } from 'redux-saga/effects';
import Login from '../containers/Login/saga';
import List from '../containers/List/saga';

export default function* sagas() {
  yield all([
    Login(),
    List(),
  ]);
}
