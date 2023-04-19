import React, { Fragment, useState, useContext, useEffect } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PropiedadId = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Propiedad 1</title>
      </HeadPage>

      <Layout>
        <div className="my-10 px-4 xl:px-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto bg-red md:grid-cols-reverse">
            <div className="sm:col-span-6 col-span-3 xl:col-span-3 bg-gray-200 h-20 order-2 xl:order-1">
              Col 1
            </div>
            <div className="sm:col-span-6 col-span-3 xl:col-span-1 bg-gray-400 h-20 order-1 xl:order-2">
              Col 2
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default PropiedadId;
