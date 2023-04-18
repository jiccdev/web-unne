import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UnneLogo from '../../assets/img/logo/unne-logo.png';

const Logo = () => {
  return (
    <Link href="/">
      {UnneLogo && (
        <Image src={UnneLogo} alt="unne-logo" width={115} height={80} />
      )}
    </Link>
  );
};

export default Logo;
