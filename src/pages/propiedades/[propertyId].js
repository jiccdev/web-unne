import React, { Fragment, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropertiesContext from '@/context/properties/PropertiesContext';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';

const PropiedadId = () => {
  const { contextDataProps } = useContext(PropertiesContext);
  const [
    ,
    ,
    ,
    ,
    propertyId,
    setPropertyId,
    getPropertyById,
    property,
    setProperty,
  ] = contextDataProps;
  const { query } = useRouter();
  const queryId = query.propertyId;

  console.log('queryId', Number(queryId));
  console.log('PropertyId', propertyId);
  console.log('Property data', property);

  useEffect(() => {
    getPropertyById(queryId || propertyId, 1, 1);
  }, []);

  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Propiedad 1</title>
      </HeadPage>

      <Layout>
        <div className="my-10 px-4 xl:px-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto bg-red md:grid-cols-reverse">
            <div className="sm:col-span-6 col-span-3 xl:col-span-3 bg-gray-200 h-20 order-2 xl:order-1">
              Col 1
            </div>
            <div className="sm:col-span-6 col-span-3 xl:col-span-1 bg-gray-400 h-20 order-1 xl:order-2">
              Col 2
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default PropiedadId;
