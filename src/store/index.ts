import 'regenerator-runtime/runtime';

import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory, History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import * as sagas from '../sagas';
import reducers from './rootReducer';

export const history = createBrowserHistory({ basename: '/' });
const appRouterMiddleware = routerMiddleware(history);
// @ts-ignore
const sagaMiddleware = createSagaMiddleware(sagas);

const initialState = {};

const middleware = [sagaMiddleware, appRouterMiddleware];

export const makeStore = (history: History, state = initialState) =>
  createStore(
    reducers(history),
    state,
    compose(applyMiddleware(...middleware)),
  );

const store = makeStore(history);

export const { dispatch } = store;

for (let saga in sagas) {
  // @ts-ignore
  sagaMiddleware.run(sagas[saga]);
}
export default store;
