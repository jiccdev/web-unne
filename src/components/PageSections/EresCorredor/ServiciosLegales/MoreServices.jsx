import React from 'react'

import ListServices from '@/components/PageSections/EresCorredor/ServiciosLegales/ListServices';

import { MoreServicesData } from '../../../../data';

const MoreServices = () => {

    return (
        <div className='mx-5 lg:mx-20 2xl:mx-72 mt-72 mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-0'>
                {MoreServicesData?.length > 0 && MoreServicesData?.map((e) => (<ListServices key={e.id} data={e} />))}
            </div>
        </div>
    )
}

export default MoreServices
