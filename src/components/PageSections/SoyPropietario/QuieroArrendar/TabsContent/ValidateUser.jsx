import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ToastComponent from '@/components/Toastify/ToastifyComponent';
import Button from '@/components/Button/Button';
import { toast } from 'react-toastify';
import { useValue } from '@/context/ContextProvider';

function ValidateUser({ formData, setFormData }) {
  const { state } = useValue();
  const form = useRef();
  const formToEjecutive = useRef();

  const [inputValues, setInputValues] = useState(formData.validateUser);
  const [verificationCode, setVerificationCode] = useState('');
  const [isValidEmailCode, setIsValidEmailCode] = useState('');

  const handleInputChange = (event, index) => {
    const newValues = [...inputValues];
    newValues[index] = event.target.value;
    setInputValues(newValues);
    setFormData({
      ...formData,
      validateUser: newValues,
    });
    if (index < 3 && event.target.value !== '') {
      document.getElementById(`input-${index + 1}`).focus();
    }
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

  const handleVerificationCode = () => {
    const validationCodeString = `${inputValues[0]}${inputValues[1]}${inputValues[2]}${inputValues[3]}`;
    const isValidCode = validationCodeString === state?.verificationCode?.code;
    return isValidCode;
  };

  // console.log('Is valid', handleVerificationCode());

  const validateVerificationCode = (ev) => {
    ev.preventDefault();

    handleVerificationCode()
      ? showToastSuccessMsg(`Verificacion realizada con exito`)
      : showToastErrorMsg('Codigo no valido');
  };

  const sendForm = async (ev) => {
    ev.preventDefault();

    // OUTLOOK
    const serviceId = 'service_qcvmtdr';
    const templateId = 'template_jm043df';
    const apiKey = process.env.NEXT_PUBLIC_API_KEY_EMAILJS;

    try {
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        formToEjecutive.current,
        apiKey
      );

      const responseStatus = await response;
      responseStatus.status === 200 &&
        showToastSuccessMsg(`Solicitud enviada correctamente`);
      console.log('enviado');
    } catch (error) {
      showToastErrorMsg('Ha ocurrido un error al enviar la solicitud');
    }
  };

  return (
    <div className="w-full xl:w-4/6 mx-auto my-14">
      <ToastComponent />
      <h3 className="text-2xl xl:text-4xl font-bold text-center mb-5">
        Excelente! Solo falta validar tu teléfono!
      </h3>
      <form ref={form} onSubmit={validateVerificationCode}>
        <div className="grid grid-cols-4 g-0">
          <div className="p-2.5 xl:p-1.5 mx-auto w-full flex justify-center items-center">
            <input
              type="text"
              id="input-0"
              value={inputValues[0]}
              onChange={(event) => handleInputChange(event, 0)}
              autoFocus
              className="w-full py-4 xl:py-8 text-center text-xl xl:text-3xl bg-white rounded-2xl border-gray-300 outline-none focus:outline-none"
            />
          </div>

          <div className="p-2.5 xl:p-1.5 mx-auto w-full flex justify-center items-center">
            <input
              type="text"
              id="input-1"
              value={inputValues[1]}
              onChange={(event) => handleInputChange(event, 1)}
              className="w-full py-4 xl:py-8 text-center text-xl xl:text-3xl bg-white rounded-2xl border-gray-300 outline-none focus:outline-none"
            />
          </div>

          <div className="p-2.5 xl:p-1.5 mx-auto w-full flex justify-center items-center">
            <input
              type="text"
              id="input-2"
              value={inputValues[2]}
              onChange={(event) => handleInputChange(event, 2)}
              className="w-full py-4 xl:py-8 text-center text-xl xl:text-3xl bg-white rounded-2xl border-gray-300 outline-none focus:outline-none"
            />
          </div>

          <div className="p-2.5 xl:p-1.5 mx-auto w-full flex justify-center items-center">
            <input
              type="text"
              id="input-3"
              value={inputValues[3]}
              onChange={(event) => handleInputChange(event, 3)}
              className="w-full py-4 xl:py-8 text-center text-xl xl:text-3xl bg-white rounded-2xl border-gray-300 outline-none focus:outline-none"
            />
          </div>
        </div>

        <div className="w-full mx-auto flex justify-center my-10">
          <Button
            type="submit"
            id="submit-button"
            className="bg-orange-500 w-4/6 text-white text-2xl text-center rounded-full py-1 pb-2 px-4 hover:bg-orange-600"
          >
            Validar código
          </Button>
        </div>
      </form>

      <form ref={formToEjecutive} onSubmit={sendForm}>
        <div className="w-full mx-auto flex justify-center my-10">
          
          
          {/* SENDING HIDDEN DATA */}

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

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData?.personalData?.email}
              onChange={()=>{formData?.personalData?.email}}
            />
          </div>

          <Button
            type="submit"
            id="submit-button"
            className="bg-orange-500 w-4/6 text-white text-2xl text-center rounded-full py-1 pb-2 px-4 hover:bg-orange-600"
          >
            Enviar a Solicitud
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ValidateUser;
