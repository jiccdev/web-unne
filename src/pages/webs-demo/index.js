import React, { Fragment } from 'react';

/** Components */
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import SplideCarousel from '@/components/SplideCarousel/SplideCarousel';

const WebsDemo = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Webs DEMO</title>
      </HeadPage>

      <Layout>
        <section className="px-4 my-14 md:my-16 xl:my-28 xl:px-32">
          <SplideCarousel />
        </section>
      </Layout>
    </Fragment>
  );
};

export default WebsDemo;
