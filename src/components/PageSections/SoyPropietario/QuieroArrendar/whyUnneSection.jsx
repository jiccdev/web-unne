import React from 'react'
import WhyUnneList from './WhyUnneList';

const whyUnneSection = ({ data }) => {
    const { title, benefits } = data;
    return (
        <div className='flex justify-center items-center flex-col'>
            <h3 className='my-10 text-center text-4xl md:text-5xl font-bold'>{title}</h3>
            <div className=' justify-center flex flex-wrap gap-10 max-w-6xl'>
                {benefits &&
                    benefits.map((benefit, idx) => (
                        <WhyUnneList key={idx} data={benefit}></WhyUnneList>
                    ))}
            </div>
        </div>
    )
}

export default whyUnneSection
