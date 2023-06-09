import { iconsList } from '@/components/Icons';
import { Objetives } from '@/components/Card/Objetives';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ObjetivesAuctionData } from '@/data';
import { Fade } from 'react-awesome-reveal';
import ToastComponent from '@/components/Toastify/ToastifyComponent';
import { toast } from 'react-toastify';

const AuctionObjetives = () => {

  /* Iconos a ocupar */
  const {
    TbSquareRoundedNumber1Filled,
    TbSquareRoundedNumber2Filled,
    TbSquareRoundedNumber3Filled,
    TbSquareRoundedNumber4Filled,
  } = iconsList;


  /* Esta es la func de el form emailjs */
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    /* console.log(formData); */

    if ([formData?.name, formData?.email, formData?.phone].includes('')) {
      showToastErrorMsg("Los campos deben ser obligatorios");
      return;
    }

    try {
      const response = emailjs.sendForm('service_56n67rp', 'template_fgk7hm7', form.current, 'VNBSmj2Aykv9fczH0');
      const responseStatus = await response;
      responseStatus.status === 200 &&
        showToastSuccessMsg("Mensaje envidado con exito, revise su correo")
    } catch (error) {
      showToastErrorMsg("Ha ocurrido un error al enviar el formulario")

    }

  };


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',

  });

  /* Update name */
  const handleName = (name) => {
    setFormData({
      ...formData,
      name: name,
    });
  };

  /* Update email */
  const handleEmail = (email) => {
    setFormData({
      ...formData,
      email: email,
    });
  };

  /* Update phone */
  const handlePhone = (phone) => {
    setFormData({
      ...formData,
      phone: phone,
    });
  };

  /* Mensajes toast*/
  /* On toast success */
  const showToastSuccessMsg = (msg) => {
    toast.success(msg, {
      position: 'bottom-center',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  /* On toast error */
  const showToastErrorMsg = (msg) => {
    toast.error(msg, {
      position: 'bottom-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };




  return (

    <div className=''>
      <Fade delay={300} direction='left'>
        <div className="grid grid-cols-1 md:grid-cols-1 2xl:flex flex-row">
          <div className="flex items-center justify-center ml-8 hover:scale-110 transition duration-500">
            <h2 className="text-6xl font-bold text-black text-left pl-8">
              ¡Invertir es así de fácil!
            </h2>
          </div>

          <div className="container mx-auto pl-8 ">
            <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2 justify-center">
              {/* Section map*/}
              {ObjetivesAuctionData.length > 0
                ? ObjetivesAuctionData.map((e) => (
                  <Objetives key={e.id} data={e} />
                ))
                : null}
            </div>
          </div>
        </div>
      </Fade>



      <div className="flex flex-col justify-center items-center min-h-screen  mt-10 bg-[url('https://dummyimage.com/1920x1080/fce58a/fce58a')] ">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Te ayudamos a elegir la mejor opción de inversión para ti
        </h2>

        <h2 className="text-lg text-gray-600 mb-8 text-center">
          Déjanos tus datos y trabajaremos juntos para encontrar la mejor
          alternativa de inversión para ti.
        </h2>

        <form className="w-full max-w-md " ref={form} onSubmit={sendEmail}>
          <div className="mb-8 shadow border-l-gray-600 rounded-3xl">
            <input
              className="bg-white bg-opacity-60  backdrop-filter backdrop-blur-md  shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user_name"
              name="user_name"
              type="text"
              placeholder="Nombre y apellidos"
              onChange={(e) => handleName(e.target.value)}
            />
          </div>

          <div className="mb-8 shadow border-l-gray-600 rounded">
            <input
              className="bg-white  bg-opacity-60  backdrop-filter backdrop-blur-md  shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user_email"
              name="user_email"
              type="email"
              placeholder="Email"
              onChange={(e) => handleEmail(e.target.value)}
            />
          </div>

          <div className="mb-8 shadow border-l-gray-600 rounded">
            <input
              className="bg-white  bg-opacity-60  backdrop-filter backdrop-blur-md  shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user_phone"
              name="user_phone"
              type="text"
              placeholder="Telefono ej: 9 11111111"
              onChange={(e) => handlePhone(e.target.value)}
              pattern="[0-9]{9}"
              maxLength="9"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline hover:scale-110 hover:shadow-xl hover:cursor-pointer transition-all ease-in"
              type="submit"
              value="Send"
            >
              Enviar
            </button>
          </div>

          <ToastComponent />

        </form>

      </div>

    </div >

  );
};
export default AuctionObjetives;
