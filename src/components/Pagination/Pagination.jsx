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
  const ClassNumber =
    'mx-auto my-auto flex items-center justify-center text-gray-400 w-100 h-100 block bg-white hover:bg-[#E9ECEF] hover:text-orange-500 border-slate-300 hover:border-slate-300';
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
                ? `btn btn-md ${ClassNumber} border-x-0`
                : `btn btn-md ${ClassNumber} border-x-0`
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
