import NewInfo from '@/components/Card/NewInfo'
import React from 'react'

import { AssociateCardData } from '../../../../data/index';

const InfoCardSection = () => {
  return (
    <div className='grid grid-cols-[repeat(1,250px)] sm:grid-cols-[repeat(2,250px)] xl:grid-cols-[repeat(4,250px)] place-content-center my-5
                    gap-8'>
      {AssociateCardData?.length > 0 && AssociateCardData?.map((e) => (<NewInfo key={e.id} data={e} />))}
    </div>
  )
}

export default InfoCardSection
