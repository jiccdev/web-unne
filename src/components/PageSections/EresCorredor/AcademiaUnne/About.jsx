import React from 'react'

const About =() => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 pt-8 pb-60'>

        <div className='flex flex-col justify-center items-center'>
            <div className='pl-2 pt-8'>
                <img className="rounded-full w-80 h-80" src="https://dummyimage.com/600x560/000/fff.jpg&text=example" alt="Imagen circular" />
            </div>

            <div className='pt-20 pl-4 pb-10'>
                <h2 className="text-4xl font-bold text-black text-center">
                “Un largo camino<br/>
                se inicia con un solo paso...”</h2>
            </div>

        </div>

        <div className='flex flex-col justify-center items-center'>
            <div className='mt-8 pl-8 pr-8'>
                <h2 className="text-6xl text-orange-500 font-bold mb-4 ">¿Quiénes somos?</h2>
                <p className="text-md text-gray-700 mt-8">Unne es una plataforma de corretaje, donde los corredores puedan acceder <br/>
                a herramientas digitales que de otro modo seria difícil de acceder.<br/>
                Esperamos que estas les permitan atender a los clientes y cumplir sus<br/>
                expectativas de manera rápida, en un proceso claro y sencillo.<br/>
                Creamos Unne con la misión de poder arrendar, vender e Invertir en<br/>
                propiedades de manera informada, rápida, y segura.<br/>
                “Nuestro propósito es democratizar y profesionalizar esta industria a un <br/>
                proceso accesible y fácil, brindando información relevante en la toma de <br/>
                decisiones.”</p>

                <p className='text-md mt-4 text-black'>Pablo Ramirez</p>
                <p className='text-md text-black'>Fundador y Gerente General</p>
            </div>  


            <div className='mt-8 ml-8 mr-8 mb-8 hover:scale-110 transition duration-500'>
                <div className='max-w-xl h-50 sm:h-auto bg-orange-400 rounded-2xl overflow-hidden shadow-md'>
                    <div className='p-14 pl-10'>
                        <h2 className='text-3xl md:text-2xl text-white font-bold'>
                        ¡Los números nos avalan!
                        </h2>
                        <p className='text-sm text-white '>
                        Màs de 2.000.000 millones de visitas a nuestras publicaciones mensuales + de 300 corredores ya son parte de Unne Màs de 6.000 propiedades vigentes en cartera
                        </p>
                    </div>
                </div>
            </div>

        </div> 
    </div>
  )
}
export default About