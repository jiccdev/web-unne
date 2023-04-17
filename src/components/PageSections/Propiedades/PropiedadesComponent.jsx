import React from 'react';
import PropertiesList from './components/PropertiesList';
import AdvancedSearch from './components/AdvancedSearch';

const PropiedadesComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="col-span-3 h-auto">
        <PropertiesList />
      </div>
      <div className="col-span-1">
        <AdvancedSearch />
      </div>
    </div>
  );
};

export default PropiedadesComponent;
