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
import { Fade } from 'react-awesome-reveal';

const QuieroArrendar = () => {
  const margin = 'my-20';
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

        <section className={`${margin}`}>
          <Fade delay={300} cascade>
            {whyUnneLeaseData?.length > 0 &&
              whyUnneLeaseData?.map((e) => (
                <WhyUnneSection key={e.id} data={e} />
              ))}
          </Fade>
        </section>
        
        <section className={`${margin} bg-gray-50 py-8`}>
          <Fade delay={300} cascade>
            <CircleSection
              ubicationData={CircleArrendarData}
              ColorBorder="border-[#2E3641]"
              ColorBg="bg-[#2E3641]"
              ColorNumberBG="bg-[#F7B092]"
              ColorTextBG="bg-[#EF6025]"
              ColorText="text-white"
            />
          </Fade>

        </section>

        <section className="my-20 xl:my-64 px-4 xl:px-32">
          <StepsToLease />
        </section>
      </Layout>
    </Fragment>
  );
};

export default QuieroArrendar;
