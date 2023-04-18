import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

const AddCarousel = ({ data, sm, md, lg, xl }) => {
    const responsive = {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 5 },
        1920: { items: 5 },
    }; 

    return (
        <AliceCarousel
            mouseTracking
            responsive="5"
            controlsStrategy="alternate"
            autoPlayStrategy="none"
            autoPlayInterval={2500}
            animationDuration={1000}
            animationType="fadeout"
            touchTracking={false}
            disableButtonsControls
            disableDotsControls
            autoPlay
            infinite>
                {data?.map((item) => (
                <div key={item.id} className={`m-3 w-[300px]`} >
                    <Image
                        src={item.images}
                        alt="slider"
                        className="bg-center bg-no-repeat bg-cover brightness-50"
                        width="auto"
                        height="auto"/>
                </div>
            ))}
            </AliceCarousel>
    );
}

export default AddCarousel
