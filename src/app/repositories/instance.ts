import { message } from 'antd';
import Axios, { AxiosResponse } from 'axios';

import { API_URL } from '@portal/config/env';
import { translate } from '~/services/i18n';
import * as StorageService from '~/services/storage';
import storeCreator from '~/reducers/createStore';
import { refreshToken, logout } from '~/actions/auth';

import { handleAxiosError } from '../services/api';

interface IHandler {
  unauthorizedError: () => void;
}

const handler: IHandler = {
  unauthorizedError: () => {},
};

const axiosInstance = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 30000,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (err) => {
    if (err.response.status === 401) {
      try {
        const payload: models.AuthResponse = StorageService.getItem('session-token');
        await storeCreator.dispatch(refreshToken(payload.jwtToken));
        window.location.reload();
      } catch (err) {
        await storeCreator.dispatch(logout());
      }
    } else if (err.response.status === 403) {
      message.error(translate('APPLICATION.ERRORS.INSTANCE.LOGIN'));
      handleAxiosError(err);
      await storeCreator.dispatch(logout());
    }

    return Promise.reject(handleAxiosError(err));
  }
);
export const setHandleUnauthorizedError = (fn: () => void) => {
  handler.unauthorizedError = fn;
};

export const setAuthorizationHeader = (token: string) => {
  axiosInstance.defaults.headers.Authorization = `Basic ${token}`;
};

export function getInstance(auth?: string) {
  if (
    StorageService.getItem('session-token') &&
    StorageService.getItem('session-token').token
  ) {
    setAuthorizationHeader(StorageService.getItem('session-token').token);
  } else {
    setAuthorizationHeader('undefined');
  }
  
  if (auth) {
    setAuthorizationHeader(auth);
  }

  return axiosInstance;
}

export default getInstance;
