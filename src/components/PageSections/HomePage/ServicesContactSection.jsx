import React from 'react';
import HeadingSection from '@/components/Heading/HeadingSection';
import Button from '@/components/Button/Button';

const ServicesContactSection = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <HeadingSection title="Para mas información de nuestros servicios" />
      <Button
        href="/"
        className="w-96 p-2 text-xl xl:p-3 text-center my-6 xl:text-2xl bg-amber-400 hover:bg-amber-500 hover:shadow-md"
      >
        Contáctanos
      </Button>
    </div>
  );
};

export default ServicesContactSection;
