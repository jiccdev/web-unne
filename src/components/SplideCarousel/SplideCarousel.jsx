import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import Image from 'next/image';
import { demosBasicData } from '../../data';

const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterpwffrise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
  {
    name: 'ds',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
  {
    name: 'Entdsdsdserprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },

  {
    name: 'Entdsdsdrgserprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
];

const SplideCarousel = () => {
  const [selected, setSelected] = useState([]);
  console.log('SelectedItems', selected);

  const handleCheckboxChange = (e) => {
    const option = e.target.value;
    const index = selected.indexOf(option);
    if (index === -1) {
      setSelected([...selected, option]);
    } else {
      setSelected([...selected.slice(0, index), ...selected.slice(index + 1)]);
    }
  };

  return (
    <Splide
      options={{
        rewind: true,
        gap: '1rem',
        perPage: 3,
      }}
      aria-label="My Favorite Images"
    >
      {demosBasicData.map((plan) => (
        <SplideSlide>
          <div className="w-full px-4 py-16">
            <div className="flex items-center justify-center">
              <a href={plan.href} target="_blank">
                <Image src={plan.src} height={400} width={400} />
              </a>
            </div>

            <label
              key={plan.name}
              className={`${
                selected.includes(plan.name) ? 'bg-orange-500 text-white' : ''
              } flex items-center space-x-2 ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-200 relative cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`}
            >
              <input
                type="checkbox"
                value={plan.name}
                checked={selected.includes(plan.name)}
                onChange={handleCheckboxChange}
                className="h-[1.125rem] w-[1.125rem] mr-2 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-gray-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:checked:border-orange-500 dark:checked:bg-orange-500"
              />
              <span
                className={`${
                  selected.includes(plan.name) ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plan.name}
              </span>
            </label>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SplideCarousel;
