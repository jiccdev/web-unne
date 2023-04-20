import React, { useState, useEffect } from 'react';
import { iconsList } from '@/components/Icons';

const Characteristics = ({ property }) => {
  const [date, setDate] = useState(new Date());
  const {
    company,
    price,
    surface_m2,
    bedrooms,
    bathrooms,
    coveredParkingLots,
    status,
  } = property;
  const {
    RiPencilRulerLine,
    FaBed,
    FaBath,
    BsFillCalendarCheckFill,
    GiHomeGarage,
    BsCheckCircle,
  } = iconsList;

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col p-5 mt-10 md:xl:mt-24 lg:xl:mt-24 xl:mt-24">
      <div className="flex w-full flex-col xl:flex-row xl:w-4/6 justify-between">
        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-500">
          <span className="text-gray-400 mr-1">
            <RiPencilRulerLine />
          </span>
          Superficie útil: {surface_m2 ?? 0}m<sup>2</sup> útiles
        </div>

        <div className="flex items-center my-1 text-gray-500">
          <span className="text-gray-400 mr-1">
            <FaBath />
          </span>
          Baños: {bathrooms ?? 0}
        </div>

        <div className="flex items-center my-1 text-gray-500">
          <span className="text-gray-400 mr-1">
            <BsFillCalendarCheckFill />
          </span>
          Fecha de entrega: {date.toLocaleTimeString()}
        </div>
      </div>

      <div className="flex w-full flex-col xl:flex-row xl:w-4/6 justify-between">
        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-500">
          <span className="text-gray-400 mr-1">
            <FaBed />
          </span>
          Dormitorios: {bedrooms ?? 0}
        </div>

        <div className="flex items-center my-1 text-gray-500">
          <span className="text-gray-400 mr-1">
            <GiHomeGarage />
          </span>
          Estacionamientos: {coveredParkingLots ?? 0}
        </div>

        <div className="flex items-center my-1 text-gray-500">
          <span className="text-gray-400 mr-1">
            <BsCheckCircle />
          </span>
          Estado del proyecto: {status ?? 'Desabilitado'}
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
