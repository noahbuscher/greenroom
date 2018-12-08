/**
 * Main store function
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export function configureStore(initialState = {}) {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
