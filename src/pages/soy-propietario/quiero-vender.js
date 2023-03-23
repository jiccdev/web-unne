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


        <section className='grid grid-cols-1 xl:grid-cols-3'>
          <div className='xl:col-start-1'>
            {whyUnneSellData?.length > 0 && whyUnneSellData?.map((e) => (<WhyUnneSection key={e.id} data={e} />))}
          </div>
          <div className='col-auto xl:col-start-2 xl:col-end-4'>
          <CircleSection ubicationData={CircleVenderData} ColorBorder='border-amber-400' ColorBg='bg-amber-400' ColorNumberBG='bg-[#9A9BA1]' ColorTextBG='bg-[#353843]' />
          </div>
        </section>
        
        <section className='flex justify-center my-5'>
          <SimpleButton></SimpleButton>
        </section>
      </Layout>
    </Fragment>
  );
};

export default QuieroVender;
