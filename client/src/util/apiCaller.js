import fetch from 'isomorphic-fetch';

export const API_URL = 'http://localhost:3001/api';

export default function callApi(endpoint, headers, method = 'GET', body) {
  return fetch(`${API_URL}/${endpoint}`, {
    headers,
    method,
    body,
  })
    .then(response => response.json().then(json => ({ json })));
}
