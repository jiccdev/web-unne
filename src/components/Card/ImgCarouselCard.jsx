import React from 'react';
import Image from 'next/image';

const ImgCarouselCard = ({ item }) => {
  const { id, title, img } = item;
  return (
    <div
      className={` flex justify-center items-center w-[95%] mx-auto rounded-[50px]  cursor-pointer`}
    >
      <div className="">
        <div className="flex justify-center items-center mb-12">
          <Image
            src={img}
            alt={`avatar-${title}`}
            loader={() => img}
            className=""
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default ImgCarouselCard;
