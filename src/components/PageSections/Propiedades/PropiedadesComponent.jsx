import React from 'react';
import PropertiesList from '../HomePage/PropertiesListSection';
import AdvancedSearch from './components/AdvancedSearch';

const PropiedadesComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="col-span-3 bg-gray-200 h-16">
        <PropertiesList />
      </div>
      <div className="col-span-1 bg-gray-400 h-16">
        <AdvancedSearch />
      </div>
    </div>
  );
};

export default PropiedadesComponent;
