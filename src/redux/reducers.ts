import { combineReducers } from 'redux';
import Login from '../containers/Login/redux';
import List from '../containers/List/redux';

export default combineReducers({
  Login,
  List,
});
