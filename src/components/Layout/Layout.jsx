import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative overflow-hidden z-10 w-100 bg-white">
      {/* HEADER PAGE */}
      <Header />

      {/* MAIN CONTENT */}
      {children}

      {/* FOOTER PAGE */}
      <Footer />
    </div>
  );
};

export default Layout;
