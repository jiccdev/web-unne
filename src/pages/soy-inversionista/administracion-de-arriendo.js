import React, { Fragment, useContext, useEffect } from 'react';
import { ClientsContext } from '@/context/clients/ClientsContext';
import { plansCardData, slideData } from '../../data';

/** Components */
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import InvestmentInfo from '@/components/PageSections/SoyInversionista/AdministracionDeArriendo/InvestmentInfo';
import PropertyManagmentSteps from '@/components/PageSections/SoyInversionista/AdministracionDeArriendo/PropertyManagmentSteps';
import PlanCard from '@/components/Card/PlanCard';
import ContactForm from '@/components/Form/ContactForm';
import ReactSlickComponent from '@/components/Carousel/ReactSlickComponent';
import ClientCard from '@/components/Card/ClientCard';
import SlideCard from '@/components/Card/SlideCard';

const AdministracionDeArriendo = () => {
  const { contextData } = useContext(ClientsContext);
  const [clients, setClients, getClientList] = contextData;

  useEffect(() => {
    getClientList();
  }, []);

  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Administración de arriendo</title>
      </HeadPage>

      <Layout>
        <section className="relative my-10 px-4 xl:px-56">
          <InvestmentInfo />
        </section>

        <section className="relative my-24 xl:my-40 px-4 xl:px-56">
          <PropertyManagmentSteps />
        </section>

        <section className="relative my-24 w-full xl:my-40 px-4 xl:px-56 grid xl:grid-cols-3 grid-cols-1 gap-0 xl:gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 col-span-12 xl:col-span-2">
            {plansCardData?.length > 0 &&
              plansCardData?.map((plan) => (
                <PlanCard key={plan.id} data={plan} />
              ))}
          </div>

          <ContactForm
            title="¡Despreocúpate por tu propiedad de inversión!"
            subtitle="COMPLETA EL FORMULARIO Y ENTÉRATE CÓMO"
          />
        </section>

        <section className="relative my-24 xl:my-40 px-4 xl:px-56">
          <ReactSlickComponent
            RenderComponent={ClientCard}
            data={clients}
            slidesToShow={3}
            xl={1}
          />
        </section>

        <section className="relative my-24 xl:my-40 px-4 xl:px-56">
          <ReactSlickComponent
            RenderComponent={SlideCard}
            data={slideData}
            slidesToShow={3}
            xl={1}
          />
        </section>
      </Layout>
    </Fragment>
  );
};

export default AdministracionDeArriendo;
