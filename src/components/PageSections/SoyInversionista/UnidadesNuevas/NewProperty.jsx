import React from 'react'

const NewProperty = () => {
  return (
    <div className='py-5'>
      <div className='text-center pb-10'>
        <h3 className='text-4xl font-bold'>Es momento de invertir en tu nueva propiedad</h3>
        <p className='text-xs'>Invierte en Propiedades nuevas en blanco, verde o de entrega inmediata, para que tu activo pueda generar ganancias luego de arrendarla y con el tiempo plusvalia</p>
      </div>
      <div className='flex flex-wrap justify-center gap-12'>
        <div className="card w-56 bg-[#FEF9EA] text-black rounded-none">
          <div className="card-body items-center text-center px-6 pt-4 pb-6">
            <h2 className="card-title font-semibold">Descubre</h2>
            <p className='text-xs'>Encuentra el activo que calce mejor con tu perfil financiero</p>
          </div>
        </div>
        <div className="card w-56 bg-[#FEF9EA] text-black rounded-none">
          <div className="card-body items-center text-center px-6 pt-4 pb-6">
            <h2 className="card-title font-semibold">Simula</h2>
            <p className='text-xs'>Elige el activo inmobiliario que mas te guste y simula tu inversión de manera personalizada para proceder con la reserva de la propiedad</p>
          </div>
        </div>
        <div className="card w-56 bg-[#FEF9EA] text-black rounded-none">
          <div className="card-body items-center text-center px-6 pt-4 pb-6">
            <h2 className="card-title font-semibold">Relajate</h2>
            <p className='text-xs'>Gestionamos el crédito hipotecario, promesa de compra y escrituración por ti.</p>
          </div>
        </div>
        <div className="card w-56 bg-[#FEF9EA] text-black rounded-none">
          <div className="card-body items-center text-center px-6 pt-4 pb-6">
            <h2 className="card-title font-semibold">Gana por tu inversion</h2>
            <p className='text-xs'>Administramos el arriendo de tu propiedad para que comiences a ganar por tu inversiòn</p>
          </div>
        </div>
      </div>
      <div className="divider my-10 font-bold text-2xl
                              before:mx-2 md:before:mx-6 lg:before:mx-12 xl:before:ml-24 before:bg-black 
                              after:mx-2 md:after:mx-6 lg:after:mx-12 xl:after:mr-24 after:bg-black">
        Elige en que quieres invertir hoy
      </div>
      <div className='flex gap-5 justify-center flex-wrap'>

        <div className="card w-52 rounded-2xl border-gray-400 border-solid border">
          <div className="card-body items-center text-center py-0 pt-5">
            <h2 className="card-title">Departamentos</h2>
          </div>
          <figure><img src="https://picsum.photos/150" alt="Shoes" className='rounded-full my-5' /></figure>
        </div>
        <div className="card w-52 rounded-2xl border-gray-400 border-solid border">
          <div className="card-body items-center text-center py-0 pt-5">
            <h2 className="card-title">Estacionamientos</h2>
          </div>
          <figure><img src="https://picsum.photos/150" alt="Shoes" className='rounded-full my-5' /></figure>
        </div>
        <div className="card w-52 rounded-2xl border-gray-400 border-solid border">
          <div className="card-body items-center text-center py-0 pt-5">
            <h2 className="card-title">Bodega</h2>
          </div>
          <figure><img src="https://picsum.photos/150" alt="Shoes" className='rounded-full my-5' /></figure>
        </div>
      </div>
    </div>
  )
}

export default NewProperty
