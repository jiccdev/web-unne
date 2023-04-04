import React from 'react';
import Contact from '@/components/Form/Contact';
import styles from '../../../../styles/components/ContactUsStyles/Social.module.css'
import { iconsList } from '@/components/Icons';
import ContainerSimple from './ComponentsAcademy/ContainerSimple';

const ContactUs = () => {

  const {
    BsFacebook,
    BsInstagram,
    BsYoutube
  } = iconsList;

  return (
    <div className="2xl:mx-60 my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-2 pr-4 pl-4 pb-8">
        <div className="flex flex-col">
          <Contact />
        </div>

        <div className="flex flex-col">
          <div className="w-full h-96 pt-8 pl-12 pr-12">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13321.083909707775!2d-70.585684!3d-33.416179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf182be3e047%3A0x6cd33f25cf7a92dc!2sAsturias%20171%2C%20Of.%20101%2C%207550130%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1679881853426!5m2!1ses-419!2scl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
  );
};
export default ContactUs;
