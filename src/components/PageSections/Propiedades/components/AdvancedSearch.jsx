import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import PropertiesContext from '@/context/properties/PropertiesContext';
import SelectsContext from '@/context/selects/SelectsContext';
import RSelect from '@/components/RSelect/RSelect';
import { parkingLotsList, bedroomsList, bathroomsList } from '@/data/selects';
import { company } from '@/data/company';

const AdvancedSearch = () => {
  const { contextDataProps } = useContext(PropertiesContext);
  const { contextData } = useContext(SelectsContext);
  const [
    filterSearchEntry,
    setFilterSearchEntry,
    getSelects,
    selects,
    communes,
    getCommunesByRegion,
  ] = contextData;
  const [
    ,
    ,
    getPropertiesOnFormSubmit,
    getPropertiesByDefault,
    propertyId,
    setPropertyId,
    getPropertyById,
    property,
    setProperty,
    limit,
    metaData,
    totalItems,
    getPagination,
    getTotalItems,
    page,
    cargando,
    setCargando,
  ] = contextDataProps;
  const [operationTypeDefault, setOperationTypeDefault] = useState([]);
  const router = useRouter();

  /** Handle Operation Type options */
  const getOperationTypeOptions = () => {
    if (router.pathname === '/soy-inversionista/unidades-nuevas') {
      const filtredArr = selects?.operationType
        ?.filter(
          (operationType) =>
            operationType.value !== 'arriendo' &&
            operationType.value !== 'arriendo_temporal'
        )
        .map((operationType) => ({
          value: operationType.value,
          label: operationType.name,
        }));
      return filtredArr;
    } else {
      const filtredArr2 = selects?.operationType?.map((operationType) => ({
        value: operationType.value,
        label: operationType.name,
      }));
      return filtredArr2;
    }
    // const options = selects?.operationType?.map((type) => ({
    //   value: type.value,
    //   label: type.name,
    // }));
    // return options;
  };

  const onOperationTypeChange = (option) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      operationType: option?.label,
    });
  };

  /** Handle Property Type options */
  const getTypeOfPropertyOptions = () => {
    if (router.pathname === '/soy-inversionista/unidades-nuevas') {
      const filtredArr = selects?.typeOfProperty
        ?.filter(
          (type) =>
            type.value !== 'casa' &&
            type.value !== 'parcela' &&
            type.value !== 'terreno' &&
            type.value !== 'industrial' &&
            type.value !== 'local' &&
            type.value !== 'oficina' &&
            type.value !== 'sitio' &&
            type.value !== 'Terreno En Construccion' &&
            type.value !== 'agrícola'
        )
        .map((type) => ({
          value: type.value,
          label: type.name,
        }));
      return filtredArr;
    } else {
      const filtredArr2 = selects?.typeOfProperty?.map((type) => ({
        value: type.value,
        label: type.name,
      }));
      return filtredArr2;
    }
    // const options = selects?.typeOfProperty?.map((type) => ({
    //   value: type.value,
    //   label: type.name,
    // }));
    // return options;
  };

  const onTypeOfPropertyChange = (option) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      typeOfProperty: option?.label,
    });
  };

  /** Handle Regions options */
  const getRegionsOptions = () => {
    const options = selects?.regions?.map((region) => ({
      value: region.id,
      label: region.name,
    }));
    return options;
  };

  const onRegionChange = (option) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      region: option?.value,
    });
  };

  /** Handle Communes options */
  const getCommunesOptions = () =>
    communes?.map((comune) => ({
      value: comune.id,
      label: comune.name,
    }));

  const onCommuneChange = (comune) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      commune: comune?.label,
    });
  };

  /** Handle Surface */
  const onSurfaceChange = (ev) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      surfaceM2: ev.target.value,
    });
  };

  /** Handle Min price */
  const onMinPriceChange = (ev) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      minPrice: Number(ev.target.value),
    });
  };

  /** Handle Max price */
  const onMaxPriceChange = (ev) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      maxPrice: Number(ev.target.value),
    });
  };

  /** Handle Bedrooms options */
  const getBedroomsOptions = () =>
    bedroomsList?.map((bedroom) => ({
      value: bedroom.value,
      label: bedroom.label,
    }));

  const onBedroomChange = (option) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      bedrooms: option?.value,
    });
  };

  /** Handle Bathrooms options */
  const getBathroomsOptions = () =>
    bathroomsList?.map((bathroom) => ({
      value: bathroom.value,
      label: bathroom.label,
    }));

  const onBathroomChange = (option) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      bathrooms: option?.value,
    });
  };

  /** Handle Parking lots options */
  const getParkingLotsOptions = () =>
    parkingLotsList?.map((parkingLot) => ({
      value: parkingLot.value,
      label: parkingLot.label,
    }));

  const onParkingLotChange = (option) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      parkingLots: option?.value,
    });
  };

  const onFormSubmit = (
    statusId,
    companyId,
    operationType,
    typeOfProperty,
    region,
    commune,
    surfaceM2,
    minPrice,
    maxPrice,
    bedrooms,
    bathrooms,
    parkingLots
  ) => {
    return getPropertiesOnFormSubmit(
      statusId,
      companyId,
      operationType,
      typeOfProperty,
      region,
      commune,
      surfaceM2,
      minPrice,
      maxPrice,
      bedrooms,
      bathrooms,
      parkingLots
    );
  };

  useEffect(() => {
    getSelects();
  }, []);

  useEffect(() => {
    getCommunesByRegion(filterSearchEntry?.region);
  }, [filterSearchEntry?.region]);

  return (
    <form className="border mx-4 p-5 rounded-md bg-white">
      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Tipo de operación</label>
        <RSelect
          options={getOperationTypeOptions()}
          // defaultValue={filterSearchEntry?.operationType}
          defaultValue={{
            value: filterSearchEntry?.operationType,
            label: filterSearchEntry?.operationType,
          }}
          onChange={onOperationTypeChange}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Tipo de propiedad</label>
        <RSelect
          options={getTypeOfPropertyOptions()}
          // defaultValue={filterSearchEntry?.typeOfProperty}
          defaultValue={{
            value: filterSearchEntry?.typeOfProperty,
            label: filterSearchEntry?.typeOfProperty,
          }}
          onChange={onTypeOfPropertyChange}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Región</label>
        <RSelect
          options={getRegionsOptions()}
          defaultValue={filterSearchEntry?.region}
          onChange={onRegionChange}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Comuna</label>
        <RSelect
          options={getCommunesOptions()}
          defaultValue={filterSearchEntry?.commune}
          onChange={onCommuneChange}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Superficie</label>
        <input
          type="text"
          defaultValue={filterSearchEntry?.surfaceM2}
          onChange={onSurfaceChange}
          placeholder="100"
          className="block w-full my-2 px-3 py-1.5 rounded-md text-gray-500 focus:outline-none bg-white border border-gray-300"
        />
      </div>

      <div className="grid grid-cols-2 g-4 mb-3 mx-3">
        <div className="mr-2">
          <label className="text-sm text-gray-500">Desde</label>
          <input
            type="text"
            defaultValue={filterSearchEntry?.minPrice}
            onChange={onMinPriceChange}
            placeholder="precio minimo"
            className="block w-full my-2 px-3 py-1.5 rounded-md text-gray-500 focus:outline-none bg-white border border-gray-300"
          />
        </div>
        <div className="ml-2">
          <label className="text-sm text-gray-500">Hasta</label>
          <input
            type="text"
            defaultValue={filterSearchEntry?.maxPrice}
            onChange={onMaxPriceChange}
            placeholder="Max"
            className="block w-full my-2 px-3 py-1.5 rounded-md text-gray-500 focus:outline-none bg-white border border-gray-300"
          />
        </div>
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Dormitorios</label>
        <RSelect
          options={getBedroomsOptions()}
          defaultValue={bedroomsList[0]}
          onChange={onBedroomChange}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Baños</label>
        <RSelect
          options={getBathroomsOptions()}
          defaultValue={bathroomsList[0]}
          onChange={onBathroomChange}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mb-3 mx-3">
        <label className="text-sm text-gray-500">Estacionamientos</label>
        <RSelect
          options={getParkingLotsOptions()}
          defaultValue={parkingLotsList[0]}
          onChange={onParkingLotChange}
          placeholder="Seleccionar"
          className="my-2"
        />
      </div>

      <div className="mt-9 mb-5 mx-3">
        <button
          type="submit"
          onClick={(ev) => {
            ev.preventDefault();
            onFormSubmit(
              company.statusId,
              company.companyId,
              filterSearchEntry?.operationType,
              filterSearchEntry?.typeOfProperty,
              filterSearchEntry?.region,
              filterSearchEntry?.commune,
              filterSearchEntry?.surfaceM2,
              filterSearchEntry?.minPrice,
              filterSearchEntry?.maxPrice,
              filterSearchEntry?.bedrooms,
              filterSearchEntry?.bathrooms,
              filterSearchEntry?.parkingLots
            );
            setCargando(true);
            setTimeout(() => {
              setCargando(false);
            }, 2700);
          }}
          className="block w-full text-center items-center px-3 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
        >
          <span className="max-h-10">
            Buscar
            {/* <GoSearch /> */}
          </span>
        </button>
      </div>
    </form>
  );
};

export default AdvancedSearch;
