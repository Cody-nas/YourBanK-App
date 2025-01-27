import React from 'react';
import security from '../assets/SecurityHero.png'

const SecurityHero = () => {
  return (
    <section className='px-4 md:px-12 max-w-screen-2xl mx-auto mt-24 flex flex-col  md:flex-row  justify-around items-center gap-6'>
      <div className="lg:w-1/2 text-center md:text-left  border rounded-br-[80px] p-6 md:p-8">

        <h2 className="text-2xl md:text-4xl text-left ml-4  font-medium ">
          Your Security is Our <br /> <span className='text-grn'>Top Priority</span>
        </h2>
        <p className="text-gray-300 mt-3">
          At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.Join our team and embark on a rewarding journey in the banking industry.
          At YourBank, we are committed to fostering a culture of excellence and
          providing opportunities for professional growth. With a focus on
          innovation, customer service, and integrity, we strive to make a positive
          impact in the lives of our customers and communities. Join us today and be
          a part of our mission to shape the future of banking.
        </p>
      </div>

      <div className="lg:w-1/2 relative">
        <img
          src={security}
          alt="Careers"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
};

export default SecurityHero;