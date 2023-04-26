import React from 'react';
import { iconsList } from '../Icons';

const Pagination = ({ itemPerPage, paginate, totalItems, metaData }) => {

  const ClassPag = 'bg-white hover:bg-[#E9ECEF] text-orange-500 hover:text-orange-500 border-slate-300 hover:border-slate-300';
  const ClassNumber = 'bg-white hover:bg-orange-500 text-gray-500 hover:text-white border-slate-300 hover:border-slate-300';
  const { IoIosArrowBack, IoIosArrowForward } = iconsList;

  /* Examples */
  const PageNumberExample = 1;
  
  /*  */
  const pageNumbers = [];

  for(let i = 1; i<= Math.ceil(totalItems/itemPerPage);i++){
    pageNumbers.push(i);
  }

  const nextPage = ()=> {
    paginate(metaData.page + 1)
  }

  const prevPage = ()=> {
    paginate(metaData.page - 1)
  }


  return (
    <div className="btn-group">
      <button className={`btn btn-md ${ClassPag} `}
        onClick={(ev)=>{
          ev.preventDefault();
          prevPage();
        }}>
        <IoIosArrowBack/>
      </button>
      
      <button className={`btn btn-md ${ClassNumber} border-x-0`}>{PageNumberExample}</button>

      <button className={`btn btn-md ${ClassPag}`}
        onClick={(ev)=>{
          ev.preventDefault();
          nextPage();
        }}>
        <IoIosArrowForward/>
      </button>
    </div>
  );
};

export default Pagination;
