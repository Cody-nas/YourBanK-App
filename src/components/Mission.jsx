import React from 'react';
import mission from '../assets/mission.png';
import vision from '../assets/vission.png';

const Mission = () => {
  return (
    <section className='flex-col md:items-center md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <div className='font-medium mb-4 md:mb-0  text-center md:text-left'>
        <h2 className='text-4xl text-grn '>
          Mission & Vision
        </h2>
      </div>
      <div className='flex flex-col md:flex-row md:items-center mt-4 md:mt-0'>
        <p className='mt-2 text-gray-300  text-center md:text-left '>
          We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and <br />
          businesses while maintaining a strong commitment to customer satisfaction and community development
        </p>
      </div>

      {/* mission and vision card */}

      {/* mission */}
      <div className='flex flex-col md:flex-row justify-evenly items-center  mt-8'>
        <div>
          <img src={mission} alt="" className='w-[450px] h-[450px]' />
        </div>

        {/* content */}
        <div className='border-l-1 border-grn p-6 md:w-2/5'>
          <h3 class="text-2xl font-bold mt-6">Mission</h3>
          <p class="mt-4 text-gray-300">
            At YourBank, our mission is to empower our customers to achieve
            financial success. We are dedicated to delivering innovative banking
            solutions that cater to their unique needs. Through personalized
            services, expert guidance, and cutting-edge technology, we aim to build
            strong, lasting relationships with our customers. Our mission is to be
            their trusted partner, helping them navigate their financial journey and
            realize their dreams.
          </p>
        </div>
      </div>

      {/* vission */}
      <div className='flex flex-col md:flex-row justify-evenly items-center  mt-8'>
        {/* content */}
        <div className='border-r-1 border-grn p-6 md:w-2/5'>
          <h3 class="text-2xl font-bold mt-6">Vision</h3>
          <p class="mt-4 text-gray-300">
            Our vision at YourBank is to redefine banking by creating a seamless and
            personalized experience for our customers. We envision a future where
            banking is accessible, transparent, and tailored to individual
            preferences. Through continuous innovation and collaboration, we strive
            to be at the forefront of the industry, setting new standards for
            customer-centric banking. Our vision is to be the preferred financial
            institution, known for our unwavering commitment to excellence, trust,
            and customer satisfaction..
          </p>
        </div>

        <div>
          <img src={vision} alt="" className='w-[450px] h-[450px]' />
        </div>
      </div>


    </section>
  )
}

export default Mission;