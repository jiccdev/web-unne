import React, { useState } from 'react';
import SelectsContext from './SelectsContext';
import SelectsServices from '@/services/SelectsServices';

const SelectsProvider = ({ children }) => {
  const [selects, setSelects] = useState([]);
  const [regions, setRegions] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [operationType, setOperationType] = useState([]);
  const [typeOfProperty, setTypeOfProperty] = useState([]);
  const [installmentType, setInstallmentType] = useState([]);
  const [errorServerMsg, setErrorServerMsg] = useState({});
  const [filterSearchEntry, setFilterSearchEntry] = useState({
    operationType: 'venta', //arriendo
    typeOfProperty: 'casa', //departamento
    region: '',
    commune: '',
    surfaceM2: '',
    minPrice: 0,
    maxPrice: 0,
    bedrooms: '',
    bathrooms: '',
    parkingLots: '',
  });

  const getSelects = async () => {
    try {
      const response = await SelectsServices.getSelects();
      const { regions, operationType, typeOfProperty, installment_type } =
        response;
      setSelects(response);
      setRegions(regions);
      setOperationType(operationType);
      setTypeOfProperty(typeOfProperty);
      setInstallmentType(installment_type);
    } catch (error) {
      setErrorServerMsg(error?.response);
    }
  };

  const getCommunesByRegion = async (stateId) => {
    try {
      const response = await SelectsServices.getCommunesByRegion(stateId);
      setCommunes(response);
    } catch (error) {
      setErrorServerMsg(error?.response);
    }
  };

  return (
    <SelectsContext.Provider
      value={{
        contextData: [
          filterSearchEntry,
          setFilterSearchEntry,
          getSelects,
          selects,
          communes,
          getCommunesByRegion,
          regions,
          communes,
          operationType,
          typeOfProperty,
          installmentType,
        ],
      }}
    >
      {children}
    </SelectsContext.Provider>
  );
};

export default SelectsProvider;
