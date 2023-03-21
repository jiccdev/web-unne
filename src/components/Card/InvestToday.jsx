import React from 'react'

const InvestToday = ({title}) => {
  return (
    <div className="card w-52 rounded-xl hover:bg-slate-100 border-gray-400 border-solid border cursor-pointer hover:scale-105 hover:shadow-2xl trasition duration-300 ease-in-out">
      <div className="card-body items-center text-center py-0 pt-5">
        <h2 className="card-title">{title}</h2>
      </div>
      <figure><img src="https://picsum.photos/150" alt="Shoes" className='rounded-full my-5' /></figure>
    </div>
  )
}

export default InvestToday
