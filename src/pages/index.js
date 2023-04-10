import React, { Fragment } from 'react';

/** Components */
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import CarouselSection from '@/components/PageSections/HomePage/CarouselSection';
import SearchProperties from '@/components/PageSections/HomePage/SearchPropertiesSection';
import ServicesContactSection from '@/components/PageSections/HomePage/ServicesContactSection';
import About from '@/components/PageSections/EresCorredor/AcademiaUnne/About';
import ContactUs from '@/components/PageSections/EresCorredor/AcademiaUnne/ContactUs';

const Home = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Inicio</title>
      </HeadPage>

      <Layout>
        <section>
          <CarouselSection />
        </section>

        <section className="my-10 px-4 xl:px-32">
          <SearchProperties />
        </section>

        <section className="my-20 px-4 xl:px-32">
          <ServicesContactSection />
        </section>

      <section className="my-20 px-4 xl:px-32">
          <About />
        </section> 

        <section className="my-20 px-4 xl:px-32">
          <ContactUs />
        </section>  
      </Layout>
    </Fragment>
  );
};

export default Home;
