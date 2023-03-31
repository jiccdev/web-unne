import React from 'react'
import styles from '../../../../styles/components/AcademyStyles/CardStyles.module.css'


const Capacitation =() =>  {
  return (
    <div className='mx-10 2xl:mx-60 my-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 pb-20 '>
            <div className='flex flex-col'>
                <div className='pt-12 pb-10'>
                    <h2 className='text-4xl text-orange-500 font-bold pt-5'>Capacitaciones Continuas</h2>
                    <h2 className='text-3xl text-black font-bold  pt-20 '>Academia UNNE</h2>
                    <p className='pt-4'>Para nosotros es esencial que estés preparado para los diferentes desafíos que te presenta la industria,<br/>
                    es por eso que creamos la “Academia Unne”, en donde te brindaremos charlas y cursos gratuitos para <br/>
                    que te mantengas actualizado constantemente. 
                    </p>

                    <div className='pt-12 pr-10'>
                        <img className="h-max w-max" src="https://dummyimage.com/1920x1080/000/fff.jpg&text=example" alt="" />
                    </div>
                </div>        
            </div>
        

            <div className='flex flex-col justify-center items-center'>
                <div className='pb-10'> 
                    <div className={`${styles.card} hover:shadow-2xl`}>
                        <h2 className='text-3xl text-orange-500 font-bold pt-4 p-24'>Sistemas</h2>
                        
                        <div className={`${styles.details}`}>
                            <p>Sistemas y correo electrónico</p>
                            <p>Estudios y seguimiento de las publicaciones</p>
                            <p>Guía de publicación</p>
                        </div>
                        

                    </div>

                    
                    
                  




                    <div>
                        <h2 className='text-3xl text-orange-500 font-bold pt-14'>Área Comercial</h2>
                        <p>Captación de cartera</p>
                        <p>Técnicas de ventas</p>
                        <p>Negociación, técnicas de cierre</p>
                        <p>Manejo de objeciones</p>
                        <p>Tasación</p>

                    </div>



                    <div>
                        <h2 className='text-3xl text-orange-500 font-bold  pt-14'>Área Legal</h2>
                        <p>Ley de Arrendamiento</p>
                        <p>Ley de Copropiedad</p>
                        <p>Herencias e inmuebles</p>
                        <p>FEA: ¿Qué es y para que sirve?</p>
                    </div>


                    <div className={`${styles.flipCard}`}>
                        <div className={`${styles.flipCardInner}`}>
                            <div className={`${styles.flipCardFront}`}>
                                <h2>Área Legal</h2>
                            </div>

                            <div className={`${styles.flipCardBack}`}>
                            <p>Ley de Arrendamiento</p>
                            <p>Ley de Copropiedad</p>
                            <p>Herencias e inmuebles</p>
                            <p>FEA: ¿Qué es y para que sirve?</p>
                            </div>
                        </div>
                    </div>


                    <div className={`${styles.flipCard}`}>
                        <div className={`${styles.flipCardInner}`}>
                            <div className={`${styles.flipCardFront}`}>
                                <h2>Área Legal</h2>
                            </div>

                            <div className={`${styles.flipCardBack}`}>
                            <p>Ley de Arrendamiento</p>
                            <p>Ley de Copropiedad</p>
                            <p>Herencias e inmuebles</p>
                            <p>FEA: ¿Qué es y para que sirve?</p>
                            </div>
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
    </div>
  )
} 
export default Capacitation
