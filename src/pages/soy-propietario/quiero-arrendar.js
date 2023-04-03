import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import CircleSection from '@/components/PageSections/SoyPropietario/QuieroArrendar/CircleSection';
import WhyUnneSection from '@/components/PageSections/SoyPropietario/QuieroArrendar/whyUnneSection';
import MainCarousel from '@/components/Carousel/MainCarousel';
import SimpleButton from '@/components/Button/SimpleButton';
import StepsToLease from '@/components/PageSections/SoyPropietario/QuieroArrendar/StepsToLease';

/* Data */
import {
  CircleArrendarData,
  mainCarouselLeaseData,
  whyUnneLeaseData,
} from '../../data/index';

const QuieroArrendar = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Quiero arrendar</title>
      </HeadPage>

      {/* HERO SECTION */}
      <Layout>
        <section>
          <MainCarousel data={mainCarouselLeaseData} />
        </section>

        <section>
          {whyUnneLeaseData?.length > 0 &&
            whyUnneLeaseData?.map((e) => (
              <WhyUnneSection key={e.id} data={e} />
            ))}
        </section>
        <section className='mt-20'>
          <CircleSection
            ubicationData={CircleArrendarData}
            ColorBorder="border-[#2E3641]"
            ColorBg="bg-[#2E3641]"
            ColorNumberBG="bg-[#F7B092]"
            ColorTextBG="bg-[#EF6025]"
            ColorText="text-white"
          />
        </section>
        <section className="flex justify-center mt-5 mb-20">
          <SimpleButton></SimpleButton>
        </section>

        <section className="my-20 px-4 xl:px-32">
          <StepsToLease />
        </section>
      </Layout>
    </Fragment>
  );
};

export default QuieroArrendar;
