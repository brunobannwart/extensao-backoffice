import { API_URL } from '@portal/config/env';
import getInstance from './instance';
import { encodeBase64 } from '~/utils/utilities';

const AuthApi = {
  login: async (user: models.AuthRequest) => {
    const instance = getInstance();
    const base64 = encodeBase64(`${user.username}:${user.password}`);
    let config = {
      headers: {
        authorization: `Basic ${base64}`,
      }
    }
    
    const { data } = await instance.get(`${API_URL}/v1/login/signin`, config);

    return data;
  },

  refreshToken: async (user: any) => {
    const instance = getInstance();

    let config = {
      headers: {
        authorization: `Basic ${user.token}`,
      }
    }

    const { data } = await instance.get(`${API_URL}/v1/login/refresh`, config);

    return data;
  },

  changePassword: async (params: models.ChangePassword) => {
    const instance = getInstance();
    const { data } = await instance.post(`${API_URL}/v1/login/chpass`, params);

    return data;
  }
};

export default AuthApi;
