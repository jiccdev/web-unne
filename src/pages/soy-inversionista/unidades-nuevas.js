import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import NewProperty from '@/components/PageSections/SoyInversionista/UnidadesNuevas/NewProperty';

const UnidadesNuevas = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Unidades Nuevas</title>
      </HeadPage>

      {/* HERO SECTION */}
      <Layout>
        <section>
          <NewProperty/>
        </section>
      </Layout>
    </Fragment>
  )
};

export default UnidadesNuevas;
