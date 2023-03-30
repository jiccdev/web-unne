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

const PropertyData = () => {
  const [bedrooms, setBedrooms] = useState(bedroomsList);
  const [bathrooms, setBathrooms] = useState(bathroomsList);
  const [selectedBedroom, setSelectedBedroom] = useState(0);
  const [selectedBathroom, setSelectedBathroom] = useState(0);

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
    setSelectedBedroom(id);
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
    setSelectedBathroom(id);
  };

  console.log('bedrroms', selectedBedroom);
  console.log('bathrroms', selectedBathroom);

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
            defaultValue={'DEFAULT'}
            placeholder="Tipo de Propiedad"
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
                  onClick={() => handleSelectBedroom(bedroom.id)}
                >
                  {bedroom.name}
                </div>
              ))}
          </div>
        </div>

        <div className="w-full xl:w-3/6 my-5">
          <label className="text-gray-500 font-bold">
            Numero de dormitorios
          </label>
          <div className="flex mt-3">
            {bathrooms.length > 0 &&
              bathrooms.map((bathroom) => (
                <div
                  key={bathroom.id}
                  className={`${
                    bathroom.selected ? 'bg-orange-500 text-white' : 'bg-white'
                  } w-10 h-10 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl mr-3 cursor-pointer`}
                  onClick={() => handleSelectBathroom(bathroom.id)}
                >
                  {bathroom.name}
                </div>
              ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertyData;
