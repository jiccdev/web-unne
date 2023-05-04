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
    loading,
    setLoading,
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
          }}
          className="block w-full text-center items-center px-3 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
        >
          <span className="max-h-10">
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="inline w-4 h-4 mr-2 text-gray-100 animate-spin fill-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Cargando...</span>
              </div>
            ) : (
              'Buscar'
            )}
          </span>
        </button>
      </div>
    </form>
  );
};

export default AdvancedSearch;
