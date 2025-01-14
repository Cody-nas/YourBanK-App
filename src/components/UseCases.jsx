import React from 'react';
import funding from '../assets/funding.png';
import future from '../assets/future.png';
import home from '../assets/homeowner.png';
import managing from '../assets/managing.png';
import startup from '../assets/startup.png';
import business from '../assets/businessExp.png';
import cashflow from '../assets/cashflow.png';
import payment from '../assets/paymentSol.png'


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

        <div className="flex flex-col space-x-4 md:flex-row mt-8">


          {/* left section */}
          <div className="w-full md:w-1/2 grid grid-cols-2 text-sm mt-6 gap-4">
            {/* <!-- Card 1 --> */}
            <div className=" p-4 rounded-2xl border shadow-2xl text-center">
              <div className="text-center mb-2">
                <img src={managing} alt="" className='w-10 h-10 mx-auto' />
              </div>
              <p>Managing Personal Finances</p>
            </div>


            {/* <!-- Card 2 --> */}
            <div className=" p-4 rounded-2xl border shadow-2xl text-center">
              <div className="mb-2">
                <img src={future} alt="" className='w-10 h-10 mx-auto' />
              </div>
              <p>Saving for the Future</p>
            </div>


            {/* <!-- Card 3 --> */}
            <div className="p-4 rounded-2xl border shadow-2xl text-center">
              <div className="mb-2">
                <img src={home} alt="" className='w-10 h-10 mx-auto' />

              </div>
              <p>Homeownership</p>
            </div>


            {/* <!-- Card 4 --> */}
            <div className="p-4 rounded-2xl border shadow-2xl text-center">
              <div className=" mb-2">
                <img src={funding} alt="" className='w-10 h-10 mx-auto' />

              </div>
              <p>Education Funding</p>
            </div>
          </div>

          {/* right section */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-xl font-medium mt-4 mb-4">For Individuals</h2>
            <p className="text-gray-300 text-sm mb-6">
              For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers.
            </p>
            <div className="flex justify-between">
              <div className="text-center">
                <p className="text-3xl font-bold text-grn">78%</p>
                <p className="text-gray-300 text-sm">Secure Retirement Planning</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-grn">63%</p>
                <p className="text-gray-300 text-sm">Manageable Debt Consolidation</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-grn">91%</p>
                <p className="text-gray-300 text-sm">Reducing financial burdens</p>
              </div>
            </div>
            <div className="mt-6">
              <button className=" border text-white px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700">
                learn more
              </button>
            </div>
          </div>
        </div>

        {/* For businesses */}
        <div className="flex flex-col space-x-4 md:flex-row mt-8">
          {/* left section */}
          <div className="w-full md:w-1/2 px-4 mt-10">
            <h2 className="text-xl font-medium mt-4 mb-4">For Individuals</h2>
            <p className="text-gray-300 text-sm mb-6">
              For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers.
            </p>
            <div className="flex justify-between">
              <div className="text-center">
                <p className="text-3xl font-bold text-grn">78%</p>
                <p className="text-gray-300 text-sm">Secure Retirement Planning</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-grn">63%</p>
                <p className="text-gray-300 text-sm">Manageable Debt Consolidation</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-grn">91%</p>
                <p className="text-gray-300 text-sm">Reducing financial burdens</p>
              </div>
            </div>
            <div className="mt-6">
              <button className=" border text-white px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700">
                learn more
              </button>
            </div>
          </div>

          {/* right section */}
          <div className="w-full md:w-1/2 grid grid-cols-2 text-sm mt-6 gap-4">
            {/* <!-- Card 1 --> */}
            <div className=" p-4 rounded-2xl border shadow-2xl text-center">
              <div className="text-center mb-2">
                <img src={startup} alt="" className='w-10 h-10 mx-auto' />
              </div>
              <p>Managing Personal Finances</p>
            </div>


            {/* <!-- Card 2 --> */}
            <div className=" p-4 rounded-2xl border shadow-2xl text-center">
              <div className="mb-2">
                <img src={cashflow} alt="" className='w-10 h-10 mx-auto' />
              </div>
              <p>Saving for the Future</p>
            </div>


            {/* <!-- Card 3 --> */}
            <div className="p-4 rounded-2xl border shadow-2xl text-center">
              <div className="mb-2">
                <img src={business} alt="" className='w-10 h-10 mx-auto' />

              </div>
              <p>Homeownership</p>
            </div>


            {/* <!-- Card 4 --> */}
            <div className="p-4 rounded-2xl border shadow-2xl text-center">
              <div className=" mb-2">
                <img src={payment} alt="" className='w-10 h-10 mx-auto' />

              </div>
              <p>Education Funding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseCases;