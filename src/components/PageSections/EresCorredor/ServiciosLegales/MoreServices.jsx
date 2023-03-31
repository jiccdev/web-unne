import React from 'react'

import ListServices from '@/components/PageSections/EresCorredor/ServiciosLegales/ListServices';

import { MoreServicesData } from '../../../../data';

const MoreServices = () => {

    function ShowSection() {
        var x = document.getElementById("MoreServices");
        if (x.style.display === "block") {
            x.style.display = "none";
            x.style.transition = "all 2s";
            
        } else {
            x.style.display = "block";
            x.style.transition = "all 2s";
            
        }
    }
    
    return (
        <div>
            <div className='flex justify-center pb-1 pt-5 mb-10'>
                <button className="text-white text-xl px-5 bg-orange-600 border-none rounded-full hover:bg-orange-700" onClick={ShowSection}>Ver más servicios</button>
            </div>
            <div id='MoreServices' className='hidden mx-5 lg:mx-20 2xl:mx-72 mt-32 mb-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-0'>
                    {MoreServicesData?.length > 0 && MoreServicesData?.map((e) => (<ListServices key={e.id} data={e} />))}
                </div>
            </div>
        </div>
    )
}

export default MoreServices
