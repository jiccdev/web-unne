import React, { useState, useEffect, useContext } from 'react';
import SelectsContext from '@/context/selects/SelectsContext';
import Link from 'next/link';

import RSelect from '@/components/RSelect/RSelect';
import { parkingLotsList, bedroomsList, bathroomsList } from '@/data/selects';
import { iconsList } from '@/components/Icons';

const AdvancedSearch = () => {
  const { contextData } = useContext(SelectsContext);
  const [filterSearchEntry, setFilterSearchEntry, getSelects, selects] =
    contextData;

  console.log('selects', selects);

  /** Handle Operation Type options */
  const getOperationTypeOptions = () => {
    const options = selects?.operationType?.map((type) => ({
      value: type.value,
      label: type.name,
    }));
    return options;
  };

  const onOperationTypeChange = (option) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      operationType: option?.label,
    });
  };

  /** Handle Property Type options */
  const getTypeOfPropertyOptions = () => {
    const options = selects?.typeOfProperty?.map((type) => ({
      value: type.value,
      label: type.name,
    }));
    return options;
  };

  const onTypeOfPropertyChange = (option) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      typeOfProperty: option?.label,
    });
  };

  // ===== Parking Lots =====
  // const getParkingLotsOptions = () =>
  //   parkingLotsList?.map((parkingLots) => ({
  //     value: parkingLots.value,
  //     label: parkingLots.label,
  //   }));

  // const onParkingLotsChange = (option) => {
  //   setFiltredDataValue({
  //     ...filtredDataValue,
  //     parkingLots: option?.value,
  //   });
  // };

  // ===== Bedrooms =====
  // const getBedroomsOptions = () =>
  //   bedroomsList?.map((bedroom) => ({
  //     value: bedroom.value,
  //     label: bedroom.label,
  //   }));

  // const onBedroomsChange = (option) => {
  //   setFiltredDataValue({
  //     ...filtredDataValue,
  //     bedrooms: option?.value,
  //   });
  // };

  // ===== Bathrooms =====
  // const getBathroomsOptions = () =>
  //   bathroomsList?.map((bathroom) => ({
  //     value: bathroom.value,
  //     label: bathroom.label,
  //   }));

  // const onBathroomsChange = (option) => {
  //   setFiltredDataValue({
  //     ...filtredDataValue,
  //     bathrooms: option?.value,
  //   });
  // };

  // ===== Installation type =====
  // const onInstallmentTypeChange = (option) => {
  //   setFiltredDataValue({
  //     ...filtredDataValue,
  //     installmentType: option?.label,
  //   });
  // };

  // const getInstallmentTypeOptions = () => {
  //   const filtredArr = installmentType
  //     ?.filter(
  //       (installmentType) =>
  //         installmentType.value !== 'entrega inmediata' ||
  //         installmentType.name !== 'entrega inmediata'
  //     )
  //     .map((installmentType) => ({
  //       value: installmentType.value,
  //       label: installmentType.name,
  //     }));
  //   return filtredArr;
  // };

  // ===== Regions =====
  // const getRegionOptions = () =>
  //   regions?.map((region) => ({
  //     value: region.id,
  //     label: region.name,
  //   }));

  // const onRegionsChange = (option) => {
  //   setFiltredDataValue({
  //     ...filtredDataValue,
  //     region: option?.value,
  //   });
  // };

  // ===== Communes =====
  // const getCommunesOptions = () =>
  //   communes?.map((comune) => ({
  //     value: comune.id,
  //     label: comune.name,
  //   }));

  // const onCommunesChange = (comune) => {
  //   setFiltredDataValue({
  //     ...filtredDataValue,
  //     commune: comune?.label,
  //   });
  // };

  // ===== From Price =====
  // const onPriceFromChange = (ev) => {
  //   setFiltredDataValue({
  //     ...filtredDataValue,
  //     priceFrom: Number(ev.target.value),
  //   });
  // };

  // ===== From Price Up To =====
  // const onPriceUpToChange = (ev) => {
  //   setFiltredDataValue({
  //     ...filtredDataValue,
  //     priceUpTo: Number(ev.target.value),
  //   });
  // };

  // const onSurfaceChange = (ev) => {
  //   setFiltredDataValue({
  //     ...filtredDataValue,
  //     surface: ev.target.value,
  //   });
  // };

  // useEffect(() => {
  //   getSelects();
  // }, []);

  // useEffect(() => {
  //   getCommunesByRegion(filtredDataValue?.region);
  // }, [filtredDataValue?.region]);

  const onFormSubmit = (
    statusId,
    companyId,
    operationType,
    typeOfProperty,
    region,
    commune,
    minPrice,
    maxPrice,
    coveredParkingLots,
    bedrooms,
    surfaceM2,
    bathrooms,
    installmentType
  ) => {
    // return getPropertiesOnFormSubmit(
    //   statusId,
    //   companyId,
    //   operationType,
    //   typeOfProperty,
    //   region,
    //   commune,
    //   minPrice,
    //   maxPrice,
    //   coveredParkingLots,
    //   bedrooms,
    //   surfaceM2,
    //   bathrooms,
    //   installmentType
    // );
  };

  useEffect(() => {
    getSelects();
  }, []);

  console.log(filterSearchEntry?.operationType);
  console.log(filterSearchEntry?.typeOfProperty);

  return (
    <form className="border mx-4 p-5 rounded-md bg-white">
      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Tipo de operación</label>
        <RSelect
          options={getOperationTypeOptions()}
          defaultValue={filterSearchEntry?.operationType}
          onChange={onOperationTypeChange}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Tipo de propiedad</label>
        <RSelect
          options={getTypeOfPropertyOptions()}
          defaultValue={filterSearchEntry?.typeOfProperty}
          onChange={onTypeOfPropertyChange}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Región</label>
        <RSelect
          options={getOperationTypeOptions()}
          // defaultValue={operationType[0]}
          // onChange={onOperationTypeChange}
          // className={styles.rSelect}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Comuna</label>
        <RSelect
          options={getOperationTypeOptions()}
          // defaultValue={operationType[0]}
          // onChange={onOperationTypeChange}
          // className={styles.rSelect}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Superficie</label>
        <input
          type="text"
          placeholder="100"
          className="block w-full my-2 px-3 py-1.5 rounded-md text-gray-500 focus:outline-none bg-white border border-gray-300"
        />
      </div>

      <div className="grid grid-cols-2 g-4 mb-3 mx-3">
        <div className="mr-2">
          <label className="text-sm text-gray-500">Desde</label>
          <input
            type="text"
            placeholder="Min"
            className="block w-full my-2 px-3 py-1.5 rounded-md text-gray-500 focus:outline-none bg-white border border-gray-300"
          />
        </div>
        <div className="ml-2">
          <label className="text-sm text-gray-500">Hasta</label>
          <input
            type="text"
            placeholder="Max"
            className="block w-full my-2 px-3 py-1.5 rounded-md text-gray-500 focus:outline-none bg-white border border-gray-300"
          />
        </div>
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Dormitorios</label>
        <RSelect
          options={getOperationTypeOptions()}
          // defaultValue={operationType[0]}
          // onChange={onOperationTypeChange}
          // className={styles.rSelect}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Baños</label>
        <RSelect
          options={getOperationTypeOptions()}
          // defaultValue={operationType[0]}
          // onChange={onOperationTypeChange}
          // className={styles.rSelect}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Estacionamientos</label>
        <RSelect
          options={getOperationTypeOptions()}
          // defaultValue={operationType[0]}
          // onChange={onOperationTypeChange}
          // className={styles.rSelect}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mt-9 mb-5 mx-3">
        <button
          type="submit"
          className="block w-full text-center items-center px-3 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default AdvancedSearch;
