import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { iconsList } from '../Icons';
import Button from '../Button/Button';

const Contact = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm();
  const { FaUserAlt, FiMail } = iconsList;

  const onSubmit = (data) => {
    console.log(data);
  };


  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (event) => {
    setSelectedCheckbox(event.target.value);
  };

  return (
    <div className="bg-gray-200 rounded-[50px] p-4 my-10 xl:py-5 xl:px-10 xl:m-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-700 py-3">Contáctanos para más información</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="py-10">
        <div className="flex mb-5">
          <div className="w-1/5 flex justify-start items-center">
            <i className="p-2 rounded-full bg-white ml-40">
              <FaUserAlt className="text-xl text-gray-300 " />
            </i>
          </div>
          <div className="w-4/6 flex justify-center items-center flex-col">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-3 rounded-full bg-white text-lg text-gray-900 placeholder:text-gray-500 placeholder:font-bold outline-none focus:ring-4 focus:ring-slate-300"
              {...register('name', { required: true, maxLength: 100 })}
            />

            {errors && errors.name && errors?.name?.type === 'required' && (
              <div
                className="mt-2 w-full rounded-lg bg-red-100 py-3 px-6 text-base text-red-700"
                role="alert"
              >
                Este campo es requerido
              </div>
            )}
          </div>
        </div>


        <div className="flex mb-5">
          <div className="w-1/5 flex justify-start items-center">
            <i className="p-2 rounded-full bg-white  ml-40">
              <FiMail className="text-xl text-gray-300" />
            </i>
          </div>
          <div className="w-4/6 flex justify-center items-center flex-col">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 rounded-full bg-white text-lg text-gray-900 placeholder:text-gray-500 placeholder:font-bold outline-none focus:ring-4 focus:ring-slate-300"
              {...register('email', { required: true, maxLength: 100 })}
            />
            {errors && errors.email && errors?.email?.type === 'required' && (
              <div
                className="mt-2 w-full rounded-lg bg-red-100 py-3 px-6 text-base text-red-700"
                role="alert"
              >
                Este campo es requerido
              </div>
            )}
          </div>
        </div>


        <div className="flex w-5/6 mx-auto my-14 mb-10">
            <div className='w-full flex justify-center gap-10'>
                <label>
                    <input className="h-[1.125rem] w-[1.125rem] mr-2 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-orange-500 dark:checked:bg-orange-500"
                    type="checkbox"
                    value="option1"
                    checked={selectedCheckbox === "option1"}
                    onChange={handleCheckboxChange}
                    />
                    Soy inversionista
                </label>

                <label>
                    <input className="h-[1.125rem] w-[1.125rem] mr-2 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-orange-500 dark:checked:bg-orange-500"
                    type="checkbox"
                    value="option2"
                    checked={selectedCheckbox === "option2"}
                    onChange={handleCheckboxChange}
                    />
                    Soy Corredor
                </label>

                <label>
                    <input className="h-[1.125rem] w-[1.125rem] mr-2 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-orange-500 dark:checked:bg-orange-500" 
                    type="checkbox"
                    value="option3"
                    checked={selectedCheckbox === "option3"}
                    onChange={handleCheckboxChange}
                    />
                    Soy propietario
                </label>
            </div>
        </div>

        <div className="flex mb-5">
          <div className="w-1/5 flex justify-start items-center">
          </div>
          <div className="w-4/6 flex justify-center items-center flex-col">
          <textarea placeholder="Escriba su mensaje" className="textarea textarea-bordered  bg-white textarea-lg w-full h-full" ></textarea>
          </div>
        </div>      

      
        <div className="flex w-3/6 mx-auto my-14 mb-10">
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-orange-500 dark:checked:bg-orange-500"
              type="checkbox"
              id="checkboxTerms"
              {...register('terms', { required: true })}
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
            className="bg-orange-400 rounded-full text-white pl-2 pr-4 py-2 hover:bg-orange-600"
          >
            <div className="text-xl font-medium capitalize w-5/6 mx-auto text-center">
              Enviar
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
