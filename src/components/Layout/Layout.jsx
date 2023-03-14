import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative w-100 bg-white text-slate-900">
      {/* HEADER PAGE */}
      <header>Header</header>

      {/* MAIN CONTENT */}
      {children}

      {/* FOOTER PAGE */}
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
