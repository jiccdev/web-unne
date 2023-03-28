import React, { useContext, useEffect } from 'react';
import { ClientsContext } from '@/context/clients/ClientsContext';
import PartnersCard from '@/components/Card/PartnersCard';
import ReactSlickComponent from '@/components/Carousel/ReactSlickComponent';

const OurPartners = () => {
  const { contextData } = useContext(ClientsContext);
  const [clients, setClients, getClientList] = contextData;
  useEffect(() => {
    getClientList();
  }, []);

  return (
    <div className='mb-24'>
      <div className='flex flex-col items-center justify-center py-10'>
        <div className='pb-5 text-center'>
          <h2 className='font-bold text-5xl'>Nuestros asociados cuentan su experiencia Unne</h2>
        </div>
      </div>
      <div className="xl:mb-40 px-4 xl:px-32 2xl:px-48">
        <ReactSlickComponent
            RenderComponent={PartnersCard}
            data={clients}
            slidesToShow={3}
            xl={1}
          />
      </div>
    </div>
  )
}

export default OurPartners
