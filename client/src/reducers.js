/**
 * Root reducer
 */
import { combineReducers } from 'redux';

// Import reducers
import { StoreReducer } from './modules/Store/StoreReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  StoreReducer,
});
