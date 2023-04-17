import React from 'react';
import Link from 'next/link';

const PropertyCard = ({ data }) => {
  const { id, title, image, address, commune, city, price } = data;
  return (
    <div className="w-full border rounded-lg bg-white border-gray-200">
      <Link href="/">
        <img className="rounded-t-lg" src={image} alt={`image-${title}`} />
      </Link>
      <div class="p-5">
        <a href="#">
          <span className="text-orange-500">Cod: {id}</span>
          <h5 class="mb-2 text-lg xl:text-xl font-bold tracking-tight text-grey-800">
            {title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-400">
          {address}, {commune}, {city}
        </p>

        <p class="mb-3 font-normal text-orange-500 text-end">Venta: {price}</p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
        >
          Ver detalles
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
