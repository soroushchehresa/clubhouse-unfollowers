import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import List from './containers/List';
import GlobalStyles from './globalStyles';
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <i>Speaker</i>
    <b>Camera</b>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root')
);
