/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import store from './modules/Store/StoreReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  store,
});
