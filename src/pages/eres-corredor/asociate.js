import React, { Fragment } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import MainInformation from '@/components/PageSections/EresCorredor/Asociate/MainInformation';

import { AssociateData } from '../../data/index';
import InfoCardSection from '@/components/PageSections/EresCorredor/Asociate/InfoCardSection';
import OurPartners from '@/components/PageSections/EresCorredor/Asociate/OurPartners';

const Asociate = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Asociate</title>
      </HeadPage>

      <Layout>
        <section>
        {AssociateData?.length > 0 && AssociateData?.map((e) => (<MainInformation key={e.id} data={e} />))}
        </section>
        <section>
            Publicamos en los portales mas importantes del pais
        </section>
        <section>
            <InfoCardSection/>
        </section>
        <section>
            <OurPartners/>
        </section>
      </Layout>
    </Fragment>
  )
};

export default Asociate;