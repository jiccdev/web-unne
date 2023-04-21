import React, { Fragment } from 'react';
import Layout from '@/components/Layout/Layout';
import HeadPage from '@/components/Head/HeadPage';
import MapProperties from '@/components/PageSections/Propiedades/MapProperties';

const MapsProperties = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Propiedades en mapa</title>
      </HeadPage>

      <Layout>
        <section className="px-4 my-14 md:my-16 xl:my-10">
          <MapProperties />
        </section>
      </Layout>
    </Fragment>
  );
};

export default MapsProperties;
