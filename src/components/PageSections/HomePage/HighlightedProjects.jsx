import React, { useContext, useEffect, useState } from 'react';
import PropertiesContext from '@/context/properties/PropertiesContext';
import HeadingSection from '@/components/Heading/HeadingSection';
import PropertyCard from '../Propiedades/components/PropertyCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const HighlightedProjects = () => {
  const { contextDataProps } = useContext(PropertiesContext);
  const [properties, getProperties] = contextDataProps;

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
    1920: { items: 4 },
  };

  /** Get Highlighted Properties only */
  const getHighlightedProperties = properties?.filter(
    (filtredProperty) => filtredProperty?.highlighted === true
  );

  useEffect(() => {
    getHighlightedProperties && getProperties();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col bg-gray-50 rounded-md pb-14">
      <HeadingSection title="Proyectos Destacados" />

      {getHighlightedProperties.length > 0 ? (
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          controlsStrategy="alternate"
          autoPlayStrategy="none"
          autoPlayInterval={2500}
          animationDuration={1000}
          animationType="fadeout"
          touchTracking={false}
          disableButtonsControls
          disableDotsControls
          autoPlay
          infinite
          items={getHighlightedProperties?.map((property) => (
            <div key={property?.id} className="m-3">
              <PropertyCard data={property} />
            </div>
          ))}
        />
      ) : (
        <span className="text-sm text-gray-500">Cargando...</span>
      )}
    </div>
  );
};

export default HighlightedProjects;
