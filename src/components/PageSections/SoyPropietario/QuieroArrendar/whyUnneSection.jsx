import React from 'react'

const whyUnneSection = ({ data }) => {
    const { title, benefits } = data;
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <div className='py-5 xl:max-w-lg'>
                <h5 className='text-3xl xl:text-4xl font-bold'>
                    {title}
                </h5>
                <ul className="py-1 flex justify-center flex-col font-semibold">
                    {benefits &&
                        benefits.map((benefit, idx) => (
                            <li
                                key={idx}
                                className="mx-6 xl:mx-14 py-1 list-disc"
                            >
                                {benefit}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default whyUnneSection
