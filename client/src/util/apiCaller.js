import fetch from 'isomorphic-fetch';

export const API_URL = 'http://localhost:3001/api';

function buildUrl(url, parameters) {
  let qs = '';
  for (const key in parameters) {
    if (parameters.hasOwnProperty(key)) {
      const value = parameters[key];
      qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
    }
  }

  if (qs.length > 0) {
    qs = qs.substring(0, qs.length - 1); //chop off last "&"
    url = url + "?" + qs;
  }

  return url;
}

export default function callApi(endpoint, headers, method = 'GET', params, body) {
  return fetch(buildUrl(`${API_URL}/${endpoint}`, params), {
    headers,
    method,
    body,
  })
    .then(response => response.json().then(json => ({ json })));
}
