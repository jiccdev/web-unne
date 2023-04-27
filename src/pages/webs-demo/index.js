import React, { Fragment } from 'react';

/** Components */
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import WebsDemoComponent from '@/components/PageSections/WebsDemo';

const WebsDemo = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Webs DEMO</title>
      </HeadPage>

      <Layout>
        <WebsDemoComponent />
      </Layout>
    </Fragment>
  );
};

export default WebsDemo;
