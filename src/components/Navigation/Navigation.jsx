import React from 'react';
import NavigationItem from './NavigationItem';
import { navigationData } from '../../data';

const Navigation = () => {
  return (
    <ul className="hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative p-1 rounded-full border">
      {navigationData?.length > 0
        ? navigationData.map((item) => (
            <NavigationItem key={item?.id} menuItem={item} />
          ))
        : 'not found items'}
    </ul>
  );
};

export default Navigation;
