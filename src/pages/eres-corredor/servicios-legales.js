import React, { Fragment, useContext, useEffect } from 'react';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import MainCarousel from '@/components/Carousel/MainCarousel';

/* Data */
import { mainCarouselLeaseData, TradingProcessData, CarouselLegalServicesData } from '../../data';
import WhyServicesUnne from '@/components/PageSections/EresCorredor/ServiciosLegales/WhyServicesUnne';
import ProcessTrading from '@/components/PageSections/EresCorredor/ServiciosLegales/ProcessTrading';

import ReactSlickComponent from '@/components/Carousel/ReactSlickComponent';
import ClientCard from '@/components/Card/ClientCard';
import { ClientsContext } from '@/context/clients/ClientsContext';
import MoreServices from '@/components/PageSections/EresCorredor/ServiciosLegales/MoreServices';
import TitleSection from '@/components/PageSections/EresCorredor/ServiciosLegales/TitleSection';
import { Fade } from 'react-awesome-reveal';

const ServiciosLegales = () => {
    const { contextData } = useContext(ClientsContext);
    const [clients, setClients, getClientList] = contextData;

    useEffect(() => {
        getClientList();
    }, []);
    return (
        <Fragment>
            <HeadPage>
                <title>Unne | Servicios Legales</title>
            </HeadPage>

            <Layout>

                <section>
                    <MainCarousel data={CarouselLegalServicesData} />
                </section>
                <section className='mt-20'>
                    <Fade>
                        <WhyServicesUnne />
                    </Fade>
                </section>
                <section>
                    <Fade>
                        {TradingProcessData?.length > 0 && TradingProcessData?.map((e) => (<ProcessTrading key={e.id} data={e} />))}
                    </Fade>
                </section>
                <section>
                    <MoreServices />
                </section>
                <section className='mt-20'>
                    <TitleSection title={"Nuestros clientes cuentan su experiencia"} />
                </section>

                <section className="relative mb-24 xl:mb-40 px-4 xl:px-56">
                    <Fade delay={200} cascade>
                        <ReactSlickComponent
                            RenderComponent={ClientCard}
                            data={clients}
                            slidesToShow={3}
                            xl={1}
                        />
                    </Fade>
                </section>
            </Layout >

        </Fragment >
    );
};

export default ServiciosLegales;