import React from 'react';
import Link from 'next/link';

const Button = ({ href, type, children, className }) => {
  const btnStyles = {
    primary:
      'text-center rounded-full text-white uppercase font-bold transition ease-in-out',
  };

  if (!!href) {
    return (
      <Link href={href} className={`${className} ${btnStyles.primary}`}>
        {children}
      </Link>
    );
  } else {
    if (type === 'submit') {
      return (
        <button type="submit" className={`${className}`}>
          {children}
        </button>
      );
    } else {
      return (
        <button className={`${className} ${btnStyles.primary}`}>
          {children}
        </button>
      );
    }
  }
};

export default Button;
