import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import RSelect from '@/components/RSelect/RSelect';
import { parkingLotsList, bedroomsList, bathroomsList } from '@/data/selects';
import { iconsList } from '@/components/Icons';

const AdvancedSearch = () => {
  const [loading, setLoading] = useState(false);
  const [filtredDataValue, setFiltredDataValue] = useState({
    operation: '',
    typeOfProperty: '',
    region: '',
    commune: '',
    surface: '',
    priceCLP: false,
    priceUF: false,
    priceFrom: 0,
    priceUpTo: 0,
    bedrooms: '',
    bathrooms: '',
    parkingLots: '',
    installmentType: '',
  });

  // ===== Operation Type =====
  const onOperationTypeChange = (option) => {
    // setFiltredDataValue({
    //   ...filtredDataValue,
    //   operation: option?.label,
    // });
  };

  const getOperationTypeOptions = () => {
    // const options = operationType.map((operationType) => ({
    //   value: operationType.value,
    //   label: operationType.name,
    // }));
    // return options;
  };

  // ===== Type of Property =====
  // const getTypeOfPropertyOptions = () =>
  //   typeOfProperty?.map((typeOfProperty) => ({
  //     value: typeOfProperty.value,
  //     label: typeOfProperty.name,
  //   }));

  // const onTypeOfPropertyChange = (option) => {
  //   setFiltredDataValue({
  //     ...filtredDataValue,
  //     typeOfProperty: option?.value,
  //   });
  // };

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
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3600);
    }
  }, [loading]);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <form>
      <div className="mb-3">
        <label className="">Tipo de operación</label>
        <RSelect
          options={getOperationTypeOptions()}
          // defaultValue={operationType[0]}
          // onChange={onOperationTypeChange}
          // className={styles.rSelect}
          placeholder="Seleccionar"
        />
      </div>
    </form>
  );
};

export default AdvancedSearch;
