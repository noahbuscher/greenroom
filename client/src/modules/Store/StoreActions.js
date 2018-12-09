import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_STORE = 'ADD_STORE';
export const ADD_STORES = 'ADD_STORES';
export const UPDATE_STORE = 'UPDATE_STORE';

// Export Actions
export function addStore(store) {
  return {
    type: ADD_STORE,
    store,
  };
}

export function addStoreRequest(store) {
  return (dispatch) => {
    return callApi('stores', 'POST', { store }).then((res) => {
      dispatch(addStore(res.json.store));
    });
  };
}

export function updateStore(store) {
  return {
    type: UPDATE_STORE,
    store,
  };
}

export function requestUpdateStore(store) {
  return (dispatch) => {
    return callApi(`stores/${store.slug}`, 'PUT', { store }).then(res => dispatch(updateStore(res.json.store)));
  };
}

export function addStores(stores) {
  return {
    type: ADD_STORES,
    stores,
  };
}

export function fetchStores() {
  return (dispatch) => {
    return callApi('stores').then((res) => {
      dispatch(addStores(res.json.stores));
    });
  };
}

export function fetchStore(slug) {
  return (dispatch) => {
    return callApi(`stores/${slug}`).then(res => dispatch(addStore(res.json.store)));
  };
}
