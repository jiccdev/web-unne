import React from 'react';
import { iconsList } from '@/components/Icons';
import { Objetives } from '@/components/Card/Objetives';

import { ObjetivesAuctionData } from '@/data';

const AuctionObjetives = () => {
  const {
    TbSquareRoundedNumber1Filled,
    TbSquareRoundedNumber2Filled,
    TbSquareRoundedNumber3Filled,
    TbSquareRoundedNumber4Filled,
  } = iconsList;

  return (
    <div className="flex flex-col 2xl:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <h2 className="text-6xl font-bold text-black text-left pl-8">
          ¡Invertir es así de fácil!
        </h2>
      </div>

      <div className="container mx-auto mt-4 pl-8 w-full md:w-1/2">
        <div className="flex flex-wrap justify-end items-center">
          <div className="grid gap-2 sm:grid-cols-2 grid-cols-1 ">
            {/* Section map*/}
            {ObjetivesAuctionData.length > 0
              ? ObjetivesAuctionData.map((e) => (
                  <Objetives key={e.id} data={e} />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuctionObjetives;
