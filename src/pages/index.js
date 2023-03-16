import React, { Fragment } from 'react';

/** Components */
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import CarouselSection from '@/components/PageSections/HomePage/CarouselSection';
import SearchProperties from '@/components/PageSections/HomePage/SearchPropertiesSection';
import PropertiesList from '@/components/PageSections/HomePage/PropertiesListSection';

const Home = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Inicio</title>
      </HeadPage>

      <Layout>
        <section>
          <CarouselSection />
        </section>

        <section className="my-10 px-4 xl:px-32">
          <SearchProperties />
        </section>

        <section className="my-10 bg-gray-50 px-4 xl:px-32">
          <PropertiesList />
        </section>

        <section className="my-10 bg-gray-50 px-4 xl:px-32">seccion 4</section>
      </Layout>
    </Fragment>
  );
};

export default Home;
