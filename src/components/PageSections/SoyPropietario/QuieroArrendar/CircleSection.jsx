import React from 'react'

const CircleSection = () => {
    return (
        <div>
            <div className="indicator w-72">
                <span className="indicator-item indicator-top indicator-start badge badge-secondary">top+start</span>
                <span className="indicator-item indicator-top indicator-end badge badge-secondary">top+end</span>
                <span className="indicator-item indicator-middle indicator-start badge badge-secondary">middle+start</span>
                <span className="indicator-item indicator-middle indicator-end badge badge-secondary">middle+end</span>
                <span className="indicator-item indicator-bottom indicator-start badge badge-secondary">bott0m+strt</span>
                <span className="indicator-item indicator-bottom indicator-end badge badge-secondary">bottom+end</span>
                <div className="grid w-72 h-32 bg-base-300 place-items-center mask mask-circle">¿Como Funciona?</div>
            </div>

            {/* NUMERO 1 */}
            <div className='h-12 w-80 bg-orange-500 flex items-center rounded-full hover:bg-sky-700'>
                <span className='bg-orange-200 h-full  rounded-full w-1/6 text-center text-4xl font-semibold'> 1</span>
                <p className='pl-4 text-white text-sm'>Llena el formulario</p>
            </div>
            {/* NUMERO 2 */}
            <div className='h-12 w-80 bg-orange-600 flex items-center rounded-full'>
                <span className='bg-orange-200 h-full  rounded-full w-1/6 text-center text-4xl font-semibold'> 2</span>
                <p className='pl-4 text-white text-sm'>Te asignamos a tu objetivo</p>
            </div>
            {/* NUMERO 3 */}
            <div className='h-12 w-80 bg-orange-500 flex items-center rounded-full'>
                <span className='bg-orange-200 h-full  rounded-full w-1/6 text-center text-4xl font-semibold'> 3</span>
                <p className='pl-4 text-white text-sm'>Evaluacion Comercial</p>
            </div>
            {/* NUMERO 4 */}
            <div className='h-12 w-80 bg-orange-600 flex items-center rounded-full'>
                <span className='bg-orange-200 h-full  rounded-full w-1/6 text-center text-4xl font-semibold'> 4</span>
                <p className='pl-4 text-white text-sm'>Definicion de estrategias</p>
            </div>
            {/* NUMERO 5 */}
            <div className='h-12 w-80 bg-orange-500 flex items-center rounded-full'>
                <span className='bg-orange-200 h-full  rounded-full w-1/6 text-center text-4xl font-semibold'> 5</span>
                <p className='pl-4 text-white text-sm'>Gestion comercial</p>
            </div>
            {/* NUMERO 6 */}
            <div className='h-12 w-80 bg-orange-600 flex items-center rounded-full'>
                <span className='bg-orange-200 h-full  rounded-full w-1/6 text-center text-4xl font-semibold'> 6</span>
                <p className='pl-4 text-white text-sm'>Arrendamos y recibe tu arriendo!</p>
            </div>

            <div className='bg-yellow-300 flex justify-center'>
                <div className='w-96 h-96 border-slate-600 border-dashed border-4 rounded-full flex justify-center items-center'>
                    <div className='w-72 h-72 border-slate-600 border-solid border-2 rounded-full flex justify-center items-center'>
                        <div className='w-60 h-60 bg-slate-600 rounded-full text-center flex justify-center items-center'>
                            <h3 className='font-medium text-2xl text-white'>¿Como Funciona?</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CircleSection
