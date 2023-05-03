import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropertiesContext from '@/context/properties/PropertiesContext';
import SelectsContext from '@/context/selects/SelectsContext';
import PropertyCard from './PropertyCard';
import { iconsList } from '@/components/Icons';
import { useState } from 'react';
import Pagination from '@/components/Pagination/Pagination';
import { company } from '@/data/company';

const PropertiesList = () => {
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

  const [filterSearchEntry] = contextData;
  const [isGrid, setIsGrid] = useState(true);
  const [isList, setIsList] = useState(false);
  const { pathname } = useRouter();
  const { BsFillGridFill, FaThList, FaMapMarked } = iconsList;

  const paginate = (currentPage) =>
    getPagination(limit, currentPage, company.statusId, company.companyId);

  console.log(filterSearchEntry);

  useEffect(() => {
    getTotalItems(1, 1);
  }, [metaData]);

  console.log(metaData);

  console.log('limit', limit, 'page', page);

  useEffect(() => {
    getPagination(limit, page, 1, 1);
  }, [limit, page]);

  // useEffect(() => {
  //   getProperties(
  //     1,
  //     1,
  //     filterSearchEntry?.operationType,
  //     filterSearchEntry?.typeOfProperty
  //   );
  // }, [filterSearchEntry?.operationType]);

  // useEffect(() => {
  //   getTotalItems(1, 15);
  // }, [metaData]);

  // useEffect(() => {
  //   getPagination(limit, page, 1, 15);
  // }, [limit, page]);

  // useEffect(() => {
  //   if (pathname === '/propiedades') {
  //     getPropertiesByDefault();
  //     return;
  //   }

  //   // getProperties();
  //   // filterSearchEntry?.operationType === 'arriendo' &&
  //   //   filterSearchEntry?.typeOfProperty === 'departamento'
  //   //   ? getPropertiesByDefault()
  //   //   : null;
  // }, [
  //   filterSearchEntry,
  //   filterSearchEntry?.operationType,
  //   filterSearchEntry?.typeOfProperty,
  // ]);

  const getTopTitle = (location) => {
    switch (location) {
      case '/propiedades':
        return 'Propiedades';
      case '/soy-inversionista/unidades-nuevas':
        return 'Unidades Nuevas';
      default:
        break;
    }
  };

  return (
    <div className="">
      <div className="p-2 py-5 bg-gray-50 flex justify-between items-center">
        <h1 className="text-2xl">{getTopTitle(pathname)}</h1>
        <ul className="flex items-center">
          <li
            onClick={() => {
              setIsGrid(true);
              setIsList(false);
            }}
            className={`${
              isGrid
                ? 'mx-1 p-2.5 rounded-md bg-orange-500 text-white cursor-pointer'
                : 'mx-1 p-2.5 rounded-md bg-gray-200 cursor-pointer text-gray-500'
            }`}
          >
            <BsFillGridFill />
          </li>
          <li
            onClick={() => {
              setIsList(true);
              setIsGrid(false);
            }}
            className={`${
              isList
                ? 'mx-1 p-2.5 rounded-md bg-orange-500 text-white cursor-pointer'
                : 'mx-1 p-2.5 rounded-md bg-gray-200 cursor-pointer text-gray-500'
            }`}
          >
            <FaThList />
          </li>
          <li className="mx-1 p-2.5 rounded-md bg-gray-200 cursor-pointer text-gray-500">
            <Link href="propiedades/maps-propiedades">
              <FaMapMarked />
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`${
          isGrid
            ? 'grid grid-cols-1 sm:grid-cols-3 gap-4 p-2'
            : 'flex flex-col gap-4 p-2'
        }`}
      >
        {properties.length > 0 ? (
          properties?.map((property) => (
            <PropertyCard
              key={property?.id}
              data={property}
              isList={isList}
              setIsList={setIsList}
            />
          ))
        ) : (
          <p>Obteniendo propiedades</p>
        )}
      </div>
      <div className="flex justify-center my-5">
        <Pagination
          itemPerPage={limit}
          paginate={paginate}
          totalItems={totalItems}
          metaData={metaData}
          currentPage={page}
        />
      </div>
    </div>
  );
};

export default PropertiesList;
