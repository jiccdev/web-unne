import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import CircleSection from '@/components/PageSections/SoyPropietario/QuieroArrendar/CircleSection';
import WhyUnneSection from '@/components/PageSections/SoyPropietario/QuieroArrendar/whyUnneSection';
import MainCarousel from '@/components/Carousel/MainCarousel';
import SimpleButton from '@/components/Button/SimpleButton';

/* Data */
import { CircleArrendarData, mainCarouselLeaseData, whyUnneLeaseData } from '../../data/index';




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
        <section className='grid grid-cols-1 xl:grid-cols-3'>
          <div className='xl:col-start-1'>
            {whyUnneLeaseData?.length > 0 && whyUnneLeaseData?.map((e) => (<WhyUnneSection key={e.id} data={e} />))}
          </div>
          <div className='col-auto xl:col-start-2 xl:col-end-4'>
          <CircleSection ubicationData={CircleArrendarData} ColorBorder='border-slate-600' ColorBg='bg-slate-600' ColorNumberBG='bg-[#F3AA88]' ColorTextBG='bg-[#E85512]' />
          </div>
        </section>
        <section className='flex justify-center my-5'>
          <SimpleButton></SimpleButton>
        </section>
        
      </Layout>
    </Fragment>
  );
};

export default QuieroArrendar;
