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


        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* faq 1 */}
          <div className=' p-6 rounded-lg shadow mt-4'>
            <h3 className='text-xl font-medium mb-2'>
              How do I open an account with YourBank?
            </h3>
            <hr />
            <p className='mt-2 text-sm text-gray-300'>
              Opening an account with YourBank is easy. Simply visit our website and
              click on the “Open an Account” button. Follow the prompts, provide the
              required information, and complete the application process. If you
              have any questions or need assistance, our customer support team is
              available to help.
            </p>
          </div>

          {/* faq 2 */}
          <div className=' p-6 rounded-lg shadow mt-4'>
            <h3 className='text-xl font-semibold mb-2'>
              What documents do I need to provide to apply for a loan?
            </h3>
            <hr />
            <p className='mt-2 text-sm text-gray-300'>
              The documents required for a loan application may vary depending on
              the type of loan you are applying for. Generally, you will need to
              provide identification documents (such as a passport or driver’s
              license), proof of income (such as pay stubs or tax returns), and
              information about the collateral (if applicable). Our loan officers
              will guide you through the specific requirements during the
              application process.
            </p>
          </div>

          {/* faq 3 */}
          <div className='p-6 rounded-lg shadow mt-4'>
            <h3 className='text-xl font-semibold mb-2'>
              How can I access my account online?
            </h3>
            <hr />
            <p className='mt-2 text-sm text-gray-300'>
              Accessing your accounts online is simple and secure. Visit our website
              and click on the “Login” button. Enter your username and password to
              access your accounts. If you haven’t registered for online banking,
              click on the “Enroll Now” button and follow the registration process.
              If you need assistance, our customer support team is available to
              guide you.
            </p>
          </div>

          {/* faq 4 */}
          <div className='p-6 rounded-lg shadow mt-4'>
            <h3 className='text-xl font-semibold mb-2'>
              Are my transactions and personal information secure?
            </h3>
            <hr />
            <p className='mt-2 text-sm text-gray-300'>
              At YourBank, we prioritize the security of your transactions and
              personal information. We employ industry-leading encryption and
              multi-factor authentication to ensure that your data is protected.
              Additionally, we regularly update our security measures to stay ahead
              of emerging threats. You can bank with confidence knowing that we have
              robust security systems in place.
            </p>
          </div>
        </div>

        <div className='mt-6 text-center'>
          <button className=" border text-white px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700">
            Load All FAQ’s
          </button>
        </div>
      </div>
    </div >
  )
}

export default FAQ;