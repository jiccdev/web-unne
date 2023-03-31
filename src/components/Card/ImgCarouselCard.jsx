import React from 'react';
import Image from 'next/image';

const ImgCarouselCard = ({ item }) => {
  const { id, title, img, href } = item;
  return (
    <div
      className={` flex justify-center items-center w-[95%] mx-auto rounded-[50px]`}
    >
      <div className="">
        <div className="flex justify-center items-center mb-12 cursor-pointer">
          <a href={href} target="_blank">
            <Image
              src={img}
              alt={`avatar-${title}`}
              loader={() => img}
              className=""
              width={200}
              height={150}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImgCarouselCard;
