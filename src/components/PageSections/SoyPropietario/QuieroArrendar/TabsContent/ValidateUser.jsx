import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';
import ToastComponent from '@/components/Toastify/ToastifyComponent';
import Button from '@/components/Button/Button';
import { toast } from 'react-toastify';
import { useValue } from '@/context/ContextProvider';

// ***** PROPERTYDATA FORM ***** //
import { NumericFormat } from 'react-number-format';
import {
  bedroomsList,
  bathroomsList,
  propertyTypeData,
} from '../../../../../data';

function ValidateUser({ formData, setFormData }) {
  const { state } = useValue();
  const form = useRef();
  const formToEjecutive = useRef();
  const [inputValues, setInputValues] = useState(formData.validateUser);
  const [isValidCode, setIsValidCode] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);
  const [bedrooms, setBedrooms] = useState(bedroomsList);
  const [bathrooms, setBathrooms] = useState(bathroomsList);

  const router = useRouter();

  function handleClick() {
    router.reload(); // Actualiza la página actual
  }

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
    setIsValidCode(isValidCode);
    return isValidCode;
  };

  const validateVerificationCode = (ev) => {
    ev.preventDefault();

    handleVerificationCode() || isValidCode
      ? showToastSuccessMsg(`Verificacion realizada con exito`)
      : showToastErrorMsg('Código no válido ');
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
      if (responseStatus.status === 200) {
        setResponseStatus(responseStatus.status);
        showToastSuccessMsg(`Solicitud enviada correctamente`);
      }
    } catch (error) {
      showToastErrorMsg('Ha ocurrido un error al enviar la solicitud');
    }
  };

  useEffect(() => {
    isValidCode ? setIsValidCode(true) : setIsValidCode(false);
  }, [isValidCode]);

  // ***** PROPERTYDATA FORM ***** //
  const handleSelectBedroom = (id) => {
    const newBedrooms = bedrooms.map((bedroom) => {
      if (bedroom.id === id) {
        return {
          ...bedroom,
          selected: true,
        };
      } else {
        return {
          ...bedroom,
          selected: false,
        };
      }
    });
    setBedrooms(newBedrooms);
  };

  const handleSelectBathroom = (id) => {
    const newBathrooms = bathrooms.map((bathroom) => {
      if (bathroom.id === id) {
        return {
          ...bathroom,
          selected: true,
        };
      } else {
        return {
          ...bathroom,
          selected: false,
        };
      }
    });
    setBathrooms(newBathrooms);
  };

  /** Update Property Type */
  const handlePropertyType = (ev) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        propertyType: ev.target.value,
      },
    });
  };

  /** Update Bedrooms */
  const handleBedrooms = (bedroomId) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        bedrooms: Number(bedroomId),
      },
    });
  };

  /** Update Bathrooms */
  const handleBathrooms = (bathroomId) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        bathrooms: Number(bathroomId),
      },
    });
  };

  /** Update SurfaceM2 */
  const handleSurfaceM2 = (surfaceM2) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        surfaceM2: Number(surfaceM2),
      },
    });
  };

  /** Update Common Expenses */
  const handleCommonExpenses = (ev) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        commonExpenses: parseInt(ev.target.value.replace(/\./g, '')),
      },
    });
  };

  /** Update Parking Lots */
  const handleParkingLots = (parkingLots) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        parkingLots: Number(parkingLots),
      },
    });
  };

  /** Update Have warehouse */
  const handleHaveWarehouse = (haveWarehouse) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        haveWarehouse: haveWarehouse,
      },
    });
  };

  return (
    <div className="w-full xl:w-4/6 mx-auto my-14">
      <ToastComponent />
      <h3 className="text-2xl xl:text-4xl font-bold text-center mb-5">
        ¡Excelente! Solo falta validar Tu email!
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

        {isValidCode ? null : (
          <div className="w-full mx-auto flex justify-center my-10">
            <Button
              type="submit"
              id="submit-button"
              className="bg-orange-500 hover:bg-orange-600 text-white w-4/6 text-2xl text-center rounded-full py-1 pb-2 px-4"
            >
              Validar código
            </Button>
          </div>
        )}
      </form>

      {/* SEND FORM TO REALTOR */}
      <form ref={formToEjecutive} onSubmit={sendForm}>
        <div className="w-full mx-auto justify-center my-10">
          <input
            className="hidden"
            type="text"
            name="address"
            id="address"
            defaultValue={formData.propertyData.address}
            onChange={() =>
              setFormData({
                ...formData,
                propertyData: {
                  ...formData.propertyData,
                  address: formData.propertyData.address,
                },
              })
            }
          />

          <select
            className="hidden"
            value={formData?.propertyData?.propertyType}
            onChange={handlePropertyType}
            id="propertyType"
            name="propertyType"
          >
            {propertyTypeData?.map((option) => (
              <option key={option.id} value={option?.value}>
                {option.name}
              </option>
            ))}
          </select>

          <input
            className="hidden"
            id="bedrooms"
            name="bedrooms"
            value={formData?.propertyData?.bedrooms}
            onChange={() =>
              setFormData({
                ...formData,
                propertyData: {
                  ...formData.propertyData,
                  bedrooms: formData.propertyData.bedrooms,
                },
              })
            }
          />

          <input
            className="hidden"
            id="bathrooms"
            name="bathrooms"
            value={formData?.propertyData?.bathrooms}
            onChange={() =>
              setFormData({
                ...formData,
                propertyData: {
                  ...formData.propertyData,
                  bathrooms: formData.propertyData.bathrooms,
                },
              })
            }
          />

          <input
            className="hidden"
            id="surfaceM2"
            name="surfaceM2"
            value={formData?.propertyData?.surfaceM2}
            onChange={() =>
              setFormData({
                ...formData,
                propertyData: {
                  ...formData.propertyData,
                  surfaceM2: formData.propertyData.surfaceM2,
                },
              })
            }
          />

          <input
            className="hidden"
            id="commonExpenses"
            name="commonExpenses"
            value={formData?.propertyData?.commonExpenses}
            onChange={() =>
              setFormData({
                ...formData,
                propertyData: {
                  ...formData.propertyData,
                  commonExpenses: formData.propertyData.commonExpenses,
                },
              })
            }
          />

          <input
            className="hidden"
            id="parkingLots"
            name="parkingLots"
            value={formData?.propertyData?.parkingLots}
            onChange={() =>
              setFormData({
                ...formData,
                propertyData: {
                  ...formData.propertyData,
                  parkingLots: formData.propertyData.parkingLots,
                },
              })
            }
          />

          <input
            className="hidden"
            id="haveWarehouse"
            name="haveWarehouse"
            value={formData?.propertyData?.haveWarehouse ? 'Si' : 'No'}
            onChange={() =>
              setFormData({
                ...formData,
                propertyData: {
                  ...formData.propertyData,
                  haveWarehouse: formData.propertyData.haveWarehouse,
                },
              })
            }
          />

          <input
            type="email"
            id="email"
            name="email"
            value={formData?.personalData?.email}
            onChange={() => {
              formData?.personalData?.email;
            }}
            className="hidden"
          />

          <input
            type="phone"
            id="phone"
            name="phone"
            value={formData?.personalData?.phone}
            onChange={() =>
              setFormData({
                ...formData,
                personalData: {
                  ...formData.personalData,
                  phone: formData.personalData.phone,
                },
              })
            }
            className="hidden"
          />

          {isValidCode ? (
            <Button
              type="submit"
              id="submit-button"
              className="mx-auto flex justify-center my-10 bg-orange-500 w-4/6 text-white text-2xl text-center rounded-full py-1 pb-2 px-4 hover:bg-orange-600"
            >
              Enviar Solicitud
            </Button>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default ValidateUser;
