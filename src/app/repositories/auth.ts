import { API_URL } from '@portal/config/env';
import getInstance from './instance';

const AuthApi = {
  login: async (user: models.AuthRequest) => {
    const instance = getInstance();
    console.log(`${API_URL}/v1/login/signin`)
    const { data } = await instance.get(`${API_URL}/v1/login/signin`); //adicionar headers

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
