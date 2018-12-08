import { ADD_STORE, ADD_STORES } from './StoreActions';

// Initial State
const initialState = { data: [] };

const StoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STORE:
      return {
        data: [action.stores, ...state.data],
      };

    case ADD_STORES:
      return {
        data: action.stores,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all Trails
export const getStores = state => state.stores;

// Get Trail by slug
export const getStore = (state, slug) => state.stores.filter(store => store.slug === slug)[0];

// Export Reducer
export default StoreReducer;
