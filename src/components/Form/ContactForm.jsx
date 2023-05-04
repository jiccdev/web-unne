import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { iconsList } from '../Icons';
import Button from '../Button/Button';
import emailjs from '@emailjs/browser';
import ToastComponent from '@/components/Toastify/ToastifyComponent';
import { toast } from 'react-toastify';

const ContactForm = ({ title, subtitle, DataEmail }) => {

  const { FaUserAlt, BsFillTelephoneFill, FiMail } = iconsList;

  const [termsCheck, setTermsCheck] = useState(false);

  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  /** Handle Form Data inputs */
  /** Update Name */
  const handleName = (name) => {
    setFormData({
      ...formData,
      name: name,
    });
  };
  /** Update Email */
  const handleEmail = (email) => {
    setFormData({
      ...formData,
      email: email,
    });
  };

  /** Update Phone */
  const handlePhone = (phone) => {
    setFormData({
      ...formData,
      phone: phone,
    });
  };
  
  /** Update CHECKBOX */
  const handleVerification = event => {
    if (event.target.checked) {
      setTermsCheck(false);
      /* console.log('✅ Checkbox is checked'); */
    } else {
      setTermsCheck(true);
      /* console.log('⛔️ Checkbox is NOT checked'); */
    }
    setTermsCheck(current => !current);
  };

  /** On toast success */
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

  /** On toast error */
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

  const form = useRef();

  const { ServiceID, TemplateID, PublicKEY } = DataEmail;

  const sendEmail = async (ev) => {
    ev.preventDefault();
      /*console.log(formData)
        console.log(termsCheck) */

    const serviceid = ServiceID;
    const templateid = TemplateID;
    const publickey = PublicKEY;

    if (!termsCheck) {
      showToastErrorMsg('Debe aceptar los terminos y condiciones');
      return;
    }

    if (
      [
        formData?.name,
        formData?.email,
        formData?.phone,
      ].includes('')
    ) {
      showToastErrorMsg('Todos los campos son obligatorios');
      return;
    }

    try {
      const response = emailjs.sendForm(
        serviceid,
        templateid,
        form.current,
        publickey
      );
      const responseStatus = await response;
      // console.log(responseStatus.status)
      responseStatus.status === 200 &&
      showToastSuccessMsg(
          `Mensaje enviado con éxito, revise el correo | ${formData.email}`
        );
      // console.log('Enviando...');

    } catch (error) {
      showToastErrorMsg('Ha ocurrido un error al enviar el formulario');
    }

  };


  return (
    <div className="bg-gray-200 rounded-[50px] p-4 my-10 xl:py-5 xl:px-10 xl:m-0">
      <ToastComponent />
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-700 py-3">{title}</h2>
        {subtitle && (
          <p className="text-md font-bold text-gray-700">{subtitle}</p>
        )}
      </div>
      <form onSubmit={sendEmail} ref={form} className="py-6">
        <div className="flex mb-5">
          <div className="w-1/5 flex justify-start items-center">
            <i className="p-4 rounded-full bg-white ml-2">
              <FaUserAlt className="text-xl text-gray-300" />
            </i>
          </div>
          <div className="w-5/6 flex justify-center items-center flex-col">
            <input
              type="text"
              placeholder="Nombre"
              name="user_name"
              id="user_name"
              className="w-full p-3 rounded-full bg-white text-lg text-gray-900 placeholder:text-gray-500 placeholder:font-bold outline-none "
              value={formData?.name}
              onChange={(ev) => handleName(ev.target.value)}
            /* {...register('name', { required: true, maxLength: 100 })} */
            />
            {/* {errors && errors.name && errors?.name?.type === 'required' && (
              <div
                className="mt-2 w-full rounded-lg bg-red-100 py-3 px-6 text-base text-red-700"
                role="alert"
              >
                Este campo es requerido
              </div>
            )} */}

          </div>
        </div>

        <div className="flex mb-5">
          <div className="w-1/5 flex justify-start items-center">
            <i className="p-4 rounded-full bg-white  ml-2">
              <BsFillTelephoneFill className="text-xl text-gray-300" />
            </i>
          </div>
          <div className="w-5/6 flex justify-center items-center flex-col">
            <input
              type="text"
              name="user_phone"
              id="user_phone"
              placeholder="Teléfono"
              className="w-full p-3 rounded-full bg-white text-lg text-gray-900 placeholder:text-gray-500 placeholder:font-bold outline-none"
              value={formData?.phone}
              onChange={(ev) => handlePhone(ev.target.value)}
              pattern="[0-9]{9}"
              maxLength="9"
            />
          </div>
        </div>

        <div className="flex mb-5">
          <div className="w-1/5 flex justify-start items-center">
            <i className="p-4 rounded-full bg-white  ml-2">
              <FiMail className="text-xl text-gray-300" />
            </i>
          </div>
          <div className="w-5/6 flex justify-center items-center flex-col">
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Correo electrónico"
              className=" w-full p-3 rounded-full bg-white text-lg text-gray-900 placeholder:text-gray-500 placeholder:font-bold outline-none"
              value={formData?.email}
              onChange={(ev) => handleEmail(ev.target.value)}
            />
          </div>
        </div>

        <div className="flex w-5/6 mx-auto my-14 mb-10">
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="outline-none relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-orange-500 dark:checked:bg-orange-500"
              type="checkbox"
              id="checkboxTerms"
              name="checkboxTerms"
              value={termsCheck}
              onChange={handleVerification}
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="checkboxTerms"
            >
              Al continuar estás aceptando los términos y condiciones y la
              política de privacidad
            </label>
          </div>
        </div>

        <div className="flex mb-5 justify-center items-center">
          <Button
            type="submit"
            className="bg-orange-500 rounded-full text-white px-2 py-1 hover:bg-orange-600"
          >
            <div className="text-xl font-medium capitalize w-5/6 mx-auto">
              Quiero que me contacten
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
