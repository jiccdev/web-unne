import OurPartnersCarousel from '@/components/Carousel/OurPartnersCarousel';
import React, { Fragment, useContext, useEffect } from 'react';
import { ClientsContext } from '@/context/clients/ClientsContext';


const OurPartners = () => {
  const { contextData } = useContext(ClientsContext);
  const [clients, setClients, getClientList] = contextData;
  useEffect(() => {
    getClientList();
  }, []);

  return (
    <div>
      <div className='flex flex-col items-center justify-center py-10'>
        <div className='pb-5 text-center'>
          <h2 className='font-bold text-5xl'>Nuestros asociados cuentan su experiencia Unne</h2>
        </div>
      </div>
      <div className="xl:mb-40 px-4 xl:px-32 2xl:px-48">
        <OurPartnersCarousel data={clients} sm={1} md={2} lg={3} xl={3} />
      </div>
    </div>
  )
}

export default OurPartners
