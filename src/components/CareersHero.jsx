import React from 'react';
import hero from '../assets/careersHero.png';

const CareersHero = () => {
  return (
    <section className='px-4 md:px-12 max-w-screen-2xl mx-auto mt-24 flex flex-col  md:flex-row  justify-around items-center gap-6'>
      <div className="lg:w-1/2 text-center md:text-left  border rounded-br-[80px] p-6 md:p-8">
        <h2 className="text-2xl md:text-4xl text-center leading-relaxed font-medium ">
          Welcome to <span className="text-grn">YourBank</span> Careers!
        </h2>
        <p className="text-gray-300 mt-5">
          Join our team and embark on a rewarding journey in the banking industry.
          At YourBank, we are committed to fostering a culture of excellence and
          providing opportunities for professional growth. With a focus on
          innovation, customer service, and integrity, we strive to make a positive
          impact in the lives of our customers and communities. Join us today and be
          a part of our mission to shape the future of banking.
        </p>
      </div>

      <div className="lg:w-1/2">
        <img
          src={hero}
          alt="Careers"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
};

export default CareersHero;
