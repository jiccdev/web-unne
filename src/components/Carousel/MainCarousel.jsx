import React, { Fragment } from 'react';
import Image from 'next/image';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const MainCarousel = ({ data }) => {
  return (
    <AwesomeSlider
      className="h-full"
      bullets={false}
      mobileTouch={true}
      organicArrows={true}
    >
      {data?.length > 0
        ? data.map((slide) => (
            <div key={slide.id}>
              <Image
                src={slide.img}
                alt="slide-1"
                className="bg-center bg-no-repeat bg-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
                <p className="text-xl text-white">{slide.desc}</p>
              </div>
            </div>
          ))
        : null}
    </AwesomeSlider>
  );
};

export default MainCarousel;

{
  /* <div>
        <Image
          src={Slide2}
          alt="slide-1"
          className="h-1/2 bg-center bg-no-repeat bg-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl font-bold text-white">Image 1</h2>
          <p className="text-xl text-white">Some text describing Image 1</p>
        </div>
      </div> */
}
