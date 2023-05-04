import React from 'react';
import Head from 'next/head';

const HeadPage = ({ children }) => {
  return (
    <Head>
      {children}
      <meta
        name="description"
        content="Plataforma de corretaje, donde los corredores puedan acceder a herramientas digitales que de otro modo seria difícil de acceder"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadPage;
