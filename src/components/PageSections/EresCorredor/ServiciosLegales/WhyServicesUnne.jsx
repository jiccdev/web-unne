import ServicesCard from '@/components/Card/ServicesCard'
import React from 'react'
import { LegalServicesData } from '../../../../data';

const WhyServicesUnne = () => {


    return (
        <div className='mb-6'>

            {/* ¿Por que contratar servicios legales Unne? */}
            <div className='flex justify-center text-center'>
                <h2 className='text-3xl md:text-5xl font-bold'>
                    ¿Por que contratar servicios legales Unne?
                </h2>
            </div>
            <div className='flex justify-center text-center gap-7 my-8 flex-wrap'>
                {LegalServicesData?.length > 0 && LegalServicesData?.map((e) => (<ServicesCard key={e.id} data={e} />))}
            </div>

            <div className='divider'></div>
            {/* Consulta por tu asesoria */}
            <div className='flex justify-center items-end flex-wrap gap-4 xl:gap-10 text-center'>
                <h2 className='text-4xl font-bold'>Consulta por tu asesoría gratuita</h2>
                <div className='flex justify-center pb-1 pt-5 xl:pt-0'>
                    <button className="text-white px-20 bg-orange-600 border-none rounded-full hover:bg-orange-700">Aqui</button>
                </div>
            </div>
            <div className='divider'></div>

        </div>
    )
}

export default WhyServicesUnne