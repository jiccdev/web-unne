import React from 'react';
import Image from 'next/image';

const SlideCard = ({ item }) => {
  const { id, title, img } = item;

  // const bgColors = ['bg-orange-50', 'bg-yellow-50', 'bg-gray-50', 'bg-pink-50'];
  // const getRadmonColor = bgColors[Math.floor(Math.random() * bgColors.length)];

  return (
    <div
      className={` flex justify-center items-center w-[95%] mx-auto rounded-[50px] h-[500px] xl:h-[600px] cursor-pointer`}
    >
      <div className="">
        <div className="flex justify-center items-center mb-12">
          <Image
            src={img}
            alt={`avatar-${title}`}
            loader={() => img}
            className="rounded-full"
            width={130}
            height={130}
          />
        </div>

        <div className="text-center w-4/6 mx-auto">
          <p className="text-md font-semibold">{title}</p>
          <p>{id}</p>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
