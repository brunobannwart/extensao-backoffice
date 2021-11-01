import getInstance from './instance';

const ProfileApi = {
  getReport: async (params: advancedFilterModels.ProfileAdvancedFilter) => {
    const instance = await getInstance();
    const { data } = await instance.get('/profile', { params });

    return data;
  },

  getDetail: async (id: string) => {
    const instance = await getInstance();
    const { data } = await instance.get(`/profile/${id}`);

    return data;
  },

  add: async (params: models.Profile) => {
    const instance = await getInstance();
    const { data } = await instance.post('/profile', params);

    return data;
  },

  update: async (id: string, params: models.Profile) => {
    const instance = await getInstance();
    const { data } = await instance.put(`/profile/${id}`, params);
    return data;
  },

  remove: async (id: string) => {
    const instance = await getInstance();
    const { data } = await instance.delete(`/profile/${id}`);

    return data;
  },
};

export default ProfileApi;
