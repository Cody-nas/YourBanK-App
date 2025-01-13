import React from 'react';
import funding from '../assets/funding.png';
import future from '../assets/future.png';
import home from '../assets/homeowner.png';
import managing from '../assets/managing.png'

const UseCases = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <div className='flex-col md:flex-row md:items-center'>
        <div className='font-medium mb-4 md:mb-0 md:ml-16 text-center md:text-left'>
          <h2 className='text-4xl text-grn'>Use Cases</h2>
        </div>
        <div className='flex-col md:flex-row md:justify-between md:items-center'>
          <p className='mt-4 text-gray-300 max-w-2xl text-center md:text-left md:ml-16 '>
            At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions
          </p>
        </div>

        {/* Left section */}
        <div className="w-full md:w-1/2 grid grid-cols-2 mt-6 gap-4">


          {/* <!-- Card 1 --> */}
          <div className=" p-4 rounded-lg text-center">
            <div className="text-center mb-2">
              <img src={managing} alt="" className='w-10 h-10 mx-auto' />
            </div>
            <p>Managing Personal Finances</p>
          </div>


          {/* <!-- Card 2 --> */}
          <div className=" p-4 rounded-lg text-center">
            <div className="mb-2">
              <img src={future} alt="" className='w-10 h-10 mx-auto' />
            </div>
            <p>Saving for the Future</p>
          </div>


          {/* <!-- Card 3 --> */}
          <div className="p-4 rounded-lg text-center">
            <div className="mb-2">
              <img src={home} alt="" className='w-10 h-10 mx-auto' />

            </div>
            <p>Homeownership</p>
          </div>


          {/* <!-- Card 4 --> */}
          <div className="p-4 rounded-lg text-center">
            <div className="text-green-500 mb-2">
              <img src={funding} alt="" className='w-10 h-10 mx-auto' />

            </div>
            <p>Education Funding</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseCases;