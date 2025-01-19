import React from 'react';
import { PiQuotesDuotone } from "react-icons/pi";

const Testimonials = () => {
  return (
    <section className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <div className='flex-col md:flex-row md:items-center'>
        <div className='font-medium mb-4 md:mb-0 text-center md:text-left'>
          <h2 className='text-4xl'>Our <span className='text-grn'>Testimonials</span></h2>
        </div>

        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
          <p className='mt-2 text-gray-300 max-w-2xl text-center md:text-left md:mr-10'>
            Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients trust us
            for a secure and prosperous financial journey.
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
          {/* Testimonial 1 */}
          <div className=' p-6 text-center '>
            <div className="mb-4">
              <PiQuotesDuotone className='w-10 h-10 text-grn mx-auto' />
            </div>
            <p className='mt-4 italic text-sm text-gray-300'>
              "YourBank has been my trusted financial partner for years. Their
              personalized service and innovative digital banking solutions have
              made managing my finances a breeze."
            </p>
            <p className="text-grn mt-5 font-semibold">Sara T</p>
          </div>

          {/* Testimonial 2 */}
          <div className=' p-6 text-center '>
            <div className="mb-4">
              <PiQuotesDuotone className='w-10 h-10 text-grn mx-auto' />
            </div>
            <p className='mt-4 italic text-sm text-gray-300'>
              "I recently started my own business, and YourBank has been
              instrumental in helping me set up my business accounts and secure the
              financing I needed. Their expert guidance and tailored solutions have
              been invaluable."
            </p>
            <p className="text-grn mt-4 font-semibold">John D</p>
          </div>

          {/* Testimonial 3 */}
          <div className=' p-6 text-center '>
            <div className="mb-4">
              <PiQuotesDuotone className='w-10 h-10 text-grn mx-auto' />
            </div>
            <p className='mt-4 italic text-sm text-gray-300'>
              "I love the convenience of YourBank's app. It allows me to stay on top
              of my finances and make transactions on the go. The app is
              user-friendly and secure, giving me peace of mind."
            </p>
            <p className="text-grn mt-4 font-semibold">Emily G</p>
          </div>
        </div>
      </div>


      {/*  */}
      <div className="bg-zinc-950 p-8 rounded-xl shadow-lg flex flex-col lg:flex-row justify-between items-center mt-12">
        <div>
          <h2 className=" text-2xl font-medium">
            Start your financial journey with
            <span className="text-grn"> YourBank today!</span>
          </h2>
          <p className="mt-2 text-gray-300 max-w-2xl ">
            Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
            pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
            Nascetur viverra arcu sed amet cursus purus.
          </p>
        </div>
        <div className="mt-6 lg:mt-0">
          <button className='bg-grn flex items-center space-x-2 py-2 px-6 text-black text-sm md:text-base font-medium hover:text-gray-400 transition-all duration-300 rounded-2xl hover:bg-slate-grey'>
            Open Account
          </button>
        </div>
      </div>

    </section>
  )
}

export default Testimonials;