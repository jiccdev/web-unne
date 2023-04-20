import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import CircleSection from '@/components/PageSections/SoyPropietario/QuieroArrendar/CircleSection';
import WhyUnneSection from '@/components/PageSections/SoyPropietario/QuieroArrendar/whyUnneSection';
import MainCarousel from '@/components/Carousel/MainCarousel';
import SimpleButton from '@/components/Button/SimpleButton';

/* Data */
import { CircleVenderData, mainCarouselSellData, whyUnneSellData } from '../../data/index';
import { Fade } from 'react-awesome-reveal';
import ButtonProps from '@/components/Button/ButtonProps';

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
          <Fade delay={300} cascade>
            {whyUnneSellData?.length > 0 && whyUnneSellData?.map((e) => (<WhyUnneSection key={e.id} data={e} />))}
          </Fade>
        </section>

        <section className='my-20 bg-gray-50 py-8'>
          <Fade delay={300} cascade>
            <CircleSection ubicationData={CircleVenderData} ColorBorder='border-[#FBB916]' ColorBg='bg-[#FBB916]' ColorNumberBG='bg-[#fb923c]' ColorTextBG='bg-[#e5e7eb]' ColorText='text-black' />
          </Fade>
        </section>
      </Layout>
    </Fragment>
  );
};

export default QuieroVender;
