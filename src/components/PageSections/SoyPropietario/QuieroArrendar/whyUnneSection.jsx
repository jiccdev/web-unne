import React from 'react'
import WhyUnneList from './WhyUnneList';

const whyUnneSection = ({ data }) => {
    const { title, benefits } = data;
    return (
        <div className='flex justify-center items-center flex-col'>
            <h3 className='my-10 text-center text-4xl md:text-5xl font-bold'>{title}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl'>
                {benefits &&
                    benefits.map((benefit, idx) => (
                        <WhyUnneList key={idx} data={benefit}></WhyUnneList>
                    ))}
            </div>
        </div>
    )
}

export default whyUnneSection
