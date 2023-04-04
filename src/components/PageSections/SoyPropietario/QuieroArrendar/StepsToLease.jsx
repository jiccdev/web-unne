import React, { Fragment, useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import TabComponent from '@/components/Tab/TabComponent';
import PropertyData from './TabsContent/PropertyData';
import PersonalData from './TabsContent/PersonalData';
import ValidateUser from './TabsContent/ValidateUser';
import CheckedStep from './TabsContent/components/CheckedStep';

const StepsToLease = () => {
  const [isTabActive, setIsTabActive] = useState(0);
  const [isStepCompleted, setIsStepCompleted] = useState('');
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
    validateUser: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    switch (isTabActive) {
      case 0:
        Object.values(formData.propertyData).includes(0) ||
        formData.propertyData.propertyType === ''
          ? setIsStepCompleted('bg-orange-500')
          : setIsStepCompleted('bg-green-500');
        break;
      default:
        break;
    }
    return;
  }, [formData.propertyData]);

  const renderTabs = () => {
    return (
      <Fragment>
        <Tab
          data-headlessui-state="selected"
          onClick={() => setIsTabActive(0)}
          className={`${
            isTabActive
              ? `${isStepCompleted} rounded-tl-[25px]`
              : 'text-gray-500'
          }  ${isStepCompleted} text-white rounded-tl-[25px] focus:putline-none outline-none w-full py-1 xl:py-4 px-1 text-center border-t-2 font-medium text-lg border-transparent cursor-pointer`}
        >
          <span className="flex items-center justify-center w-full">
            Datos de Propiedad
            {Object.values(formData.propertyData).includes(0) ||
            formData.propertyData.propertyType === '' ? null : (
              <CheckedStep />
            )}
          </span>
        </Tab>
        <Tab
          onClick={() => setIsTabActive(1)}
          className={`${
            isTabActive === 1
              ? `${isStepCompleted} text-white rounded-tl-[25px] focus:putline-none outline-none `
              : 'text-gray-500 hover:text-gray-700'
          } w-full py-1 xl:py-4 px-1 text-center border-t-2 font-medium text-lg border-transparent cursor-pointer`}
          // disabled={
          //   Object.values(formData.propertyData).includes(0) ||
          //   formData.propertyData.propertyType === ''
          // }
        >
          Datos personales
        </Tab>
        <Tab
          onClick={() => setIsTabActive(2)}
          className={`${
            isTabActive === 2
              ? 'text-white bg-orange-500 rounded-tr-[25px] border-l border-r focus:putline-none outline-none'
              : 'text-gray-500 hover:text-gray-700'
          } w-full py-1 xl:py-4 px-1 text-center border-t-2 font-medium text-lg border-transparent cursor-pointer`}
          // disabled={
          //   Object.values(formData.propertyData).includes(0) ||
          //   formData.propertyData.propertyType === ''
          // }
        >
          Validación de usuario
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
      <div className="">
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
