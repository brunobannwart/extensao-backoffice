import getInstance from './instance';

const OccurrenceApi = {
  getReport: async (params: advancedFilterModels.OccurrenceAdvancedFilter) => {
    const instance = await getInstance();
    const { data } = await instance.get('/occurrence', { params });

    return data;
  },

  getDetail: async (id: string) => {
    const instance = await getInstance();
    const { data } = await instance.get(`/occurrence/${id}`);

    return data;
  },

  add: async (params: models.Occurrence) => {
    const instance = await getInstance();
    const { data } = await instance.post('/occurrence', params);

    return data;
  },

  update: async (id: string, params: models.Occurrence) => {
    const instance = await getInstance();
    const { data } = await instance.put(`/occurrence/${id}`, params);
    return data;
  },

  remove: async (id: string) => {
    const instance = await getInstance();
    const { data } = await instance.delete(`/occurrence/${id}`);

    return data;
  },
};

export default OccurrenceApi;
