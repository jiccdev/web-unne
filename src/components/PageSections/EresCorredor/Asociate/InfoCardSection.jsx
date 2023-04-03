import NewInfo from '@/components/Card/NewInfo'
import React from 'react'

import { AssociateCardData } from '../../../../data/index';

import { iconsList } from '../../../Icons';

const InfoCardSection = () => {

  const {
    BsFillHouseAddFill,
    BiBookOpen,
    AiTwotoneGold,
    AiOutlineShareAlt,
  } = iconsList;

  return (
    <div className='grid grid-cols-[repeat(1,250px)] sm:grid-cols-[repeat(2,250px)] xl:grid-cols-[repeat(4,250px)] place-content-center
                    gap-8'>
      {AssociateCardData?.length > 0 && AssociateCardData?.map((e) => (<NewInfo key={e.id} data={e} />))}

    </div>
  )
}

export default InfoCardSection
