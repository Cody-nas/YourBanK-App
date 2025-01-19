import React from 'react';
import competitive from '../assets/competitive.png';
import health from '../assets/Health.png';
import retirement from '../assets/retirment.png';
import workLife from '../assets/Work-life.png';
const Benefits = () => {
  return (
    <section className='flex-col md:flex-row md:items-center md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <div className='font-medium mb-4 md:mb-0  text-center md:text-left'>
        <h2 className='text-4xl '>
          Our <span className='text-grn'>Benefits</span>
        </h2>
      </div>
      <div className='flex flex-col md:flex-row md:items-center mt-4 md:mt-0'>
        <p className='mt-2 text-gray-300  text-center md:text-left '>
          At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits <br />
          designed to support their personal and professional growth.
        </p>
      </div>
      <div className='grid grid-cols-1 mt-4 md:grid-cols-2 gap-6'>
        {/* benefit 1 */}
        <div className=' p-6 mt-4 '>
          <div className='flex  items-center gap-2'>
            <img src={competitive} alt="" className='w-10 h-10' />
            <h3 className='text-xl font-medium mb-2'>
              Competitive Compensation
            </h3>
          </div>
          <p className='mt-2 text-sm  text-gray-300'>
            We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.
          </p>
        </div>
        {/* benefit 2 */}
        <div className=' p-6 mt-4 '>
          <div className='flex  items-center gap-2'>
            <img src={health} alt="" className='w-10 h-10' />
            <h3 className='text-xl font-medium mb-2'>
              Health and Wellness
            </h3>
          </div>
          <p className='mt-2 text-sm  text-gray-300'>
            We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.
          </p>
        </div>
        {/* benefit 3 */}
        <div className=' p-6 mt-4 '>
          <div className='flex  items-center gap-2'>
            <img src={retirement} alt="" className='w-10 h-10' />
            <h3 className='text-xl font-medium mb-2'>
              Retirement Planning
            </h3>
          </div>
          <p className='mt-2 text-sm  text-gray-300'>
            YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.
          </p>
        </div>
        {/* benefit 4 */}
        <div className=' p-6 mt-4 '>
          <div className='flex  items-center gap-2'>
            <img src={workLife} alt="" className='w-10 h-10' />
            <h3 className='text-xl font-medium mb-2'>
              Work-Life Balance
            </h3>
          </div>
          <p className='mt-2 text-sm  text-gray-300'>
            We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits;