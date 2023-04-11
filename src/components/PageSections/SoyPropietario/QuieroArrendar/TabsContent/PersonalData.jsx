import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ToastComponent from '@/components/Toastify/ToastifyComponent';
import { toast } from 'react-toastify';
import { useValue } from '@/context/ContextProvider';

const PersonalData = ({ formData, setFormData }) => {
  const { state, dispatch } = useValue();
  const form = useRef();

  /** Handle Form Data inputs */
  /** Update Name */
  const handleName = (name) => {
    setFormData({
      ...formData,
      personalData: {
        ...formData.personalData,
        name: name,
      },
    });
  };

  /** Update Email */
  const handleEmail = (email) => {
    setFormData({
      ...formData,
      personalData: {
        ...formData.personalData,
        email: email,
      },
    });
  };

  /** Update Phone */
  const handlePhone = (phone) => {
    setFormData({
      ...formData,
      personalData: {
        ...formData.personalData,
        phone: phone,
      },
    });
  };

  console.log('VerificaionCode', state.verificationCode.code);

  const handleVerification = () => {
    const code = [
      formData?.personalData?.name,
      formData?.personalData.email,
      formData?.personalData?.phone,
    ].join('');
    return code === state.verificationCode.code;
    // return code === verificationCode;
  };

  const handleCodeGeneration = () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    dispatch({
      type: 'UPDATE_VERIFICATION_CODE',
      payload: {
        code: code.toString(),
      },
    });
    // setVerificationCode(code.toString());
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

  const sendEmail = async (ev) => {
    ev.preventDefault();

    // EMAILJS GMAIL (workspace & client email code verification)
    const serviceId = 'service_qcvmtdr';
    const templateId = 'template_bdbxch9';
    const apiKey = process.env.NEXT_PUBLIC_API_KEY_EMAILJS;

    if (
      [
        formData?.personalData?.name,
        formData?.personalData.email,
        formData?.personalData?.phone,
      ].includes('')
    ) {
      showToastErrorMsg('Todos los campos son obligatorios');
      return;
    }

    try {
      const response = emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        apiKey
      );

      const responseStatus = await response;
      responseStatus.status === 200 &&
        showToastSuccessMsg(
          `Verifique su correo electrónico ${formData.personalData?.email}`
        );
    } catch (error) {
      showToastErrorMsg('Ha ocurrido un error al enviar el formulario');
    }
  };

  console.log(formData.personalData);

  return (
    <div className="w-full">
      <ToastComponent />

      <div>
        <h1 className="text-xl xl:text-3xl font-bold text-gray-700">
          Datos Personales
        </h1>
      </div>

      <form ref={form} onSubmit={sendEmail} className="w-full">
        <div className="w-full xl:w-6/6 my-5">
          <label className="text-gray-500 font-bold">Nombre y Apellidos</label>
          <div className="flex mt-3">
            <input
              className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
              type="text"
              placeholder="Ingres tu nombre y apellidos"
              // name="name"
              name="from_name"
              id="from_name"
              value={formData?.personalData?.name}
              onChange={(ev) => handleName(ev.target.value)}
            />
          </div>
        </div>
        <div className="w-full xl:w-6/6 my-5">
          <label className="text-gray-500 font-bold">Email</label>
          <div className="flex mt-3">
            <input
              className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
              type="email"
              placeholder="Ej: mi.correo@email.com"
              // name="name"
              name="email"
              id="email"
              value={formData?.personalData?.email}
              onChange={(ev) => handleEmail(ev.target.value)}
            />
          </div>
        </div>
        <div className="w-full xl:w-6/6 my-5">
          <label className="text-gray-500 font-bold">Teléfono</label>
          <div className="flex mt-3">
            <input
              className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
              type="phone"
              placeholder="Ej: 569 XXXXXXXX"
              // name="phone"
              name="phone"
              id="phone"
              value={formData?.personalData?.phone}
              onChange={(ev) => handlePhone(ev.target.value)}
            />
          </div>
        </div>

        <div
          style={{
            display: 'none',
          }}
        >
          <input
            type="text"
            id="verificationCode"
            name="verificationCode"
            value={state.verificationCode.code}
          />
        </div>

        <div className="w-full flex items-center justify-center my-10">
          <button
            onClick={handleCodeGeneration}
            type="submit"
            className="bg-orange-500 py-2 px-8 rounded-full text-white font-bold"
          >
            Enviar codigo de verificacion
          </button>
          <p>{state.verificationCode.code}</p>

          {/* <p>{verificationCode}</p> */}
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
