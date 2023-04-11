import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ToastComponent from '@/components/Toastify/ToastifyComponent';
import Button from '@/components/Button/Button';
import { toast } from 'react-toastify';
import { useValue } from '@/context/ContextProvider';

function ValidateUser({ formData, setFormData }) {
  const { state } = useValue();
  const form = useRef();
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

  console.log('Is valid', handleVerificationCode());

  const sendEmail = async (event) => {
    event.preventDefault();
    const service_id = 'service_aak4cxa';

    try {
      if (handleVerificationCode()) {
        const response = emailjs.sendForm(
          service_id,
          'template_jm043df',
          form.current,
          'wXqVGHSMVQRyuvyJK'
        );

        const responseStatus = await response;
        responseStatus.status === 200 &&
          showToastSuccessMsg(
            `Revise el correo ${formData.personalData?.email}`
          );
      }
    } catch (error) {
      showToastErrorMsg('Todos los campos son obligatorios');
      console.log('El código de verificación no coincide');
    }

    // aca la logica del formulario de personal data
    console.log('Formulario enviado con éxito');
  };

  return (
    <div className="w-full xl:w-4/6 mx-auto my-14">
      <h3 className="text-2xl xl:text-4xl font-bold text-center mb-5">
        Excelente! Solo falta validar tu teléfono!
      </h3>
      <form onSubmit={sendEmail}>
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
      {/* <div>
        <p>Código de verificación:</p>
        <p>{verificationCode}</p>
        <button onClick={handleCodeGeneration}>Generar código</button>
      </div> */}
    </div>
  );
}

export default ValidateUser;
