import ContactForm from '@/components/Form/ContactForm'
import React from 'react'
import Info from './Info'

import { AssociateData } from '../../../../data/index';
import { Fade } from 'react-awesome-reveal';

const MainInformation = () => {

    const DataEmailJS = [
        {
            ServiceID: "service_j0tf7sp",
            TemplateID: "template_6amoogk",
            PublicKEY: "ZWanVNmLr-iX_Op5K",
        },
    ];

    return (
        <div className='xl:mx-10 2xl:mx-48'>

            <div className='grid grid-cols-1 xl:grid-cols-3'>

                <div className='xl:col-start-1 xl:col-end-3 py-5 px-4 sm:pl-20'>
                    <Fade direction='left' delay={200} cascade>
                        {AssociateData?.length > 0 && AssociateData?.map((e) => (<Info key={e.id} data={e} />))}
                    </Fade>
                </div>

                <Fade direction='right' delay={200} cascade>
                    <div className='px-10 w-full flex justify-center'>
                        <div className='max-w-2xl'>
                        {DataEmailJS?.length > 0 && DataEmailJS?.map((e) => (<ContactForm key={e.ServiceID} title="Comienza tu experiencia en Unne" DataEmail={e}/>))}
                            
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default MainInformation
