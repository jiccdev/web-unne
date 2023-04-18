import React, { useContext, useEffect } from 'react';
import PropertiesContext from '@/context/properties/PropertiesContext';
import SelectsContext from '@/context/selects/SelectsContext';
import PropertyCard from './PropertyCard';

const PropertiesList = () => {
  const { contextDataProps } = useContext(PropertiesContext);
  const { contextData } = useContext(SelectsContext);
  const [properties, getProperties] = contextDataProps;
  const [filterSearchEntry] = contextData;

  // useEffect(() => {
  //   getProperties();
  // }, [filterSearchEntry]);

  return (
    <div className="">
      <div className="p-2 py-5">
        <h1 className="text-2xl">Propiedades</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-2">
        {properties.length > 0 ? (
          properties?.map((property) => (
            <PropertyCard key={property?.id} data={property} />
          ))
        ) : (
          <p>Obteniendo propiedades</p>
        )}
      </div>
    </div>
  );
};

export default PropertiesList;
