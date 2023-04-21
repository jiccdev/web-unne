import React from 'react'

const TitleSection = ({title , titleFont}) => {
  return (
    <div className='mb-10'>
        <h2 className={`${titleFont} font-bold text-center`}>{title}</h2>
    </div>
  )
}

export default TitleSection
