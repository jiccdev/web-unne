import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import NewProperty from '@/components/PageSections/SoyInversionista/UnidadesNuevas/NewProperty';
import Banner from '@/components/PageSections/SoyInversionista/UnidadesNuevas/Banner';
import MeetingForm from '@/components/Form/MeetingForm';
import { Fade } from 'react-awesome-reveal';

const UnidadesNuevas = () => {

  const margin = 'my-20';
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Unidades Nuevas</title>
      </HeadPage>

      {/* HERO SECTION */}
      <Layout>
        <section className={`${margin}`}>
          <Fade delay={300} cascade>
            <NewProperty />
          </Fade>
        </section>
        <section className={`${margin}`}>
          <Banner />
        </section>
        {/* <section className='flex justify-center py-5'>
          <MeetingForm title="¿Quieres agendar una reunión con nosotros?" subtitle="Un equipo de expertos se pondra en contacto contigo"></MeetingForm>
        </section> */}
      </Layout>
    </Fragment>
  )
};

export default UnidadesNuevas;
