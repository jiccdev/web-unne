import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative z-10 w-100 bg-white">
      <div className="px-4 xl:px-32">
        {/* HEADER PAGE */}
        <Header />

        {/* MAIN CONTENT */}
        {children}

        {/* FOOTER PAGE */}
        <div className="mt-96">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
