import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_STORE = 'ADD_STORE';
export const ADD_STORES = 'ADD_STORES';

// Export Actions
export function addStore(store) {
  return {
    type: ADD_STORE,
    store,
  };
}

export function addStoreRequest(store) {
  return (dispatch) => {
    return callApi('stores', 'post', { store }).then(res => dispatch(addStore(res.json.store)));
  };
}

export function addStores(stores) {
  return {
    type: ADD_STORES,
    stores
  };
}

export function fetchStores() {
  return (dispatch) => {
    return callApi('stores').then(res => {
      dispatch(addStores(res.json.stores));
    });
  };
}

export function fetchStore(slug) {
  return (dispatch) => {
    return callApi(`stores/${slug}`).then(res => dispatch(addStore(res.json.store)));
  };
}
