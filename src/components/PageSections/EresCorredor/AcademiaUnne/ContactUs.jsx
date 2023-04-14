import React from 'react';
import Contact from '@/components/Form/Contact';
import styles from '../../../../styles/components/ContactUsStyles/Social.module.css'
import { iconsList } from '@/components/Icons';
import ContainerSimple from './ComponentsAcademy/ContainerSimple';
import { Fade } from 'react-awesome-reveal';
import MapHome from '@/components/Maps/MapHome';


const ContactUs = () => {

  const {
    BsFacebook,
    BsInstagram,
    BsYoutube
  } = iconsList;



  return (
    <Fade delay={300} direction='left'>
      <div className="2xl:mx-60 my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div className="flex flex-col">
            <Contact />
          </div>

          <div className="flex flex-col">
            <div className="w-full h-96 pt-8 pl-12 pr-12">

              <MapHome />
            </div>

            <div className="flex flex-col justify-center items-center pt-20">
              <div className="bg-white  rounded-md overflow-hidden">
                <div className="p-4">
                  <ContainerSimple title='Horario de atención:' desc='De Lunes a Viernes 08:30 am a 18:00hrs.' />
                  <ContainerSimple title='Dirección:' desc='Asturias 171, Of. 101, Las Condes, Santiago.' />
                  <ContainerSimple title='Teléfono' desc='+56264653732' />
                  <ContainerSimple title='Correo' desc='contacto@unne.cl' />

                  <div className={`${styles.card} rounded-lg`}>
                    <span className={`${styles.span}`}>Redes</span>

                    <a className={`${styles.social} hover:animate-bounce2`}>
                      <BsFacebook color='#0F8EF2 ' />
                    </a>

                    <a href='https://www.instagram.com/unne.cl/?hl=es' target='_blank' className={`${styles.social} hover:animate-bounce2`}>
                      <BsInstagram color='#FB00AD' />
                    </a>

                    <a className={`${styles.social} hover:animate-bounce2 `}>
                      <BsYoutube color='#ff0000' />
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>

  );
};
export default ContactUs;
