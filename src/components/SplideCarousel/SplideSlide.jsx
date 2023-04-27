import React from 'react';
import Image from 'next/image';
import { SplideSlide } from '@splidejs/react-splide';

const SplideSlideComponent = ({
  demo,
  selectedDemos,
  handleCheckboxChange,
}) => {
  const { href, src, name } = demo;
  return (
    <SplideSlide>
      <div className="w-full px-4 py-5">
        <div className="flex items-center justify-center">
          <a href={href} target="_blank">
            <Image
              src={src}
              alt={`img-demo-${name}`}
              height={250}
              width={450}
              className="h-[250px] max-h-[250px] object-cover w-full rounded-xl mb-2"
            />
          </a>
        </div>

        <label
          key={name}
          className={`${
            selectedDemos.includes(name) ? 'bg-orange-500 text-white' : ''
          } flex items-center space-x-2 ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-200 relative cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`}
        >
          <input
            type="checkbox"
            value={name}
            checked={selectedDemos.includes(name)}
            onChange={handleCheckboxChange}
            className="h-[1.125rem] w-[1.125rem] mr-2 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-gray-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:checked:border-orange-500 dark:checked:bg-orange-500"
          />
          <span
            className={`${
              selectedDemos.includes(name) ? 'text-white' : 'text-gray-900'
            }`}
          >
            {name}
          </span>
        </label>
      </div>
    </SplideSlide>
  );
};

export default SplideSlideComponent;
