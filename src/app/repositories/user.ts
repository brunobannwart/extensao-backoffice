import getInstance from './instance';

const UserApi = {
  getReport: async (params: advancedFilterModels.UserAdvancedFilter) => {
    const instance = await getInstance();
    const { data } = await instance.get('/user', { params });

    return data;
  },

  getDetail: async (id: string) => {
    const instance = await getInstance();
    const { data } = await instance.get(`/user/${id}`);

    return data;
  },

  me: async () => {
    const instance = await getInstance();
    const { data } = await instance.get('/user/me');

    return data;
  },

  add: async (params: models.User) => {
    const instance = await getInstance();
    const { data } = await instance.post('/user', params);

    return data;
  },

  update: async (id: string, params: models.User) => {
    const instance = await getInstance();
    const { data } = await instance.put(`/user/${id}`, params);
    return data;
  },

  remove: async (id: string) => {
    const instance = await getInstance();
    const { data } = await instance.delete(`/user/${id}`);

    return data;
  },
};

export default UserApi;
