import React from 'react'

const NewInfo = ({ data }) => {
    const { title, desc, children } = data;
    return (
        <div className='relative min-h-[480px] pb-14 h-full rounded-xl border-slate-200 border-solid border-2 p-3'>
            <div className='w-16 h-16 bg-black text-white'>
                Icono
            </div>
            <h2 className='text-2xl text-orange-500 font-bold'>{title}</h2>
            <p className='pb-3'>{desc}</p>
            <ul className='px-3 pt-5 font-bold tracking-tight'>
                {children?.map(({ id, name }) => (
                    <li key={id} className='py-1 
                    before:content-[""] before:w-5 before:h-10 before:border-l-2 before:border-b-2
                    before:-top-6 before:-left-2 before:relative before:inline-block
                    flex'>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
            <div className='flex justify-center mt-5 absolute bottom-2 left-9'>
                <button className="py-1 px-7 text-white bg-orange-600 border-none rounded-full hover:bg-orange-700">Mas Informacion</button>
            </div>
        </div>
    )
}

export default NewInfo
