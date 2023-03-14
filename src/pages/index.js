import React, { Fragment } from 'react';

/** Components */
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import Carousel from '@/components/PageSections/HomePage/CarouselSection';
import SearchProperties from '@/components/PageSections/HomePage/SearchPropertiesSection';
import PropertiesList from '@/components/PageSections/HomePage/PropertiesListSection';

const Home = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Home prueba</title>
      </HeadPage>

      <Layout>
        {/* COMPONENT SECTIONS HERE */}
        <section className="my-10 bg-gray-50">
          seccion 1
          <Carousel />
        </section>

        <section className="my-10 bg-gray-50">
          seccion 2
          <SearchProperties />
        </section>

        <section className="my-10 bg-gray-50">
          seccion 3
          <PropertiesList />
        </section>
      </Layout>
    </Fragment>
  );
};

export default Home;
