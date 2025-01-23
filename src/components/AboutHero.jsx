import React from 'react';
import abt from '../assets/abt.png';

const AboutHero = () => {
  return (
    <section className='px-4 md:px-12 max-w-screen-2xl mx-auto mt-24 flex flex-col  md:flex-row  justify-around items-center gap-6'>
      <div className="lg:w-1/2 text-center md:text-left  border rounded-br-[80px] p-6 md:p-8">
        <h3 className=' text-left '>Welcome to YourBank</h3>
        <h2 className="text-2xl md:text-4xl text-left  font-medium ">
          Where Banking Meets <br /> <span className='text-grn'>Excellence!</span>
        </h2>
        <p className="text-gray-300 mt-3">
          Join our team and embark on a rewarding journey in the banking industry.
          At YourBank, we are committed to fostering a culture of excellence and
          providing opportunities for professional growth. With a focus on
          innovation, customer service, and integrity, we strive to make a positive
          impact in the lives of our customers and communities. Join us today and be
          a part of our mission to shape the future of banking.
        </p>
      </div>

      <div className="lg:w-1/2 relative">
        <img
          src={abt}
          alt="Careers"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>
    </section>
  )
}

export default AboutHero;