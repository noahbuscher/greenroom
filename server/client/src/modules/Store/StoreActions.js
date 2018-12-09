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
    return callApi(
      'stores',
      {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      'POST',
      {},
      JSON.stringify({ store }),
    ).then((res) => { dispatch(addStore(res.json.store)); });
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
    return callApi(
      `stores/${store.slug}`,
      {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      'PUT',
      {},
      JSON.stringify({ store }),
    ).then(res => dispatch(updateStore(res.json.store)));
  };
}

export function requestUploadStore(data) {
  return (dispatch) => {
    return callApi(
      'stores/upload',
      {
        Accept: 'application/json',
      },
      'POST',
      {},
      data,
    ).then(res => dispatch(addStore(res.json.stores)));
  };
}

export function addStores(stores, fields) {
  return {
    type: ADD_STORES,
    stores,
    fields,
  };
}

export function fetchStores(filters) {

  return (dispatch) => {
    return callApi(
      'stores',
      {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      'GET',
      filters,
    ).then((res) => { dispatch(addStores(res.json.stores, res.json.fields)); });
  };
}

export function fetchStore(slug) {
  return (dispatch) => {
    return callApi(
      `stores/${slug}`,
      {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    ).then(res => dispatch(addStore(res.json.store)));
  };
}
