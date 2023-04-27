import React from 'react';
import { Splide } from '@splidejs/react-splide';

const SplideCarousel = ({
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
  );
};

export default SplideCarousel;
