import React, { useState } from 'react';
import Button from '@/components/Button/Button';

function ValidateUser({ formData, setFormData }) {
  const [inputValues, setInputValues] = useState(formData.validateUser);
  const [verificationCode, setVerificationCode] = useState('');

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

  const handleVerification = () => {
    const code = inputValues.join('');
    return code === verificationCode;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleVerification()) {
      console.log('Formulario enviado con éxito');
    } else {
      console.log('El código de verificación no coincide');
    }
  };

  const handleCodeGeneration = () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    setVerificationCode(code.toString());
  };

  return (
    <div className="w-full xl:w-4/6 mx-auto my-14">
      <h3 className="text-2xl xl:text-4xl font-bold text-center mb-5">
        Excelente! Solo falta validar tu teléfono!
      </h3>
      <form onSubmit={handleSubmit}>
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
