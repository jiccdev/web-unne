import React from 'react'

const WhyUnneList = ({data}) => {

    const{id,name,icon} = data;

    return (
        <div className="">
            <li className=' list-none relative max-w-[45rem] pt-6 pb-2 px-8 hover:shadow-2xl shadow-xl rounded-2xl overflow-hidden bg-white min-h-[120px]
                before:content-[""] before:block before:w-full before:h-4 before:absolute before:top-0 before:left-0 before:bg-[#FAB916]'>
                <h3 className={`flex align-baseline text-lg font-bold m-0 text-[#fb923c] 
                    before:flex before:justify-center before:items-center before:flex-[0_0_auto] before:mr-4 before:w-4 
                    before:h-4 ${icon} before:p-4 before:rounded-full before:bg-[#fb923c] before:text-white`}>
                    {name}
                </h3>
            </li>
        </div>
    )
}

export default WhyUnneList
