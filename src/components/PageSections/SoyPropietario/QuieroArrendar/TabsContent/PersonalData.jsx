import React from 'react';

const PersonalData = ({ formData, setFormData }) => {
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

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log('Enviando...');
  };

  console.log(formData.personalData);

  return (
    <div className="w-full">
      <div>
        <h1 className="text-xl xl:text-3xl font-bold text-gray-700">
          Datos Personales
        </h1>
      </div>

      <form onSubmit={onSubmit} className="w-full">
        <div className="w-full xl:w-6/6 my-5">
          <label className="text-gray-500 font-bold">Nombre y Apellidos</label>
          <div className="flex mt-3">
            <input
              className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
              type="text"
              placeholder="Ingres tu nombre y apellidos"
              name="name"
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
              name="name"
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
              name="phone"
              value={formData?.personalData?.phone}
              onChange={(ev) => handlePhone(ev.target.value)}
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-end my-10">
          <button
            type="submit"
            className="bg-orange-500 py-2 px-8 rounded-full text-white font-bold"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
