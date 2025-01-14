
import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products'
import UseCases from '../components/UseCases';
import OurFeatures from '../components/OurFeatures';
const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <UseCases />
      <OurFeatures />
    </div>
  );
};

export default Home;
