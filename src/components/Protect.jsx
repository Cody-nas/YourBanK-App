import React from 'react';
import fraud from '../assets/Fraud.png';
import secure from '../assets/Secure.png';
import Mobile from '../assets/Mobile.png';
import multi from '../assets/Multi.png';

const Protect = () => {
  return (
    <section className='flex-col md:flex-row md:items-center md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <div className='font-medium mb-4 md:mb-0  text-center md:text-left'>
        <h2 className='text-4xl '>
          How We <span className='text-grn'>Protect You</span>
        </h2>
      </div>
      <div className='flex flex-col md:flex-row md:items-center mt-4 md:mt-0'>
        <p className='mt-2 text-gray-300  text-center md:text-left '>
          At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and <br />
          stringent data protection measures ensure your assets and transactions are safeguarded at all times
        </p>
      </div>

      <div className='grid grid-cols-1 mt-4 md:grid-cols-2 gap-6'>
        {/* Protect 1 */}
        <div className='bg-zinc-950 rounded-br-[25px] rounded-tl-[25px] p-6 mt-4 '>
          <div className='flex  items-center gap-2'>
            <img src={secure} alt="" className='w-10 h-10' />
            <h3 className='text-xl font-medium mb-2'>
              Secure Online Banking Platform
            </h3>
          </div>
          <p className='mt-2 text-sm  text-gray-300'>
            Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.
          </p>
        </div>

        {/* Protect 2 */}
        <div className='bg-zinc-950 rounded-br-[25px] rounded-tl-[25px] p-6 mt-4 '>
          <div className='flex  items-center gap-2'>
            <img src={multi} alt="" className='w-10 h-10' />
            <h3 className='text-xl font-medium mb-2'>
              Multi-Factor Authentication
            </h3>
          </div>
          <p className='mt-2 text-sm  text-gray-300'>
            To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.
          </p>
        </div>

        {/* Protect 3 */}
        <div className='bg-zinc-950 rounded-br-[25px] rounded-tl-[25px] p-6 mt-4 '>
          <div className='flex  items-center gap-2'>
            <img src={fraud} alt="" className='w-10 h-10' />
            <h3 className='text-xl font-medium mb-2'>
              Fraud Monitoring
            </h3>
          </div>
          <p className='mt-2 text-sm  text-gray-300'>
            We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.
          </p>
        </div>

        {/* Protect 4 */}
        <div className='bg-zinc-950 rounded-br-[25px] rounded-tl-[25px] p-6 mt-4 '>
          <div className='flex  items-center gap-2'>
            <img src={Mobile} alt="" className='w-10 h-10' />
            <h3 className='text-xl font-medium mb-2'>
              Secure Mobile Banking
            </h3>
          </div>
          <p className='mt-2 text-sm  text-gray-300'>
            Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Protect;