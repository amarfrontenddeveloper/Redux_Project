import React from 'react';
import axios from 'axios';

export const BASE_URL = 'http://103.117.66.70:5001/api/';

export const httpClient = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
});

export const initialState = {
  all_Product: [],
  login_response: null,
  error: false,
  isLoading: false,
};
export const POST_METHOD = 'post';
export const GET_METHOD = 'get';

export const regx = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
};

export const APPLICATION_JSON_HEADER = {'Content-Type': 'application/json'};

export const AUTHORIZATION = token => {
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    },
  };
};
