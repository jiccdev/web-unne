import React from 'react'
import Image from 'next/image';

const PartnersCard = ({item}) => {
    const { first_name, avatar, last_name, email } = item;
  
    return (
      <div className={`bg-[#FFF8DF] flex justify-center items-center w-full min-h-96 xl:min-h-[600px] cursor-pointer`}>
        <div>
          <div className="flex justify-center items-center mb-12 pt-5">
            <Image
              src={avatar}
              alt={`avatar-${first_name}`}
              loader={() => avatar}
              className="rounded-full"
              width={200}
              height={200}
            />
          </div>
  
          <div className="text-center w-4/6 mx-auto">
            <p className="text-md font-semibold">
              "En mi experiencia, encuentro que son eficientes solucionando
              cualquier problema o duda que uno tenga. cálidos y profesionales en
              su accionar. Es una Empresa 100% recomendable. Estoy muy contenta
              con su trabajo"
            </p>
          </div>
  
          <div className="text-center mt-10 pb-5 flex justify-center items-center flex-col">
            <h4 className="text-lg font-bold">
              {first_name} {last_name}
            </h4>
            <p className="text-md text-gray-700">{email}</p>
          </div>
        </div>
      </div>
    );
}

export default PartnersCard
