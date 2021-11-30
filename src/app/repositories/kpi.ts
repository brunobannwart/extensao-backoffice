import getInstance from './instance';

const KpiApi = {
  getReport: async (params?: advancedFilterModels.KpiAdvancedFilter) => {
    const instance = await getInstance();
    const { data } = await instance.get('/v1/kpi', { params });

    return data;
  },
};

export default KpiApi;
