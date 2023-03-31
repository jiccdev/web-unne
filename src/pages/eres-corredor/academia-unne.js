import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import Capacitation from '@/components/PageSections/EresCorredor/AcademiaUnne/Capacitation';
import About from '@/components/PageSections/EresCorredor/AcademiaUnne/About';
import ContactUs from '@/components/PageSections/EresCorredor/AcademiaUnne/ContactUs';
import ReactSlickComponent from '@/components/Carousel/ReactSlickComponent';
import { BankData } from '../../data';
import ImgCarouselCard from '@/components/Card/ImgCarouselCard';
import TittleAcademy from '@/components/PageSections/EresCorredor/AcademiaUnne/TittleAcademy';

const AcademiaUnne= () => {
    return (
      <Fragment>
        <HeadPage>
          <title>Unne | Academia Unne</title>
        </HeadPage>

        <Layout>
        
        <section>
          <Capacitation/>
        </section>

        <section>
          <About/>
        </section>

        <section>
          <TittleAcademy/>
          <ReactSlickComponent data={BankData} RenderComponent={ImgCarouselCard} slidesToShow={5} xl={1}/>
        </section>

        <section>
          <ContactUs/>
        </section>

        </Layout>
        
      </Fragment>
    );
  };
  
  export default AcademiaUnne;