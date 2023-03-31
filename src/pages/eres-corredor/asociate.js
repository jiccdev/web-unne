import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import MainInformation from '@/components/PageSections/EresCorredor/Asociate/MainInformation';

import { AssociateData } from '../../data/index';
import InfoCardSection from '@/components/PageSections/EresCorredor/Asociate/InfoCardSection';
import OurPartners from '@/components/PageSections/EresCorredor/Asociate/OurPartners';

import React, { Fragment, useContext, useEffect } from 'react';
import Banner from '@/components/PageSections/EresCorredor/Asociate/Banner';

const Asociate = () => {

    return (
        <Fragment>
            <HeadPage>
                <title>Unne | Asociate</title>
            </HeadPage>

            <Layout>
                <section className='mt-20'>
                    {AssociateData?.length > 0 && AssociateData?.map((e) => (<MainInformation key={e.id} data={e} />))}
                </section>
                <section>
                    <Banner/>
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