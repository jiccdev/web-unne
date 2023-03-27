import React from 'react'
import Contact from '@/components/Form/Contact'


const ContactUs =() =>  {
  return (

    <div className='grid grid-cols-1 sm:grid-cols-2 pt-2 pr-4 pl-4 pb-8'>
        <div className='flex flex-col'>
            <Contact/> 
        </div>

            
        <div className='flex flex-col'>
           
            <div class="w-full h-96 pt-8 pl-12 pr-12">
                <iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13321.083909707775!2d-70.585684!3d-33.416179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf182be3e047%3A0x6cd33f25cf7a92dc!2sAsturias%20171%2C%20Of.%20101%2C%207550130%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1679881853426!5m2!1ses-419!2scl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
         


            <div className='flex flex-col justify-center items-center pt-20'>
                <div className="bg-white  rounded-md overflow-hidden">
                    <div className="p-4">
                        <div className="mb-4">
                            <h3 className="font-bold text-lg mb-2">Horario de atención:</h3>
                            <p className="text-gray-700">De Lunes a Viernes 08:30 am a 18:00hrs.</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold text-lg mb-2">Dirección:</h3>
                            <p className="text-gray-700">Asturias 171, Of. 101, Las Condes, Santiago.</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold text-lg mb-2">Teléfono:</h3>
                            <p className="text-gray-700">+56264653732</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold text-lg mb-2">Correo:</h3>
                            <p className="text-gray-700">contacto@unne.cl</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold text-lg mb-2">Síguenos en nuestras Redes Sociales:</h3>
                        </div>

                        <div class="flex justify-center items-center mt-8">
                            <div class="rounded-full h-12 w-12 flex justify-center items-center bg-gray-200 mr-4">
                                <img className="rounded-full" src="https://dummyimage.com/600x560/000/fff.jpg&text=example" alt="Imagen circular" />
                            </div>
                            <div class="rounded-full h-12 w-12 flex justify-center items-center bg-gray-200 mr-4">
                                <img className="rounded-full" src="https://dummyimage.com/600x560/000/fff.jpg&text=example" alt="Imagen circular" />
                            </div>
                            <div class="rounded-full h-12 w-12 flex justify-center items-center bg-gray-200 mr-4">
                                <img className="rounded-full" src="https://dummyimage.com/600x560/000/fff.jpg&text=example" alt="Imagen circular" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            
        </div>

                
    </div>
  )
}
export default ContactUs