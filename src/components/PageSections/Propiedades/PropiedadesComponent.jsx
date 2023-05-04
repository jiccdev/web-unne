import React, { useContext, useEffect } from 'react';
import PropertiesList from './components/PropertiesList';
import AdvancedSearch from './components/AdvancedSearch';
import Pagination from '@/components/Pagination/Pagination';
import PropertiesContext from '@/context/properties/PropertiesContext';
import SelectsContext from '@/context/selects/SelectsContext';
import { company } from '@/data/company';

const PropiedadesComponent = () => {
  const { contextDataProps } = useContext(PropertiesContext);
  const { contextData } = useContext(SelectsContext);
  const [
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
  ] = contextDataProps;

  const paginate = (currentPage) =>
    getPagination(limit, currentPage, company.statusId, company.companyId);

  useEffect(() => {
    getTotalItems(1, 1);
  }, [metaData]);

  useEffect(() => {
    getPagination(limit, page, 1, 1);
  }, [limit, page]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="relative col-span-3">
        <PropertiesList />

        <div className="absolute bottom-0 flex justify-center items-center w-full mt-10 border p-2 bg-gray-50">
          <Pagination
            itemPerPage={limit}
            paginate={paginate}
            totalItems={totalItems}
            metaData={metaData}
            currentPage={page}
          />
        </div>
      </div>
      <div className="col-span-1">
        <AdvancedSearch />
      </div>
    </div>
  );
};

export default PropiedadesComponent;
