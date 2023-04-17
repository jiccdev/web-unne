import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import About from '@/components/PageSections/EresCorredor/AcademiaUnne/About';
import ContactUs from '@/components/PageSections/EresCorredor/AcademiaUnne/ContactUs';

const QuienesSomos = () => {
  return (
    <Fragment>
      <HeadPage>Unne | ¿Quiénes somos?</HeadPage>

      <Layout>
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

export default QuienesSomos;
