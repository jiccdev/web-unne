import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropertiesContext from './PropertiesContext';
import PropertiesServices from '@/services/PropertiesServices';
import { company } from '@/data/company';

const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState({});
  const [propertyId, setPropertyId] = useState('');
  const [statusCodeMsg, setStatusCodeMsg] = useState('');
  const [cargando, setCargando] = useState(true);
  const { pathname } = useRouter();

  /* Pagination */
  const [limit, setLimit] = useState(10);
  const [metaData, setMetaData] = useState({});
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState('');

  /** Get Properties */
  const getProperties = async (statusId, companyId) => {
    try {
      const response = await PropertiesServices.getProperties(
        statusId,
        companyId
      );

      if (pathname === '/soy-inversionista/unidades-nuevas') {
        const filtredPropertiesBySale = response?.data?.filter((property) => {
          return property?.operation === 'Venta';
        });
        setProperties(filtredPropertiesBySale);
        return;
      } else {
        setProperties(response.data);
      }
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  useEffect(() => {
    getProperties(company.statusId, company.companyId);
  }, [pathname]);

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

  /** Get Pagination */
  const getPagination = async (limit, page, statusId, companyId) => {
    try {
      const response = await PropertiesServices.getPagination(
        limit,
        page,
        statusId,
        companyId
      );
      setMetaData(response?.meta);

      if (pathname === '/soy-inversionista/unidades-nuevas') {
        const filtredPropertiesBySale = response?.data?.filter((property) => {
          return property?.operation === 'Venta';
        });
        setProperties(filtredPropertiesBySale);
      } else {
        return setProperties(response.data);
      }

      setProperties(response.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  /** Get Total Items from metadata*/
  const getTotalItems = async (statusId, companyId) => {
    try {
      const response = await PropertiesServices.getProperties(
        statusId,
        companyId
      );
      setTotalItems(response.meta.totalItems);
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
          limit,
          metaData,
          totalItems,
          getPagination,
          getTotalItems,
          page,
          cargando,
          setCargando,
        ],
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
