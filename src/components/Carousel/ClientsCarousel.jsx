import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import ClientCard from '../Card/ClientCard';
import 'react-alice-carousel/lib/alice-carousel.css';

const ClientsCarousel = ({ data, sm, md, lg, xl }) => {
  const responsive = {
    0: { items: sm },
    568: { items: md },
    1024: { items: lg },
    1920: { items: xl },
  };

  return (
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlayStrategy="none"
      autoPlayInterval={2500}
      animationDuration={1000}
      animationType="fadeout"
      touchTracking={false}
      disableButtonsControls
      disableDotsControls
      autoPlay
      infinite
      items={data?.map((item, idx) => (
        <div key={idx} className="m-3">
          <ClientCard item={item} />
        </div>
      ))}
    />
  );
};

export default ClientsCarousel;
