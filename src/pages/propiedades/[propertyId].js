import React, { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropertiesContext from '@/context/properties/PropertiesContext';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import GalleryCarousel from '@/components/GalleryCarousel/GalleryCarousel';
import TopInfoAddress from '@/components/PageSections/Propiedades/components/PropertyId/TopInfoAddress';
import Details from '@/components/PageSections/Propiedades/components/PropertyId/Details';
import SimilarProjects from '@/components/PageSections/Propiedades/components/PropertyId/SimilarProjects';
import Characteristics from '@/components/PageSections/Propiedades/components/PropertyId/Characteristics';
import { iconsList } from '@/components/Icons';

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
  const { FaShare, AiFillPrinter } = iconsList;

  // console.log('queryId', String(queryId));
  // console.log('PropertyId', propertyId);
  // console.log('Property data', property);

  useEffect(() => {
    getPropertyById(queryId, 1, 1);
  }, [queryId]);

  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Propiedad {queryId || 'Propiedad no encontrada'}</title>
      </HeadPage>

      <Layout>
        <div className="my-10 px-4 xl:px-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto bg-red md:grid-cols-reverse">
            <div className="sm:col-span-6 col-span-3 xl:col-span-3 bg-gray-50 max-h-auto order-2 xl:order-1">
              <div className="flex justify-between items-center py-2.5 px-5 text-xs xl:text-sm text-gray-500">
                <TopInfoAddress property={property} />
                <div className="flex flex-row">
                  <span className="flex items-center hover:text-blue-500 cursor-pointer">
                    <FaShare className="mr-1" />
                    Compartir
                  </span>
                  <span className="mx-4 text-gray-200">|</span>
                  <span className="flex items-center hover:text-blue-500 cursor-pointer">
                    <AiFillPrinter className="mr-1" />
                    Imprimir PDF
                  </span>
                </div>
              </div>
              <GalleryCarousel items={property} />
              <Characteristics property={property} />
            </div>
            <div className="sm:col-span-6 col-span-3 xl:col-span-1 bg-white h-auto order-1 xl:order-2">
              <Details property={property} />
              <SimilarProjects />
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default PropiedadId;
