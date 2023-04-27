import React, { Fragment } from 'react';
import { Splide } from '@splidejs/react-splide';

const SplideCarousel = ({
  title,
  data,
  RenderedComponent,
  selectedDemos,
  setSelectedDemos,
}) => {
  const handleCheckboxChange = (e) => {
    const option = e.target.value;
    const index = selectedDemos.indexOf(option);
    if (index === -1) {
      setSelectedDemos([...selectedDemos, option]);
    } else {
      setSelectedDemos([
        ...selectedDemos.slice(0, index),
        ...selectedDemos.slice(index + 1),
      ]);
    }
  };

  return (
    <Fragment>
      <div className="uppercase border-l-4 border-orange-500 p-2">
        <h2>{title}</h2>
      </div>
      <Splide
        options={{
          rewind: true,
          gap: '1rem',
          perPage: 3,
        }}
        aria-label="demo-splide"
      >
        {data.map((demo) => (
          <RenderedComponent
            key={demo.id}
            demo={demo}
            selectedDemos={selectedDemos}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </Splide>
    </Fragment>
  );
};

export default SplideCarousel;
