/* eslint no-underscore-dangle: 0 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import createLogger from './logger/logger';
import rootReducer from '../reducers';
import { loadState, saveState } from '../tools/localStorage';

const middleware = [thunk];
let enhancer;
/**
 * Loads state from local storage.
 */
const persistedState = loadState();

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());

  enhancer = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
} else {
  enhancer = applyMiddleware(...middleware);
}

const store = createStore(rootReducer, persistedState, enhancer);

/**
 * Listens to changes to store and
 * saves to local storage.
 */
store.subscribe(throttle(() => {
  saveState({
    catalog: store.getState().catalog,
    authorization: store.getState().authorization,
  });
}), 1000);

export default store;
