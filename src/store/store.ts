/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import rootReducer from './rootReducer';
import rootSaga from './rootSagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
const composeEnhancers = process.env.NODE_ENV !== 'production'
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose : compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);
