import React, { Fragment } from 'react';

/** Components */
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import InvestmentInfo from '@/components/PageSections/SoyInversionista/AdministracionDeArriendo/InvestmentInfo';
import PropertyManagmentSteps from '@/components/PageSections/SoyInversionista/AdministracionDeArriendo/PropertyManagmentSteps';
import PlanCard from '@/components/Card/PlanCard';
import ContactForm from '@/components/Form/ContactForm';
import { plansCardData } from '../../data';

const AdministracionDeArriendo = () => {
  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Administración de arriendo</title>
      </HeadPage>

      <Layout>
        <section className="relative my-10 px-4 xl:px-56">
          <InvestmentInfo />
        </section>

        <section className="relative my-10 px-4 xl:px-56">
          <PropertyManagmentSteps />
        </section>

        <section className="relative w-full my-10 px-4 xl:px-56 grid xl:grid-cols-3 grid-cols-1 gap-0 xl:gap-4">
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
      </Layout>
    </Fragment>
  );
};

export default AdministracionDeArriendo;
