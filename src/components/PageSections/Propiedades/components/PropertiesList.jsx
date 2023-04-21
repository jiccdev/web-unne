import React, { useContext, useEffect } from 'react';
import PropertiesContext from '@/context/properties/PropertiesContext';
import SelectsContext from '@/context/selects/SelectsContext';
import PropertyCard from './PropertyCard';
import { iconsList } from '@/components/Icons';
import { useState } from 'react';

const PropertiesList = () => {
  const { contextDataProps } = useContext(PropertiesContext);
  const { contextData } = useContext(SelectsContext);
  const [
    properties,
    getProperties,
    getPropertiesOnFormSubmit,
    getPropertiesByDefault,
  ] = contextDataProps;
  const [filterSearchEntry] = contextData;
  const [isGrid, setIsGrid] = useState(true);
  const [isList, setIsList] = useState(false);
  const { BsFillGridFill, FaThList, FaMapMarked } = iconsList;

  useEffect(() => {
    filterSearchEntry?.operationType === 'arriendo' &&
    filterSearchEntry?.typeOfProperty === 'departamento'
      ? getPropertiesByDefault()
      : null;
  }, [
    filterSearchEntry,
    filterSearchEntry?.operationType,
    filterSearchEntry?.typeOfProperty,
  ]);

  return (
    <div className="">
      <div className="p-2 py-5 bg-gray-50 flex justify-between items-center">
        <h1 className="text-2xl">Propiedades</h1>
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
            <FaMapMarked />
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
    </div>
  );
};

export default PropertiesList;
