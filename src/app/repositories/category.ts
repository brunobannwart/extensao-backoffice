import getInstance from './instance';

const CategoryApi = {
  getReport: async (params: advancedFilterModels.CategoryAdvancedFilter) => {
    const instance = await getInstance();
    const { data } = await instance.get('/category', { params });

    return data;
  },

  getDetail: async (id: string) => {
    const instance = await getInstance();
    const { data } = await instance.get(`/category/${id}`);

    return data;
  },

  add: async (params: models.Category) => {
    const instance = await getInstance();
    const { data } = await instance.post('/category', params);

    return data;
  },

  update: async (id: string, params: models.Category) => {
    const instance = await getInstance();
    const { data } = await instance.put(`/category/${id}`, params);
    return data;
  },

  remove: async (id: string) => {
    const instance = await getInstance();
    const { data } = await instance.delete(`/category/${id}`);

    return data;
  },
};

export default CategoryApi;
