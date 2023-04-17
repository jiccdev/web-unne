import React from 'react';
import Link from 'next/link';
import { truncateString, parseToCLPCurrency } from '@/utils';

const PropertyCard = ({ data }) => {
  const { id, title, image, address, commune, city, price } = data;
  return (
    <div className="w-full border rounded-lg bg-white border-gray-200 hover:cursor-pointer hover:shadow-xl transition duration-300 ease-in-out">
      <Link href="/">
        <img className="rounded-t-lg" src={image} alt={`image-${title}`} />
      </Link>
      <div className="p-5">
        <a href="#">
          <span className="uppercase text-orange-500">Cod: {id}</span>
          <h5 className="mb-2 text-lg xl:text-lg font-bold text-gray-800">
            {truncateString(title, 60)}
          </h5>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-400">
          {address}, {commune}, {city}
        </p>

        <p className="mb-3 font-normal text-orange-500 text-end">
          Venta: {parseToCLPCurrency(price)}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
        >
          Ver detalles
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
