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

  const router = useRouter();
  const [isGrid, setIsGrid] = useState(true);
  const [isList, setIsList] = useState(false);
  const { pathname } = useRouter();
  const { BsFillGridFill, FaThList, FaMapMarked } = iconsList;

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
    <div id="properties-section" className="relative mb-24">
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
          <div
            className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 w-[98%] absolute"
            role="alert"
          >
            <p className="font-bold">Propiedad o propiedades no econtradas</p>
            <p>
              Las propiedades no coincide con tu búsqueda{' '}
              <Link
                href={router.pathname}
                as={router.pathname}
                onClick={() => {
                  window.location.reload();
                }}
                className="text-blue-500 text"
              >
                Reiniciar Busqueda
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesList;
