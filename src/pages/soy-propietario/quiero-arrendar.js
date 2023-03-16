import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/PageSections/SoyPropietario/QuieroArrendar/HeroSection';
import CircleSection from '@/components/PageSections/SoyPropietario/QuieroArrendar/CircleSection';

/* Data */
import { CircleArrendarData } from '../../data/index';


const QuieroArrendar = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Quiero arrendar</title>
      </HeadPage>

      {/* HERO SECTION */}
      <Layout>
        <section>
          seccion 1 - HeroSection
          <HeroSection />
        </section>
        <section>
          <CircleSection  ubicationData={CircleArrendarData} ColorBorder='border-slate-600' ColorBg='bg-slate-600' ColorNumberBG='bg-[#F3AA88]' ColorTextBG='bg-[#E85512]'/>
        </section>
      </Layout>
    </Fragment>
  );
};

export default QuieroArrendar;
