import React, { useState } from 'react';

function VerificationForm() {
  const [inputValues, setInputValues] = useState(['', '', '', '']);
  const [verificationCode, setVerificationCode] = useState('');

  const handleInputChange = (event, index) => {
    const newValues = [...inputValues];
    newValues[index] = event.target.value;
    setInputValues(newValues);
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="input-0"
          value={inputValues[0]}
          onChange={(event) => handleInputChange(event, 0)}
          autoFocus
        />
        <input
          type="text"
          id="input-1"
          value={inputValues[1]}
          onChange={(event) => handleInputChange(event, 1)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              document.getElementById('input-2').focus();
            }
          }}
        />
        <input
          type="text"
          id="input-2"
          value={inputValues[2]}
          onChange={(event) => handleInputChange(event, 2)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              document.getElementById('input-3').focus();
            }
          }}
        />
        <input
          type="text"
          id="input-3"
          value={inputValues[3]}
          onChange={(event) => handleInputChange(event, 3)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              document.getElementById('submit-button').click();
            }
          }}
        />
        <button type="submit" id="submit-button" onClick={handleCodeGeneration}>
          Enviardsd
        </button>
        <button type="submit" id="submit-button" onClick={handleCodeGeneration}>
          Enviar
        </button>
      </form>
      {/* <div>
        <p>Código de verificación:</p>
        <p>{verificationCode}</p>
        <button onClick={handleCodeGeneration}>Generar código</button>
      </div> */}
    </div>
  );
}
