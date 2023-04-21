import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import MainInformation from '@/components/PageSections/EresCorredor/Asociate/MainInformation';

import InfoCardSection from '@/components/PageSections/EresCorredor/Asociate/InfoCardSection';
import OurPartners from '@/components/PageSections/EresCorredor/Asociate/OurPartners';

import React, { Fragment, useContext, useEffect } from 'react';
import Banner from '@/components/PageSections/EresCorredor/Asociate/Banner';
import { Fade } from 'react-awesome-reveal';

const Asociate = () => {

    const margin = 'my-28';
    return (
        <Fragment>
            <HeadPage>
                <title>Unne | Asociate</title>
            </HeadPage>

            <Layout>
                <section className={`${margin}`}>
                    <Fade delay={300} cascade>
                        <MainInformation />
                    </Fade>
                </section>
                <section className={`${margin}`}>
                    <Banner />
                </section>
                <section className={`${margin} bg-gray-50 py-8`}>
                    <Fade direction='left' delay={200} cascade>
                        <InfoCardSection />
                    </Fade>
                </section>
                <section className={`${margin}`}>
                    <Fade delay={300} cascade>
                        <OurPartners />
                    </Fade>
                </section>
            </Layout>
        </Fragment>
    )
};

export default Asociate;