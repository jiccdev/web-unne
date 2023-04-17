import api from '@/api';

const PropertiesServices = {
  getProperties: async (statusId = 1, companyId = 1) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },
};

export default PropertiesServices;
