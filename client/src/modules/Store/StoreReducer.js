import { ADD_STORES } from './StoreActions';

const initialState = {
  stores: []
};

export function StoreReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STORES:
      return Object.assign({}, state, { stores: action.stores });

    default:
      return state;
  }
}
