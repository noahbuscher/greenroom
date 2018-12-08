import fetch from 'isomorphic-fetch';

export const API_URL = 'http://localhost:3001/api';

export default function callApi(endpoint, method = 'GET', body) {
  return fetch(`${API_URL}/${endpoint}`, {
    headers: { Accept: 'application/json' },
    method,
    body: JSON.stringify(body),
  })
    .then(response => response.json().then(json => ({ json })));
}
