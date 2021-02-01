import axios from 'axios';

const makeRequest = axios;

const baseURL = 'http://localhost:3100';

axios.interceptors.response.use(
  res => res,
  error => {
    return Promise.reject(error);
  },
);

export const get = (requestUrl: string, id = null, params = {}) =>
  makeRequest({
    baseURL,
    url: id ? `${requestUrl}/${id}` : requestUrl,
    method: 'get',
    params,
  });

export const post = (requestUrl: string, data = {}, id = null, params = {}) =>
  makeRequest({
    baseURL,
    url: id ? `${requestUrl}/${id}` : requestUrl,
    method: 'post',
    data,
    params,
  });

export const remove = (requestUrl: string, id = null, params = {}) =>
  makeRequest({
    baseURL,
    url: id ? `${requestUrl}/${id}` : requestUrl,
    method: 'delete',
    params,
  });

export const put = (requestUrl: string, id = null, data = {}) =>
  makeRequest({
    baseURL,
    url: id ? `${requestUrl}/${id}` : requestUrl,
    method: 'put',
    data,
  });
