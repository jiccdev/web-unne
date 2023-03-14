import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/PageSections/SoyPropietario/QuieroArrendar/HeroSection';

const QuieroArrendar = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Quiero arrendar</title>
      </HeadPage>

      {/* HERO SECTION */}
      <Layout>
        <section>
          seccion 1
          <HeroSection />
        </section>
      </Layout>
    </Fragment>
  );
};

export default QuieroArrendar;
