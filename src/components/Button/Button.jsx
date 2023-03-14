import React from 'react';
import Link from 'next/link';

const Button = ({ href, children }) => {
  const btnStyles = {
    primary:
      'py-2 px-3 rounded-full bg-blue-500 text-white uppercase font-bold text-lg bg-orange-500 hover:bg-orange-600 transition ease-in-out',
    secondary: 'p-2 rounded-full bg-gray-500 text-white',
  };

  if (!!href) {
    return (
      <Link href={href} className={`${btnStyles.primary}`}>
        {children}
      </Link>
    );
  } else {
    return <button className={`${btnStyles.secondary}`}>{children}</button>;
  }
};

export default Button;
