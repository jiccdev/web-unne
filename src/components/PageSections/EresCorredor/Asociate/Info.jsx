import React from 'react'

const Info = ({data}) => {
    const { title, children } = data;
    return (
        <div>
            <h2 className='pb-3 text-orange-500 text-3xl md:text-5xl font-bold'>{title}</h2>

            <ul className="">
                {children?.map(({ id, name, status }) => (
                    <li key={id} className="py-2 font-semibold list-none">
                        - {name} {status && 
                        (<span className='animate-heart text-white text-xs
                         bg-orange-500 rounded-full mx-1 px-2 uppercase inline-block'> {status}</span>)}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Info
