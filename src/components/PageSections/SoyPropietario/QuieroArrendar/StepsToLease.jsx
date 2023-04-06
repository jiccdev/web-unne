import React, { Fragment, useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import TabComponent from '@/components/Tab/TabComponent';
import PropertyData from './TabsContent/PropertyData';
import PersonalData from './TabsContent/PersonalData';
import ValidateUser from './TabsContent/ValidateUser';
import CheckedStep from './TabsContent/components/CheckedStep';
import Button from '@/components/Button/Button';

const StepsToLease = () => {
  const [isTabActive, setIsTabActive] = useState(0);
  const [bgTab1, setBgTab1] = useState('bg-orange-500 text-white');
  const [bgTab2, setBgTab2] = useState('');
  const [bgTab3, setBgTab3] = useState('');

  const [formData, setFormData] = useState({
    propertyData: {
      propertyType: '',
      bedrooms: 0,
      bathrooms: 0,
      surfaceM2: 0,
      commonExpenses: 0,
      parkingLots: 0,
      haveWarehouse: false,
    },
    personalData: {
      name: '',
      email: '',
      phone: '',
    },
    validateUser: ['', '', '', ''],
  });

  useEffect(() => {
    switch (isTabActive) {
      case 0:
        Object.values(formData.propertyData).includes(0) ||
        formData.propertyData.propertyType === ''
          ? setBgTab1('bg-orange-500 text-white')
          : setBgTab1('bg-green-500 text-white') && setIsTabActive(1);
      case 1:
        Object.values(formData.personalData).includes('')
          ? setBgTab2('bg-gray-300 text-gray-700')
          : setBgTab2('bg-green-500 text-white') && setIsTabActive(2);
      case 2:
        formData.validateUser.includes('')
          ? setBgTab3('bg-gray-300 text-gray-700')
          : setBgTab3('bg-green-500 text-white') && setIsTabActive(3);
      default:
        break;
    }
    return;
  }, [
    formData.propertyData,
    formData.personalData,
    formData.validateUser,
    bgTab1,
    bgTab2,
    bgTab3,
    isTabActive,
  ]);

  const renderTabs = () => {
    return (
      <Fragment>
        <Tab
          data-headlessui-state={isTabActive === 0 ? 'selected' : 'inactive'}
          className={`${bgTab1} rounded-tl-[25px] rounded-tr-[5px] border-2 border-white focus:bg-orange-500 focus:text-white focus:putline-none outline-none w-full py-1 xl:py-4 px-1 text-center border-t-2 font-medium text-lg border-transparent cursor-pointer`}
        >
          <span className="flex items-center text-[15px] justify-center w-full">
            {bgTab1 === 'bg-green-500 text-white' ? (
              <CheckedStep />
            ) : (
              <div class="mr-1.5 h-7 w-7 bg-transparent rounded-full border-2 border-white flex justify-center items-center">
                <span class="text-white text-lg font-semibold">1</span>
              </div>
            )}
            Datos de Propiedad
          </span>
        </Tab>

        <Tab
          data-headlessui-state="selected"
          className={`${bgTab2} border-2 border-white rounded-md focus:bg-orange-500 focus:text-white focus:putline-none outline-none w-full py-1 xl:py-4 px-1 text-center border-t-2 font-medium text-lg border-transparent cursor-pointer`}
          disabled={bgTab1 === 'bg-green-500 text-white' ? false : true}
        >
          <span className="flex items-center text-[15px] justify-center w-full">
            {bgTab2 === 'bg-green-500 text-white text' ? (
              <CheckedStep />
            ) : (
              <div class="mr-1.5 h-7 w-7 bg-transparent rounded-full border-2 border-white flex justify-center items-center">
                <span class="text-white text-lg font-semibold">2</span>
              </div>
            )}
            Datos Personales
          </span>
        </Tab>

        <Tab
          data-headlessui-state="selected"
          className={`${bgTab3} border-2 border-white rounded-md rounded-tr-[25px] focus:bg-orange-500 focus:text-white focus:putline-none outline-none w-full py-1 xl:py-4 px-1 text-center border-t-2 font-medium text-lg border-transparent cursor-pointer`}
          disabled={bgTab2 === 'bg-green-500 text-white' ? false : true}
        >
          <span className="flex items-center text-[15px] justify-center w-full">
            {bgTab3 === 'bg-green-500 text-white' ? (
              <CheckedStep />
            ) : (
              <div class="mr-1.5 h-7 w-7 bg-transparent rounded-full border-2 border-white flex justify-center items-center">
                <span class="text-white text-lg font-semibold">3</span>
              </div>
            )}
            Validación de Usuario
          </span>
        </Tab>
      </Fragment>
    );
  };

  const renderTabPanel = () => {
    return (
      <Fragment>
        <Tab.Panel>
          <PropertyData formData={formData} setFormData={setFormData} />
        </Tab.Panel>
        <Tab.Panel>
          <PersonalData formData={formData} setFormData={setFormData} />
        </Tab.Panel>
        <Tab.Panel>
          <ValidateUser formData={formData} setFormData={setFormData} />
        </Tab.Panel>
      </Fragment>
    );
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      <div className="w-full">
        <ul className="steps w-full pb-10">
          <li
            className={
              bgTab1 === 'bg-green-500 text-white'
                ? 'step step-success step-active'
                : 'step step-neutral'
            }
            data-content={bgTab1 === 'bg-green-500 text-white' ? '✓' : '1'}
          >
            Datos de propiedad
          </li>
          <li
            className={
              bgTab2 === 'bg-green-500 text-white'
                ? 'step step-success'
                : 'step step-neutral'
            }
            data-content={bgTab2 === 'bg-green-500 text-white' ? '✓' : '2'}
          >
            Datos personales
          </li>
          <li
            className={
              bgTab3 === 'bg-green-500 text-white'
                ? 'step step-success'
                : 'step step-neutral'
            }
            data-content={bgTab3 === 'bg-green-500 text-white' ? '✓' : '3'}
          >
            Validación de usuario
          </li>
        </ul>

        <div className="flex items-center justify-start">
          <span className="text-white bg-orange-500 text-center text-2xl xl:text-3xl px-5 py-2.5 rounded-full font-bold mr-2">
            1
          </span>
          <div className="flex flex-col">
            <h2 className="text-2xl xl:text-4xl font-bold text-gray-800">
              Llena el Formulario
            </h2>
            <p className="text-xl">Ingresa tu dirección</p>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <form className="py-5">
            <div>
              <input
                type="text"
                placeholder="Asturias 171, oficina 101"
                className="w-full xl:w-3/5 xl:ml-16 mx-auto bg-gray-100 text-gray-500 placeholder:text-gray-500 p-3.5 px-7 text-xl rounded-full focus:outline-none outline-none"
              />
            </div>
          </form>

          <div className="w-full xl:w-5/6 h-96 mt-5">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13321.083909707775!2d-70.585684!3d-33.416179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf182be3e047%3A0x6cd33f25cf7a92dc!2sAsturias%20171%2C%20Of.%20101%2C%207550130%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1679881853426!5m2!1ses-419!2scl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div>
        <TabComponent renderTabs={renderTabs} renderTabPanel={renderTabPanel} />
      </div>
    </div>
  );
};

export default StepsToLease;
