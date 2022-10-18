import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Photos"
        description="UVic Student Onboarding website landing page, with a photo feed."
      />
      <Feed />
    </section>
  );
};

export default Home;
