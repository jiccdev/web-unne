import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import CircleSection from '@/components/PageSections/SoyPropietario/QuieroArrendar/CircleSection';
import WhyUnneSection from '@/components/PageSections/SoyPropietario/QuieroArrendar/whyUnneSection';
import MainCarousel from '@/components/Carousel/MainCarousel';
import SimpleButton from '@/components/Button/SimpleButton';

/* Data */
import { CircleVenderData,mainCarouselSellData,whyUnneSellData } from '../../data/index';

const QuieroVender = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Quiero Vender</title>
      </HeadPage>

      {/* HERO SECTION */}
      <Layout>
        <section>
          <MainCarousel data={mainCarouselSellData} />
        </section>
        <section>
          {whyUnneSellData?.length > 0 && whyUnneSellData?.map((e) => (<WhyUnneSection key={e.id} data={e} />))}
        </section>

        <section className='mt-20'>
          <CircleSection ubicationData={CircleVenderData} ColorBorder='border-[#FBB916]' ColorBg='bg-[#FBB916]' ColorNumberBG='bg-[#fb923c]' ColorTextBG='bg-[#e5e7eb]' ColorText='text-black'/>
        </section>
        
        <section className='flex justify-center mt-5 mb-20'>
          <SimpleButton></SimpleButton>
        </section>
      </Layout>
    </Fragment>
  );
};

export default QuieroVender;
