import React from 'react'

const Values = () => {
  return (
    <section className='flex-col md:flex-row md:items-center md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <div className='font-medium mb-4 md:mb-0  text-center md:text-left'>
        <h2 className='text-4xl '>
          Our <span className='text-grn'>Values</span>
        </h2>
      </div>
      <div className='flex flex-col md:flex-row md:items-center mt-4 md:mt-0'>
        <p className='mt-2 text-gray-300  text-center md:text-left '>
          At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, <br />
          delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
        </p>
      </div>
      <div className='grid grid-cols-1 mt-4 md:grid-cols-2 gap-6'>
        {/* values 1 */}
        <div className=' p-6 mt-4 border-l-2 border-grn'>
          <h3 className='text-xl font-medium mb-2'>
            Integrity
          </h3>
          <p className='mt-2 text-sm  text-gray-300'>
            We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.
          </p>
        </div>
        {/* values 2 */}
        <div className=' p-6 mt-4 border-l-2 border-grn'>
          <h3 className='text-xl font-medium mb-2'>
            Customer Centricity
          </h3>
          <p className='mt-2 text-sm text-gray-300 '>
            Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.
          </p>
        </div>
        {/* values 3 */}
        <div className=' p-6 mt-4 border-l-2 border-grn'>
          <h3 className='text-xl font-medium mb-2'>
            Collaboration
          </h3>
          <p className='mt-2 text-sm text-gray-300'>
            We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.
          </p>
        </div>
        {/* values 4 */}
        <div className=' p-6 mt-4 border-l-2 border-grn'>
          <h3 className='text-xl font-medium mb-2'>
            Innovation
          </h3>
          <p className='mt-2 text-sm text-gray-300'>
            We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Values;