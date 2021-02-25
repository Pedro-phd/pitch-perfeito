import React from 'react';
import Head from 'next/head'
import Home from './home/index'

const index: React.FC = () => {
  return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap' rel="stylesheet"/>
        </Head>
        <Home/>
      </>
  );
};

export default index;
