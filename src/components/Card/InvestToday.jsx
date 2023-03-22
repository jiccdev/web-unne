import React from 'react'

const InvestToday = ({title}) => {
  return (
    <div className="card w-56 rounded-xl hover:bg-[#fffbf1] border-gray-400 hover:border-gray-500 border-solid border cursor-pointer hover:scale-105 hover:shadow-2xl trasition duration-300 ease-in-out">
      <div className="card-body items-center text-center py-0 pt-5">
        <h2 className="card-title">{title}</h2>
      </div>
      <figure><img src="https://fastly.picsum.photos/id/737/150/150.jpg?hmac=iAVmb4Q2lB0LSYSbBIhjq8jJSt_c-n_vUsMqa5_mWDg" width={150} height={150} alt="Shoes" className='rounded-full my-5' /></figure>
    </div>
  )
}

export default InvestToday
