import React, { Fragment } from 'react';
import Link from 'next/link';

const SearchByPropertyCode = ({ propertyId, setPropertyId }) => {
  const CLASSES =
    'block w-full my-4 text-gray-500 focus:outline-none bg-white rounded-full border border-gray-300';

  const handlePropertyId = (ev) => setPropertyId(Number(ev.target.value));

  return (
    <Fragment>
      <form>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="number"
            id="search-property"
            value={propertyId}
            onChange={handlePropertyId}
            className={`${CLASSES} p-3 pl-10 text-MD`}
            placeholder="Código: 00001"
          />
          <Link
            href={`/propiedades/${propertyId}?statusId=${1}&companyId=${15}`}
            className="text-white absolute pt-3 top-[0px] right-[1px] bottom-[0px] bg-gray-400 hover:bg-gray-500 py-2.5 px-4 xl:px-7 rounded-r-full"
          >
            Buscar
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

export default SearchByPropertyCode;
