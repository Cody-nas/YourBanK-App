import React from 'react';
import arrow from '../assets/arrowUp.png';

const OurFeatures = () => {
  return (

    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <div className='flex-col md:flex-row md:items-center'>
        <div className='font-medium mb-4 md:mb-0 md:ml-16 text-center md:text-left'>
          <h2 className='text-4xl'>Our <span className='text-grn'>Features</span> </h2>
        </div>
        <div className='flex-col md:flex-row md:items-center'>
          <p className='mt-2 text-gray-300 max-w-2xl text-center md:text-left md:ml-16'>
            Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience
          </p>
        </div>

        <div className='flex space-x-4'>
          {/* sidebar */}
          <div class="w-[800]  bg-gray-800 flex flex-col space-y-4 p-16 rounded-lg mt-4">
            <button className="text-center  bg-grn p-2  rounded-full hover:text-green-600">
              Online Banking
            </button>
            <button
              className=" text-center   p-2  rounded-full text-gray-300  hover:text-green-600"
            >
              Financial Tools
            </button>
            <button
              className="  text-center p-2    rounded-full text-gray-300  hover:text-green-600"
            >
              Customer Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;