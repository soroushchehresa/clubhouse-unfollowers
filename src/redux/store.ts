import { createStore, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [
  sagaMiddleware,
  thunk,
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger({ level: 'info', collapsed: true }));
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware),
);

sagaMiddleware.run(sagas);

export default store;
