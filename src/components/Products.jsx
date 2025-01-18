import React from 'react';
import checking from '../assets/checking.png';
import savings from '../assets/savings.png';
import loans from '../assets/Loans.png';

const Products = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <div className='flex-col md:flex-row md:items-center'>
        <div className='font-medium mb-4 md:mb-0 md:ml-16  text-center md:text-left'>
          <h2 className='text-4xl'>Our <span className='text-grn'>Products</span></h2>
        </div>

        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
          <p className="mt-2 text-gray-300 max-w-2xl text-center md:text-left md:ml-16 md:mr-10">
            Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations.
          </p>

          <div className="flex justify-center md:justify-start mt-8 space-x-2">
            <button className="bg-grn text-black px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-grn">
              For Individuals
            </button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700">
              For Businesses
            </button>
          </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto lg:divide-x'>
          {/* Checking Account */}
          <div className=' p-6 text-center '>
            <div className="mb-4">
              <img src={checking} alt="checking" className='w-10 h-10 mx-auto' />
            </div>
            <h3 className="text-xl font-base">Checking Accounts</h3>
            <p className="mt-4 text-sm text-gray-300">
              Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.
            </p>
          </div>

          {/* Savings Account */}
          <div className=" p-6 text-center ">
            <div className="mb-4">
              <img src={savings} alt="savings" className='w-10 h-10 mx-auto' />
            </div>
            <h3 className="text-xl font-base">Savings Accounts</h3>
            <p className="mt-4 text-sm text-gray-300">
              Build your savings with our competitive interest rates and flexible savings account options. Whether you’re saving for a specific goal or want to grow your wealth over time, we have the right account for you.
            </p>
          </div>

          {/* Loans and Mortgages */}
          <div className=" p-6 text-center ">
            <div className="mb-4">
              <img src={loans} alt="loans" className='w-10 h-10 mx-auto' />
            </div>
            <h3 className="text-xl font-base">Loans and Mortgages</h3>
            <p className="mt-4 text-sm text-gray-300">
              Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
