import React, { Fragment } from 'react';

/** Components */
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import InvestmentInfo from '@/components/PageSections/SoyInversionista/AdministracionDeArriendo/InvestmentInfo';
import PropertyManagmentSteps from '@/components/PageSections/SoyInversionista/AdministracionDeArriendo/PropertyManagmentSteps';
import Plans from '@/components/PageSections/SoyInversionista/AdministracionDeArriendo/Plans';

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

        <section className="relative my-10 px-4 xl:px-56">
          <Plans />
        </section>
      </Layout>
    </Fragment>
  );
};

export default AdministracionDeArriendo;
