import React, { Fragment } from 'react';
import Image from 'next/image';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import { iconsList } from '../components/Icons';

const Home = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Inicio</title>
      </HeadPage>

      <div className="relative overflow-hidden">
        <Layout>
          <div className="w-full border-0"></div>
        </Layout>
      </div>
    </Fragment>
  );
};

export default Home;
