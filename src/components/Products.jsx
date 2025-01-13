import React from 'react';

const Products = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <div className=' flex-col md:flex-row md:items-center'>
        <div className=' font-medium mb-4 md:mb-0 md:ml-16 md:pl-10 text-center md:text-left'>
          <h2 className='text-4xl '>Our <span className='text-grn'>Products</span></h2>
        </div>
        <div className='flex flex-col lg:justify-evenly md:flex-row md:justify-between md:items-center '>
          <p className="mt-4 text-gray-300 max-w-2xl">Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations.</p>

          <div className="flex justify-center mt-8 space-x-2">
            <button className="bg-grn text-black px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400">For Individuals</button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700">For Businesses</button>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Products;