import React from 'react';
import { PortalData } from '../../../../data/index';
import ReactSlickComponent from '@/components/Carousel/ReactSlickComponent';
import ImgCarouselCard from '@/components/Card/ImgCarouselCard';

const Banner = () => {

  const titleFont = 'text-4xl';

  return (
    <div className="">
      <div className="flex justify-center my-10 text-center">
        <h2 className={`${titleFont} font-semibold`}>
          Publicamos en los portales mas importantes del pais
        </h2>
      </div>
      <div className="px-4 xl:px-32 2xl:px-48">
        <ReactSlickComponent
          RenderComponent={ImgCarouselCard}
          data={PortalData}
          slidesToShow={3}
          xl={1}
        />
      </div>
    </div>
  );
};

export default Banner;
