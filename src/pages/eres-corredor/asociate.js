import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import MainInformation from '@/components/PageSections/EresCorredor/Asociate/MainInformation';

import InfoCardSection from '@/components/PageSections/EresCorredor/Asociate/InfoCardSection';
import OurPartners from '@/components/PageSections/EresCorredor/Asociate/OurPartners';

import React, { Fragment, useContext, useEffect } from 'react';
import Banner from '@/components/PageSections/EresCorredor/Asociate/Banner';
import { Fade } from 'react-awesome-reveal';

const Asociate = () => {

    return (
        <Fragment>
            <HeadPage>
                <title>Unne | Asociate</title>
            </HeadPage>

            <Layout>
                <section className='mt-20'>
                    <Fade delay={300} cascade>
                        <MainInformation />
                    </Fade>
                </section>
                <section>
                    <Banner />
                </section>
                <section className='my-20 bg-gray-50 py-8'>
                    <Fade direction='left' delay={200} cascade>
                        <InfoCardSection />
                    </Fade>
                </section>
                <section>
                    <Fade delay={300} cascade>
                        <OurPartners />
                    </Fade>
                </section>
            </Layout>
        </Fragment>
    )
};

export default Asociate;