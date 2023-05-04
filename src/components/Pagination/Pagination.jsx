import React from 'react';
import Link from 'next/link';
import { iconsList } from '../Icons';

const Pagination = ({
  itemPerPage,
  paginate,
  totalItems,
  metaData,
  currentPage,
}) => {
  const ClassPag =
    'bg-white hover:bg-[#E9ECEF] text-orange-500 hover:text-orange-500 border-slate-300 hover:border-slate-300';

  const ClassNumberActive =
    'mx-auto my-auto bg-orange-500 flex items-center justify-center text-gray-400 w-100 h-100 block  hover:bg-[#E9ECEF] hover:text-orange-500 border-slate-300 hover:border-slate-300';

  const ClassNumber =
    'mx-auto my-auto bg-white flex items-center justify-center text-gray-400 w-100 h-100 block  hover:bg-[#E9ECEF] hover:text-orange-500 border-slate-300 hover:border-slate-300';

  const { IoIosArrowBack, IoIosArrowForward } = iconsList;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    paginate(metaData.page + 1);
  };

  const prevPage = () => {
    paginate(metaData.page - 1);
  };

  return (
    <div className="btn-group">
      <button
        className={`btn btn-md ${ClassPag} `}
        onClick={(ev) => {
          ev.preventDefault();
          prevPage();
        }}
      >
        <IoIosArrowBack />
      </button>

      {pageNumbers?.map((item, idx) => {
        return (
          <Link
            tag="a"
            href="#pageitem"
            onClick={(ev) => {
              ev.preventDefault();
              paginate(item);
            }}
            className={
              currentPage === item
                ? `btn btn-md ${ClassNumber} border`
                : `btn btn-md ${ClassNumber} border`
            }
            key={idx}
          >
            {item}
          </Link>
        );
      })}

      <button
        className={`btn btn-md ${ClassPag}`}
        onClick={(ev) => {
          ev.preventDefault();
          nextPage();
        }}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
