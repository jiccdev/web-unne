import ContactForm from '@/components/Form/ContactForm'
import React from 'react'
import Info from './Info'

import { AssociateData } from '../../../../data/index';

const MainInformation = () => {
    
    return (
        <div className='xl:mx-10 2xl:mx-48'>

        
        <div className='grid grid-cols-1 xl:grid-cols-3'>
            <div className='xl:col-start-1 xl:col-end-3 py-5 px-4 sm:pl-20'>
                {AssociateData?.length > 0 && AssociateData?.map((e) => (<Info key={e.id} data={e} />))}
            </div>
            <div className='px-10 w-full flex justify-center'>
                <div className='max-w-2xl'>
                    <ContactForm title="Comienza tu experiencia en Unne"></ContactForm>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MainInformation
