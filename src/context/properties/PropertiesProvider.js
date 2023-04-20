import React, { useState } from 'react';
import PropertiesContext from './PropertiesContext';
import PropertiesServices from '@/services/PropertiesServices';

const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState({});
  const [propertyId, setPropertyId] = useState('');
  const [statusCodeMsg, setStatusCodeMsg] = useState('');

  /** Get Properties */
  const getProperties = async (statusId, companyId) => {
    try {
      const response = await PropertiesServices.getProperties(
        statusId,
        companyId
      );

      setProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  const getPropertyById = async (id, statusId, companyId) => {
    try {
      const response = await PropertiesServices.getProperty(
        id,
        statusId,
        companyId
      );
      setProperty(response);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  const getPropertiesOnFormSubmit = async (
    statusId,
    companyId,
    operationType,
    typeOfProperty,
    region,
    commune,
    surfaceM2,
    minPrice,
    maxPrice,
    bedrooms,
    bathrooms,
    parkingLots
  ) => {
    try {
      const response = await PropertiesServices.getPropertiesOnFormSubmit(
        statusId,
        companyId,
        operationType,
        typeOfProperty,
        region,
        commune,
        surfaceM2,
        minPrice,
        maxPrice,
        bedrooms,
        bathrooms,
        parkingLots
      );
      setProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  const getPropertiesByDefault = async (
    statusId,
    companyId,
    operationType,
    typeOfProperty
  ) => {
    try {
      const response = await PropertiesServices.getPropertiesByDefault(
        statusId,
        companyId,
        operationType,
        typeOfProperty
      );
      setProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  return (
    <PropertiesContext.Provider
      value={{
        contextDataProps: [
          properties,
          getProperties,
          getPropertiesOnFormSubmit,
          getPropertiesByDefault,
          propertyId,
          setPropertyId,
          getPropertyById,
          property,
          setProperty,
        ],
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
