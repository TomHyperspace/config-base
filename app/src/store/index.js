/*
 * Package Import
 */
import { applyMiddleware, compose, createStore } from 'redux';

/*
 * Local Import
 */
import reducer from './reducer';
import datas from './middlewares';

/*
 * Redux DevTools Extension
 */
let devTools = [];

if (process.env.NODE_ENV !== 'production') {
  if (window.devToolsExtension) {
    devTools = [window.devToolsExtension()];
  }
}

/*
 * Middlewares
 */
const allMiddlewares = applyMiddleware(datas);

const allMiddlewaresCompose = compose(
  allMiddlewares,
  ...devTools,
);

// Store
const store = createStore(reducer, allMiddlewaresCompose);

/*
 * Export
 */
export default store;
