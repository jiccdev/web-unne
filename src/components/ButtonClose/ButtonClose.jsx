import React from 'react';
import { iconsList } from '../Icons';

const ButtonClose = ({ className = '', onClick = () => {} }) => {
  const { GrClose } = iconsList;

  return (
    <button
      className={`w-8 h-8 flex items-center justify-center rounded-full dark:bg-gray-800 hover:bg-gray-100 text-gray-200 dark:hover:bg-gray-700 dark:text-gray-500 ${className} `}
      onClick={onClick}
    >
      <span className="sr-only">Close</span>
      <GrClose className="w-5 h-5" />
    </button>
  );
};

export default ButtonClose;
