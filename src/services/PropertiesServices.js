import api from '@/api';
import { company } from '../data/company.js';

const PropertiesServices = {
  getProperties: async (
    statusId = company.statusId,
    companyId = company.companyId
  ) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}`
      // `properties?statusId=${statusId}&companyId=${companyId}&operationType=venta&typeOfProperty=casa`
    );
    return response.data;
  },

  getPropertiesByTypeOfProperty: async (
    statusId = company.statusId,
    companyId = company.companyId,
    typeOfProperty
  ) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&typeOfProperty=${typeOfProperty}`
    );
    return response.data;
  },

  getPagination: async (
    limit,
    page,
    statusId = company.statusId,
    companyId = company.companyId
  ) => {
    const response = await api.get(
      `properties?limit=${limit}&page=${page}&statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },

  getProperty: async (
    id,
    statusId = company.statusId,
    companyId = company.companyId
  ) => {
    const response = await api.get(
      `properties/${id}?statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },

  /* Pagination */
  getAllProperties: async (
    limit,
    statusId = company.statusId,
    companyId = company.companyId
  ) => {
    const response = await api.get(
      `properties?limit=${limit}&statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },

  getPropertiesOnFormSubmit: async (
    statusId = company.statusId,
    companyId = company.companyId,
    operationType = '', //venta
    typeOfProperty = '', //casa
    region,
    commune,
    surfaceM2,
    minPrice,
    maxPrice,
    bedrooms,
    bathrooms,
    parkingLots
  ) => {
    const _statusId = `${statusId}`;
    const _companyId = `${companyId}`;
    const _operationType = operationType.length > 0 ? operationType : false;
    const _typeOfProperty = typeOfProperty?.length > 0 ? typeOfProperty : false;
    const _region = region > 0 ? region : false;
    const _commune = commune.length > 0 ? commune : false;
    const _surfaceM2 = surfaceM2 > 0 || surfaceM2 > '0' ? surfaceM2 : false;
    const _minPrice = minPrice > 0 ? minPrice : false;
    const _maxPrice = maxPrice > 0 ? maxPrice : false;
    const _bedrooms = bedrooms > 0 || bedrooms > '0' ? bedrooms : false;
    const _bathrooms = bathrooms > 0 || bathrooms > '0' ? bathrooms : false;
    const _coveredParkingLots = parkingLots > 0 ? parkingLots : false;

    const response = await api.get(
      `properties?statusId=${_statusId}&companyId=${_companyId}${
        _operationType ? `&operationType=${_operationType}` : ''
      }${_typeOfProperty ? `&typeOfProperty=${_typeOfProperty}` : ''}${
        _region ? `&region=${_region}` : ''
      }${_commune ? `&commune=${_commune}` : ''}${
        _minPrice ? `&min_price=${_minPrice}` : ''
      }${_maxPrice ? `&max_price=${_maxPrice}` : ''}${
        _coveredParkingLots
          ? `&covered_parking_lots=${_coveredParkingLots}`
          : ''
      }${_bedrooms ? `&bedrooms=${_bedrooms}` : ''}${
        _surfaceM2 ? `&surface_m2=${_surfaceM2}` : ''
      }${_bathrooms ? `&bathrooms=${_bathrooms}` : ''}`
    );
    return response.data;
  },

  getPropertiesByDefault: async (
    statusId = company.statusId,
    companyId = company.companyId,
    operationType = 'venta',
    typeOfProperty = 'casa'
  ) => {
    const _statusId = `${statusId}`;
    const _companyId = `${companyId}`;
    const _operationType = operationType.length > 0 ? operationType : false;
    const _typeOfProperty = typeOfProperty?.length > 0 ? typeOfProperty : false;

    const response = await api.get(
      `properties?statusId=${_statusId}&companyId=${_companyId}${
        _operationType ? `&operationType=${_operationType}` : ''
      }${_typeOfProperty ? `&typeOfProperty=${_typeOfProperty}` : ''}`
    );
    return response.data;
  },
};

export default PropertiesServices;
