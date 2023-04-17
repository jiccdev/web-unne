import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import PropiedadesComponent from '@/components/PageSections/Propiedades/PropiedadesComponent';
import Layout from '@/components/Layout/Layout';

const Propiedades = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Propiedades</title>
      </HeadPage>

      <Layout>
        <section className="relative my-10 xl:px-32">
          <PropiedadesComponent />
        </section>
      </Layout>
    </Fragment>
  );
};

export default Propiedades;
