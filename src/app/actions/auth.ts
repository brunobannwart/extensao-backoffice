import { Dispatch } from 'redux';
import { getRouteStackPath } from '@portal/config/routes';
import AuthRequests from '~/repositories/auth';
import { setAuthorizationHeader } from '~/repositories/instance';
import * as MessageService from '~/services/message';
import * as StorageService from '~/services/storage';

import { AUTH_CHECK_LOGGED, AUTH_LOGIN, AUTH_LOGOUT, AUTH_ME } from './actionTypes';
import { decreaseLoading, increaseLoading } from './loading';

export const authenticate =
  (userData: models.AuthRequest) => async (dispatch: Dispatch) => {
    dispatch(increaseLoading());
    try {
      const payload: models.AuthResponse = await AuthRequests.login(userData);
      StorageService.setItem('session-token', payload);

      setAuthorizationHeader(payload.jwtToken as string);

      dispatch({
        payload,
        type: AUTH_LOGIN,
      });

      dispatch({
        payload: {
          id: payload.id,
          name: payload.username,
          profileType: payload.roles,
          email: payload.email
        },
        type: AUTH_ME,
      });

      StorageService.setItem('auth', userData);
      MessageService.success('PAGES.AUTH.LOGIN.MESSAGES.WELCOME');

      window.location.href = getRouteStackPath('DASHBOARD', 'DETAILS');
    } catch (err: any) {
      if (err && err.response) {
        MessageService.error(err.response.message);
      } else if (err && err.message) {
        MessageService.error('PAGES.AUTH.LOGIN.MESSAGES.INVALID');
      }
    } finally {
      dispatch(decreaseLoading());
    }
  };

export const refreshToken = (userData: any) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload: models.AuthResponse = await AuthRequests.refreshToken(
      userData
    );

    
    StorageService.setItem('session-token', payload);
    setAuthorizationHeader(payload.jwtToken as string);

    dispatch({
      payload,
      type: AUTH_LOGIN,
    });

  } catch (err: any) {
    StorageService.removeItem('session-token');
    window.location.href = '/';
  } finally {
    dispatch(decreaseLoading());
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    StorageService.removeItem('session-token');

    dispatch({
      type: AUTH_LOGOUT,
    });

    window.location.href = '/';
  } catch (err: any) {
    MessageService.error('APPLICATION.ERRORS.GENERIC');
  } finally {
    dispatch(decreaseLoading());
  }
};

export const checkIsLogged = () => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const token = StorageService.getItem('session-token');
    if (token) {
      setAuthorizationHeader(token.accessToken as string);
      dispatch({
        payload: token,
        type: AUTH_LOGIN,
      });
    }
  } finally {
    dispatch({
      type: AUTH_CHECK_LOGGED,
    });

    dispatch(decreaseLoading());
  }
};

export const changePassword =
  (authData: models.ChangePassword) => async (dispatch: Dispatch) => {
    dispatch(increaseLoading());
    try {
      await AuthRequests.changePassword(authData);

      MessageService.success(
        `PAGES.PANEL.CHANGE_PASSWORD.DETAILS.SUCCESS_MESSAGE`
      );

      window.location.href = getRouteStackPath('DASHBOARD', 'DETAILS');
    } catch (err: any) {
      MessageService.error(`APPLICATION.ERRORS.${err.message}`);
    } finally {
      dispatch(decreaseLoading());
    }
  };
