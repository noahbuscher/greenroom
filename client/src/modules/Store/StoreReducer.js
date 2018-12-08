import { ADD_STORES } from './StoreActions';

const initialState = {
  locations: [],
};

export default function StoreReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STORES:
      return Object.assign({}, state, { locations: action.stores });

    default:
      return state;
  }
}
