import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/PageSections/SoyPropietario/QuieroArrendar/HeroSection';
import CircleSection from '@/components/PageSections/SoyPropietario/QuieroArrendar/CircleSection';

/* Data */
import { CircleVenderData } from '../../data/index';

const QuieroVender = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Quiero Vender</title>
      </HeadPage>

      {/* HERO SECTION */}
      <Layout>
        <section>
          seccion 1 - HeroSection
          <HeroSection />
        </section>

        <section>
          <CircleSection ubicationData={CircleVenderData} ColorBorder='border-amber-400' ColorBg='bg-amber-400' ColorNumberBG='bg-[#9A9BA1]' ColorTextBG='bg-[#353843]'/>
        </section>
      </Layout>
    </Fragment>
  );
};

export default QuieroVender;
