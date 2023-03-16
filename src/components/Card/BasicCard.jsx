import React from 'react';

const BasicCard = ({ backgroundColor, data }) => {
  const { title, desc } = data;
  return (
    <div
      className={`${backgroundColor} text-center py-6 px-4 xl:my-5 xl:mx-10 rounded-sm cursor-pointer hover:shadow-lg trasition duration-300 ease-in-out`}
    >
      <h3 className="text-xl font-bold text-gray-800 uppercase">{title}</h3>
      <p className="text-sm mt-4 mb-2 xl:text-md text-gray-700">{desc}</p>
    </div>
  );
};

export default BasicCard;
