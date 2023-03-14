import React from 'react';
import MainNav from './MainNav';

const Header = () => {
  return (
    <header className="relative z-10 px-5 xl:px-32 border-b border-slate-100">
      <MainNav />
    </header>
  );
};

export default Header;
