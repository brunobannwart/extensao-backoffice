import { API_URL } from '@portal/config/env';
import getInstance from './instance';

const AuthApi = {
  login: async (user: models.AuthRequest) => {
    const instance = getInstance();
    const { data } = await instance.post(`${API_URL}/auth`, {
      email: user.username,
      password: user.password,
      grantType: 'password',
    });

    return data;
  },

  refreshToken: async (user: any) => {
    const instance = getInstance();
    const { data } = await instance.post(`${API_URL}/auth/refresh`, user);

    return data;
  },

  changePassword: async (params: models.ChangePassword) => {
    const instance = getInstance();
    const { data } = await instance.post(`${API_URL}/auth/change-Password`, params);

    return data;
  }
};

export default AuthApi;
