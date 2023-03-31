import React from 'react'

const ListServices = ({ data }) => {
    const { id, title, process } = data;

    return (
        <div className='cursor-default'>
            <h2 className='text-3xl text-orange-500 font-bold'>{title}</h2>
            <ul className="py-1 flex justify-center flex-col font-semibold">
                {process &&
                    process.map((process, idx) => (
                        <li key={idx} className="mx-7 list-disc text-orange-500">
                            <p className='text-black'>{process}</p>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default ListServices
