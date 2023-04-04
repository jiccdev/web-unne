import React, { useState } from 'react';

const bedroomsList = [
  {
    id: 1,
    name: '1',
    selected: false,
  },
  {
    id: 2,
    name: '2',
    selected: false,
  },
  {
    id: 3,
    name: '3',
    selected: false,
  },
  {
    id: 4,
    name: '4',
    selected: false,
  },
  {
    id: 5,
    name: '5',
    selected: false,
  },
  {
    id: 6,
    name: '6',
    selected: false,
  },
];

const bathroomsList = [
  {
    id: 1,
    name: '1',
    selected: false,
  },
  {
    id: 2,
    name: '2',
    selected: false,
  },
  {
    id: 3,
    name: '3',
    selected: false,
  },
  {
    id: 4,
    name: '4',
    selected: false,
  },
  {
    id: 5,
    name: '5',
    selected: false,
  },
  {
    id: 6,
    name: '6',
    selected: false,
  },
];

const PropertyData = ({ formData, setFormData }) => {
  const [bedrooms, setBedrooms] = useState(bedroomsList);
  const [bathrooms, setBathrooms] = useState(bathroomsList);

  const handleSelectBedroom = (id) => {
    const newBedrooms = bedrooms.map((bedroom) => {
      if (bedroom.id === id) {
        return {
          ...bedroom,
          selected: true,
        };
      } else {
        return {
          ...bedroom,
          selected: false,
        };
      }
    });
    setBedrooms(newBedrooms);
  };

  const handleSelectBathroom = (id) => {
    const newBathrooms = bathrooms.map((bathroom) => {
      if (bathroom.id === id) {
        return {
          ...bathroom,
          selected: true,
        };
      } else {
        return {
          ...bathroom,
          selected: false,
        };
      }
    });
    setBathrooms(newBathrooms);
  };

  /** Handle Form Data inputs */
  /** Update Property Type */
  const handlePropertyType = (ev) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        propertyType: ev.target.value,
      },
    });
  };

  /** Update Bedrooms */
  const handleBedrooms = (bedroomId) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        bedrooms: bedroomId,
      },
    });
  };

  /** Update Bathrooms */
  const handleBathrooms = (bathroomId) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        bathrooms: bathroomId,
      },
    });
  };

  /** Update SurfaceM2 */
  const handleSurfaceM2 = (surfaceM2) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        surfaceM2: Number(surfaceM2),
      },
    });
  };

  /** Update Common Expenses */
  const handleCommonExpenses = (commonExpenses) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        commonExpenses: Number(commonExpenses),
      },
    });
  };

  /** Update Parking Lots */
  const handleParkingLots = (parkingLots) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        parkingLots: Number(parkingLots),
      },
    });
  };

  /** Update Have warehouse */
  const handleHaveWarehouse = (haveWarehouse) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        haveWarehouse: haveWarehouse,
      },
    });
  };

  console.log('FormData', formData);

  return (
    <div className="w-full">
      <div>
        <h1 className="text-xl xl:text-3xl font-bold text-gray-700">
          Atributos de la Propiedad
        </h1>
      </div>

      <form className="w-full">
        <div className="w-full xl:w-3/6 my-5">
          <label className="text-gray-500 font-bold">Tipo de Propiedad</label>
          <select
            className="select select-ghost mt-3 bg-white w-full rounded-full border-gray-300"
            placeholder="Tipo de Propiedad"
            value={formData?.propertyData?.propertyType}
            onChange={handlePropertyType}
          >
            <option>Tipo de Propiedad</option>
            <option value="tipo1">Tipo 1</option>
            <option value="tipo2">Tipo 2</option>
            <option value="tipo3">Tipo 3</option>
          </select>
        </div>

        <div className="w-full xl:w-3/6 my-5">
          <label className="text-gray-500 font-bold">
            Numero de dormitorios
          </label>
          <div className="flex mt-3">
            {bedrooms.length > 0 &&
              bedrooms.map((bedroom) => (
                <div
                  key={bedroom.id}
                  className={`${
                    bedroom.selected ? 'bg-orange-500 text-white' : 'bg-white'
                  } w-10 h-10 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl mr-3 cursor-pointer`}
                  onClick={() => {
                    handleSelectBedroom(bedroom.id);
                    handleBedrooms(bedroom.id);
                  }}
                >
                  {bedroom.name}
                </div>
              ))}
          </div>
        </div>

        <div className="w-full xl:w-3/6 my-5">
          <label className="text-gray-500 font-bold">Numero de baños</label>
          <div className="flex mt-3">
            {bathrooms.length > 0 &&
              bathrooms.map((bathroom) => (
                <div
                  key={bathroom.id}
                  className={`${
                    bathroom.selected ? 'bg-orange-500 text-white' : 'bg-white'
                  } w-10 h-10 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl mr-3 cursor-pointer`}
                  onClick={() => {
                    handleSelectBathroom(bathroom.id);
                    handleBathrooms(bathroom.id);
                  }}
                >
                  {bathroom.name}
                </div>
              ))}
          </div>
        </div>

        <div className="w-full xl:w-3/6 my-5">
          <label className="text-gray-500 font-bold">
            Superficie total en m2 (estimada)
          </label>
          <div className="flex mt-3">
            <input
              className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
              type="number"
              placeholder="62 m2"
              name="surfaceM2"
              value={formData?.propertyData?.surfaceM2}
              onChange={(ev) => handleSurfaceM2(ev.target.value)}
            />
          </div>
        </div>

        <div className="w-full xl:w-3/6 my-5">
          <label className="text-gray-500 font-bold">Gastos Comunes</label>
          <div className="flex mt-3">
            <input
              className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
              type="number"
              placeholder="$62.000"
              name="surfaceM2"
              value={formData?.propertyData?.commonExpenses}
              onChange={(ev) => handleCommonExpenses(ev.target.value)}
            />
          </div>
        </div>

        <div className="w-full mt-5 flex items-center justify-start">
          <div>
            <label className="text-gray-500 font-bold">Estacionamientos</label>
            <div className="flex mt-3">
              <input
                className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
                type="text"
                placeholder="1"
                name="parkingLots"
                value={formData?.propertyData?.parkingLots}
                onChange={(ev) => handleParkingLots(ev.target.value)}
              />
            </div>
          </div>

          <div className="w-1/6 xl:w-2/6 mx-auto mt-10">
            <input
              className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-gray-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-gray-400 dark:checked:border-orange-500 dark:checked:bg-orange-500"
              type="checkbox"
              id="checkboxTerms"
              value={formData?.propertyData?.haveWarehouse}
              onChange={(ev) => handleHaveWarehouse(ev.target.checked)}
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer text-gray-500 font-bold"
              htmlFor="checkboxTerms"
            >
              Bodega
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertyData;