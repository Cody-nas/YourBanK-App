import React from 'react';

const FAQ = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <div className='flex-col md:flex-row md:items-center'>
        <div className='font-medium mb-4 md:mb-0 md:ml-16 text-center md:text-left'>
          <h2 className='text-4xl '>
            <span className='text-grn'>Frequently</span> Asked Questions
          </h2>
        </div>
        <div className='flex flex-col md:flex-row md:items-center mt-4 md:mt-0'>
          <p className='mt-4 text-gray-300 max-w-2xl text-center md:text-left md:ml-16'>
            Still you have any questions? Contact our Team via <a href="support@yourbank.com" className='text-grn'>support@yourbank.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQ;