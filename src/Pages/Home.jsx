
import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products'
import UseCases from '../components/UseCases';
import OurFeatures from '../components/OurFeatures';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <UseCases />
      <OurFeatures />
      <FAQ />
      <Testimonials />

    </div>
  );
};

export default Home;
