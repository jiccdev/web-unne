import React, { useState, useContext, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import Button from '@/components/Button/Button';
import { webServicesTabs } from '../../../data';
import SelectsContext from '@/context/selects/SelectsContext';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const SearchPropertiesSection = () => {
  const { contextData } = useContext(SelectsContext);
  const [
    filterSearchEntry,
    setFilterSearchEntry,
    getSelects,
    selects,
    communes,
    getCommunesByRegion,
  ] = contextData;
  const [categories, setCategories] = useState([...webServicesTabs]);

  /** Handle Operation Type options */
  const onOperationTypeChange = (category) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      operationType: category,
    });
  };

  /** Handle Property on change */
  const onTypeOfPropertyChange = (ev) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      typeOfProperty: ev.target.value,
    });
  };

  /** Handle Region on change */
  const onRegionChange = (ev) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      region: Number(ev.target.value),
    });
  };

  /** Handle Commune on change */
  const onCommuneChange = (ev) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      commune: ev.target.value,
    });
  };

  useEffect(() => {
    getSelects();
  }, []);

  useEffect(() => {
    getCommunesByRegion(filterSearchEntry?.region);
  }, [filterSearchEntry?.region]);

  console.log('formData', filterSearchEntry);

  return (
    <div className="bg-gray-100 rounded-2xl w-100 xl:w-3/5 mx-auto text-black p-4 xl:px-10">
      <form>
        <div className="grid grid-cols-1 grid-rows-1 gap-4">
          <div className="d-flex justify-start items-start pb-4">
            <Tab.Group className="m-0">
              <Tab.List className="flex space-x-1 w-100 rounded-[100px] text-black mb:16 bg-gray-200 mx-auto w-5/6 lg:w-3/6">
                {Object.values(categories).map((category) => (
                  <Tab
                    key={category}
                    onClick={() =>
                      onOperationTypeChange(category.toLocaleLowerCase())
                    }
                    className={({ selected }) =>
                      classNames(
                        'w-full text-md font-medium leading-5 rounded-[100px] text-black focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-100 focus:ring-amber-400',
                        'ring-opacity-60 ring-offset-2 focus:outline-none focus:bg-amber-400 text-black p-2',
                        selected
                          ? 'bg-amber-400 text-white p-2'
                          : 'text-gray-600'
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="mx-1">
            <select
              className="select select-ghost bg-white w-full max-w-xs rounded-full border-gray-300"
              placeholder="Tipo de Propiedad"
              value={filterSearchEntry?.typeOfProperty}
              onChange={onTypeOfPropertyChange}
            >
              {selects?.typeOfProperty?.map(({ value, name }) => (
                <option key={value} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="mx-1">
            <select
              className="select select-ghost bg-white w-full max-w-xs rounded-full border-gray-300"
              placeholder="Region"
              value={filterSearchEntry?.regions}
              onChange={onRegionChange}
            >
              {selects?.regions?.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="mx-1">
            <select
              className="select select-ghost bg-white w-full max-w-xs rounded-full border-gray-300"
              placeholder="Comuna"
              value={filterSearchEntry?.commune}
              onChange={onCommuneChange}
            >
              {communes?.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="mx-1 flex justify-center items-center">
            <Button
              type="submit"
              className="block bg-amber-400 w-full p-[.7rem] rounded-full border border-amber-300 hover:bg-amber-500"
            >
              Buscar
            </Button>
          </div>
        </div>

        <div className="my-3">
          <p className="text-black">
            Buscar por{' '}
            <span className="text-orange-500">codigo de propiedad</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SearchPropertiesSection;
