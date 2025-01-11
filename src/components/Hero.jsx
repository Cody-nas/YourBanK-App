import React from 'react';
import exchange from '../assets/exchange.png';
import tick from '../assets/hero tick.png'

const Hero = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>

      <div className='flex flex-col md:flex-row justify-evenly items-center gap-6'>


        {/* hero content */}
        <div className='text-center md:text-left'>
          <div className=' bg-zinc-900 flex gap-2 mb-4 rounded-full mx-auto'>
            <img src={tick} alt="" className='w-5 h-5' />
            <span>No LLC Required, No Credit Check.</span>

          </div>
          <h2 className='text-2xl md:text-4xl font-bold leading-relaxed mb-4'>
            Welcome to YourBank
            <br />
            Empowering Your <span className='text-grn'>Financial <br /> Journey</span>
          </h2>
          <p className='text-sm md:text-base mb-6'>
            At YourBank, our mission is to provide comprehensive banking solutions that <br />
            empower individuals and businesses to achieve their financial goals. We are <br />
            committed to delivering personalized and innovative services that prioritize our <br />
            customers' needs.
          </p>
          <div>
            <button className='bg-grn flex items-center space-x-2 py-2 px-6 text-black text-sm md:text-base font-medium hover:text-gray-400 transition-all duration-300 rounded-2xl hover:bg-slate-grey'>
              Open Account
            </button>
          </div>
        </div>



        {/* hero image */}
        <div className='w-full md:w-auto  '>
          <img src={exchange} alt='exchange' className='lg:h-[386px] w-full md:w-auto' />
        </div>
      </div>
    </div>

  );
};

export default Hero;
