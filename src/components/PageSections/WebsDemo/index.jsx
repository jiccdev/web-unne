import React from 'react';
import SplideCarousel from '@/components/SplideCarousel/SplideCarousel';
import { useState } from 'react';
import SplideSlideComponent from '@/components/SplideCarousel/SplideSlide';
import { demosBasicData } from '@/data';

const WebsDemoComponent = () => {
  const [selectedDemos, setSelectedDemos] = useState([]);

  return (
    <div>
      <section className="px-4 my-14 md:my-16 xl:my-28 xl:px-32">
        <SplideCarousel
          data={demosBasicData}
          RenderedComponent={SplideSlideComponent}
          selectedDemos={selectedDemos}
          setSelectedDemos={setSelectedDemos}
        />
      </section>
    </div>
  );
};

export default WebsDemoComponent;
