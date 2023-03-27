import React, { Fragment, useContext, useEffect } from 'react';
import Image from 'next/image';
import AddCarousel from '@/components/Carousel/AddCarousel';
import { BankData } from '../../../../data/index';

import { ClientsContext } from '@/context/clients/ClientsContext';

const Banner = () => {
    const { contextData } = useContext(ClientsContext);
    const [clients, setClients, getClientList] = contextData;

    useEffect(() => {
        getClientList();
    }, []);

    return (
        <div>
            <div className='flex justify-center my-10 text-center'>
                <h2 className='font-semibold text-4xl'>Publicamos en los portales mas importantes del pais</h2>
            </div>
            <div className="xl:mb-40 px-4 xl:px-32 2xl:px-48">
                <AddCarousel data={BankData} sm={1} md={3} lg={5} xl={5} />
            </div>
        </div>
    )
}

export default Banner
