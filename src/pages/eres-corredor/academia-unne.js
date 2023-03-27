import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import Capacitation from '@/components/PageSections/EresCorredor/AcademiaUnne/Capacitation';
import About from '@/components/PageSections/EresCorredor/AcademiaUnne/About';
import ContactUs from '@/components/PageSections/EresCorredor/AcademiaUnne/ContactUs';


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
          <ContactUs/>
        </section>

        </Layout>
        
      </Fragment>
    );
  };
  
  export default AcademiaUnne;