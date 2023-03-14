import React from 'react';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div className="relative w-100 bg-white">
      {/* HEADER PAGE */}
      <Header />

      {/* MAIN CONTENT */}
      {children}

      {/* FOOTER PAGE */}
    </div>
  );
};

export default Layout;
