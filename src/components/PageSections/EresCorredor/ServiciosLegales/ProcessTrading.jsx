import React from 'react'

const ProcessTrading = ({ data }) => {
    const { id, title, doc, uf, process } = data;
    return (
        <div className='cursor-default'>
            <div className='flex justify-center items-center gap-5 flex-wrap'>
                <div className='max-w-xs text-center'>
                    <h2 className='text-3xl font-bold'>{title}</h2>
                    <p className='text-lg'>{doc}</p>
                </div>
                <div className=''>
                    <ul className="py-1 flex justify-center flex-col font-semibold max-w-[550px]">
                        {process &&
                            process.map((process, idx) => (
                                <li
                                    key={idx}
                                    className='before:content-[""] before:w-2 before:h-4 before:border-r-2 before:border-b-2 before:border-orange-400
                                before:-left-4 before:relative before:inline-block before:rotate-45
                                flex pb-1 ml-7'
                                >
                                    {process}
                                </li>
                            ))}
                    </ul>
                </div>
                <div className=''>
                    <h2 className='text-4xl font-bold text-orange-500'>UF. {uf}</h2>
                </div>
            </div>
            

        </div>
    )
}

export default ProcessTrading
