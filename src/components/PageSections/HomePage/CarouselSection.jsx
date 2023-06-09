import React from 'react';
import MainCarousel from '../../Carousel/MainCarousel';
import { mainCarouselData } from '../../../data';

const CarouselSection = () => (
  <div className="h-[300px] xl:h-[600px]">
    <MainCarousel data={mainCarouselData} />
  </div>
);

export default CarouselSection;
