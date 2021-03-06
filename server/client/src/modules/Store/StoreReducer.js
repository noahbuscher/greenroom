import { ADD_STORE, ADD_STORES, UPDATE_STORE } from './StoreActions';

// Default state
const initialState = {
  locations: [],
  fields: {
    state: [],
    city: [],
    status: [],
  },
};

export default function StoreReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STORE:
      return state;
    case ADD_STORE:
      return state;
    case ADD_STORES:
      return Object.assign({}, state, { locations: action.stores, fields: action.fields });

    default:
      return state;
  }
}
