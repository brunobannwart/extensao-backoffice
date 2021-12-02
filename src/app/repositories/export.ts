import getInstance from './instance';

const ExportApi = {
  createCSV: async (params: models.ExportCSV) => {
    const instance = await getInstance();
    const { data } = await instance.post('/v1/report-csv', params);

    return data;
  },
};

export default ExportApi;
