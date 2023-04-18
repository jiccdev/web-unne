import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import About from '@/components/PageSections/EresCorredor/AcademiaUnne/About';
import ContactUs from '@/components/PageSections/EresCorredor/AcademiaUnne/ContactUs';
import ReactSlickComponent from '@/components/Carousel/ReactSlickComponent';
import { BankData } from '../../data';
import ImgCarouselCard from '@/components/Card/ImgCarouselCard';
import TittleAcademy from '@/components/PageSections/EresCorredor/AcademiaUnne/TittleAcademy';
import { Fade } from 'react-awesome-reveal';
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

        
        <section className='pb-10'>
          <Fade delay={300} direction='left'>
            <TittleAcademy />
            <ReactSlickComponent
              data={BankData}
              RenderComponent={ImgCarouselCard}
              slidesToShow={4}
              xl={1}
            />
          </Fade>
        </section>

      </Layout>
    </Fragment>
  );
};

export default QuienesSomos;
