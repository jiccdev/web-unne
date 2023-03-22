import React, { Fragment } from 'react';

/** Components */
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import InvestmentInfo from '@/components/PageSections/SoyInversionista/AdministracionDeArriendo/InvestmentInfo';
import PropertyManagmentSteps from '@/components/PageSections/SoyInversionista/AdministracionDeArriendo/PropertyManagmentSteps';
import { plansCardData } from '../../data';
import PlanCard from '@/components/Card/PlanCard';

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

        <section className="relative my-10 px-4 xl:px-56 grid grid-cols-3 gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 col-span-12 xl:col-span-2">
            {plansCardData?.length > 0 &&
              plansCardData?.map((plan) => (
                <PlanCard key={plan.id} data={plan} />
              ))}
          </div>
          <div className="">Form</div>
        </section>
      </Layout>
    </Fragment>
  );
};

export default AdministracionDeArriendo;
