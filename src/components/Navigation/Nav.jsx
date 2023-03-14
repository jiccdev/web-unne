import React from 'react';

const Nav = ({ children }) => {
  return (
    <nav>
      <ul className="flex">{children}</ul>
    </nav>
  );
};

export default Nav;
