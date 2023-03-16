import React from 'react';

const HeadingSection = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl xl:text-4xl font-bold text-gray-800">{title}</h1>
      <h2 className="text-lg my-2 xl:text-3xl font-medium text-orange-500">
        {subtitle}
      </h2>
    </div>
  );
};

export default HeadingSection;
