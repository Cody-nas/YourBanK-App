import React from 'react';
import arrow from '../assets/arrowUp.png';

const OurFeatures = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <div className=' flex-col md:flex-row md:items-center'>
        <div className='font-medium mb-4 md:mb-0 text-center md:text-left'>
          <h2 className='text-4xl'>Our <span className='text-grn'>Features</span></h2>
        </div>
        <div className='flex flex-col md:flex-row md:items-center mt-4 md:mt-0'>
          <p className='mt-2 text-gray-300 text-center md:text-left '>
            Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience.
          </p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:space-x-4 mt-8'>
        {/* Sidebar */}
        <div className="  md:w-1/4 flex flex-col space-y-4 p-6 text-center rounded-lg">
          <button className="text-center lg:mt-8 text-grn text-sm bg-zinc-950 border-gray-50 p-2 rounded-full">
            Online Banking
          </button>
          <button className="text-center text-gray-300 text-sm p-2 rounded-full bg-zinc-950 border-gray-50">
            Financial Tools
          </button>
          <button className="text-center text-gray-300 text-sm p-2 rounded-full bg-zinc-950 border-gray-50">
            Customer Support
          </button>
        </div>

        {/* Feature Cards */}
        <div className='md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-0'>
          <div className='p-6 rounded-lg bg-zinc-950'>
            <div className='flex justify-between'>
              <h2 className="text-sm font-medium">24/7 Account Access</h2>
              <img src={arrow} alt="arrow" className='w-4 h-4' />
            </div>
            <p className='mt-2 text-sm text-gray-300'>Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
          </div>
          <div className='p-6 rounded-lg bg-zinc-950 '>
            <div className='flex justify-between'>
              <h2 className="text-sm font-medium">Mobile Banking App</h2>
              <img src={arrow} alt="arrow" className='w-4 h-4' />
            </div>
            <p className='mt-2 text-sm text-gray-300'>Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.</p>
          </div>
          <div className='p-6 rounded-lg bg-zinc-950'>
            <div className='flex justify-between'>
              <h2 className="text-sm font-medium">Secure Transactions</h2>
              <img src={arrow} alt="arrow" className='w-4 h-4' />
            </div>
            <p className='mt-2 text-sm text-gray-300'>Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.</p>
          </div>
          <div className='p-6 rounded-lg bg-zinc-950'>
            <div className='flex justify-between'>
              <h2 className="text-sm font-medium">Bill Pay and Transfers</h2>
              <img src={arrow} alt="arrow" className='w-4 h-4' />
            </div>
            <p className='mt-2 text-sm text-gray-300'>Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
