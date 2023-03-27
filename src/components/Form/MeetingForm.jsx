import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { iconsList } from '../Icons';
import Button from '../Button/Button';

const MeetingForm = ({ title, subtitle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { FaUserAlt, BsFillTelephoneFill, FiMail } = iconsList;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-200 rounded-[25px] p-4 my-10 xl:py-5 xl:px-10 xl:m-0 w-full ">{/* xl:w-3/5 */}
      <div className="text-center">
        <h2 className="text-4xl font-bold py-2">{title}</h2>
        {subtitle && (
          <p className="text-xl font-semibold text-gray-700">{subtitle}</p>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="py-6 px-4">
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-3 py-5 max-sm:divide-y-2 max-sm:divide-[#d8d8da]'>
          <div className="max-sm:py-2">
            <label htmlFor="name" className='block text-base font-semibold'>Nombre:</label>
            <input
              type="text"
              className="block w-full rounded-xl bg-slate-50 py-2 px-2"
              {...register('name', { required: true, maxLength: 100 })}
            />
            {errors && errors.name && errors?.name?.type === 'required' && (
              <div
                className="mt-2 w-full rounded-lg bg-red-100 py-2 px-6 text-base text-red-700"
                role="alert"
              >
                Este campo es requerido
              </div>
            )}
          </div>

          <div className="max-sm:py-2">
            <label htmlFor="lastname" className='block text-base font-semibold'>Apellido:</label>
            <input
              type="text"
              className="block w-full rounded-xl bg-slate-50 py-2 px-2"
              {...register('lastname', { required: true, maxLength: 100 })}
            />
            {errors && errors.lastname && errors?.lastname?.type === 'required' && (
              <div
                className="mt-2 w-full rounded-lg bg-red-100 py-2 px-6 text-base text-red-700"
                role="alert"
              >
                Este campo es requerido
              </div>
            )}
          </div>

          <div className="max-sm:py-2">
            <label htmlFor="email" className='block text-base font-semibold'>Email:</label>
            <input
              type="email"
              className="block w-full rounded-xl bg-slate-50 py-2 px-2"
              {...register('email', { required: true, maxLength: 100 })}
            />
            {errors && errors.email && errors?.email?.type === 'required' && (
              <div
                className="mt-2 w-full rounded-lg bg-red-100 py-2 px-6 text-base text-red-700"
                role="alert"
              >
                Este campo es requerido
              </div>
            )}
          </div>

          <div className="max-sm:py-2">
            <label htmlFor="phone" className='block text-base font-semibold'>Telefono:</label>
            <input
              type="number"
              className="block w-full rounded-xl bg-slate-50 py-2 px-2"
              {...register('phone', { required: true, maxLength: 100 })}
            />
            {errors && errors.phone && errors?.phone?.type === 'required' && (
              <div
                className="mt-2 w-full rounded-lg bg-red-100 py-2 px-6 text-base text-red-700"
                role="alert"
              >
                Este campo es requerido
              </div>
            )}
          </div>
          <div className="max-sm:py-2">
            <label htmlFor="date" className='block text-base font-semibold'>Fecha:</label>
            <input
              type="date"
              className="block w-full rounded-xl py-2 px-2 bg-slate-50"
              {...register('date', { required: true, maxLength: 100 })}
            />
            {errors && errors.date && errors?.date?.type === 'required' && (
              <div
                className="mt-2 w-full rounded-lg bg-red-100 py-2 px-6 text-base text-red-700"
                role="alert"
              >
                Este campo es requerido
              </div>
            )}
          </div>
          <div className="max-sm:py-2">
            <label htmlFor="tel" className='block text-base font-semibold'>Hora:</label>
            <input
              type="time"
              className="block w-full rounded-xl bg-slate-50 py-2 px-2"
              {...register('time', { required: true, maxLength: 100 })}
            />
            {errors && errors.time && errors?.time?.type === 'required' && (
              <div
                className="mt-2 w-full rounded-lg bg-red-100 py-2 px-6 text-base text-red-700"
                role="alert"
              >
                Este campo es requerido
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button
            type="submit"
            className="bg-orange-500 rounded-full text-white px-4 py-1 hover:bg-orange-600"
          >
            <div className="text-lg font-medium capitalize mx-auto">
              Agenda una reunión
            </div>
          </Button>
        </div>
      </form >
    </div >
  );
}

export default MeetingForm
