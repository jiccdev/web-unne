import React from 'react';
import { iconsList } from '@/components/Icons';
import { Objetives } from '@/components/Card/Objetives';

import { ObjetivesAuctionData } from '@/data';
import { Fade } from 'react-awesome-reveal';

const AuctionObjetives = () => {
  const {
    TbSquareRoundedNumber1Filled,
    TbSquareRoundedNumber2Filled,
    TbSquareRoundedNumber3Filled,
    TbSquareRoundedNumber4Filled,
  } = iconsList;

  return (

    <div className=''>
      <Fade delay={300} direction='left'>
        <div className="grid grid-cols-1 md:grid-cols-1 2xl:flex flex-row mt-20">
          <div className="flex items-center justify-center ml-8 hover:scale-110 transition duration-500">
            <h2 className="text-6xl font-bold text-black text-left pl-8">
              ¡Invertir es así de fácil!
            </h2>
          </div>

          <div className="container mx-auto pl-8 ">
            <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2 justify-center">
              {/* Section map*/}
              {ObjetivesAuctionData.length > 0
                ? ObjetivesAuctionData.map((e) => (
                  <Objetives key={e.id} data={e} />
                ))
                : null}
            </div>
          </div>
        </div>
      </Fade>



      <div className="flex flex-col justify-center items-center min-h-screen  mt-10 bg-[url('https://dummyimage.com/1920x1080/fce58a/fce58a')] ">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Te ayudamos a elegir la mejor opción de inversión para ti
        </h2>

        <h2 className="text-lg text-gray-600 mb-8 text-center">
          Déjanos tus datos y trabajaremos juntos para encontrar la mejor
          alternativa de inversión para ti.
        </h2>
        <form className="w-full max-w-md ">
          <div className="mb-8 shadow border-l-gray-600 rounded-3xl">
            <input
              className="bg-white bg-opacity-60  backdrop-filter backdrop-blur-md  shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=""
              name=""
              type=""
              placeholder="Nombre y apellidos"
            />
          </div>

          <div className="mb-8 shadow border-l-gray-600 rounded">
            <input
              className="bg-white  bg-opacity-60  backdrop-filter backdrop-blur-md  shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=""
              name=""
              type=""
              placeholder="Email"
            />
          </div>

          <div className="mb-8 shadow border-l-gray-600 rounded">
            <input
              className="bg-white  bg-opacity-60  backdrop-filter backdrop-blur-md  shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=""
              name=""
              type=""
              placeholder="Teléfono"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline hover:scale-110 hover:shadow-xl hover:cursor-pointer transition-all ease-in"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

    </div >

  );
};
export default AuctionObjetives;
