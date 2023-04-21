import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import AuctionProcess from '@/components/PageSections/SoyInversionista/UnidadesRemate/AuctionProcess';
import AuctionObjetives from '@/components/PageSections/SoyInversionista/UnidadesRemate/AuctionObjetives';




const UnidadesRemates = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Unidades de Remates</title>
      </HeadPage>

      {/* Auction Secction */}
      <Layout>
        <section className=' my-24'>
          <AuctionProcess/>
        </section>

        <section className=' mt-20'>
        <AuctionObjetives/>
        </section>
      </Layout>
      
    </Fragment>
  );
};

export default UnidadesRemates;