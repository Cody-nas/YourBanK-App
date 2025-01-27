import React from 'react';
import press1 from '../assets/press1.png';
import press2 from '../assets/press2.png';
import press3 from '../assets/press3.png';
import press4 from '../assets/press4.png';

const Press = () => {
  return (
    <section className='flex-col md:items-center md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <div className='font-medium mb-4 md:mb-0  text-center md:text-left'>
        <h2 className='text-4xl text-grn '>
          Press Releases
        </h2>
      </div>
      <div className='flex flex-col md:flex-row md:items-center mt-4 md:mt-0'>
        <p className='mt-2 text-gray-300  text-center md:text-left '>
          Stay updated with the latest happenings and exciting developments at YourBank through our press releases.
        </p>
      </div>


      {/* <!-- Cards Grid --> */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* <!-- Card 1 --> */}
        <div className="bg-zinc-950 rounded-lg p-6 shadow-lg">
          <img
            src={press1}
            alt="Press release image 1"
            className="w-full rounded-lg h-40 object-cover mb-6"
          />
          <h3 className="text-xl font-semibold mb-2">
            YourBank Launches New Rewards Program to Enhance Customer Loyalty and
            Satisfaction
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            <span className="font-semibold">Location:</span> India &nbsp; | &nbsp;
            <span className="font-semibold">Date:</span> 06/11/2024
          </p>
          <p className="text-gray-300">
            YourBank is pleased to announce the introduction of our new Rewards
            Program, aimed at rewarding our loyal customers and enhancing their
            banking experience...
          </p>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="bg-zinc-950 rounded-lg p-6 shadow-lg">
          <img
            src={press2}
            alt="Press release image 2"
            className="w-full rounded-lg h-40 object-cover mb-6"
          />
          <h3 className="text-xl font-semibold mb-2">
            YourBank Expands Branch Network with Opening of New Location in
            Chennai
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            <span className="font-semibold">Location:</span> India &nbsp; | &nbsp;
            <span className="font-semibold">Date:</span> 12/11/2024
          </p>
          <p className="text-gray-300">
            YourBank is excited to announce the grand opening of our newest branch
            in Chennai. This expansion is a testament to our commitment to serving
            our customers...
          </p>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="bg-zinc-950 rounded-lg p-6 shadow-lg">
          <img
            src={press3}
            alt="Press release image 3"
            className="w-full rounded-lg h-40 object-cover mb-6"
          />
          <h3 className="text-xl font-semibold mb-2">
            YourBank Partners with Local Nonprofit to Support Financial Education
            Initiatives
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            <span className="font-semibold">Location:</span> India &nbsp; | &nbsp;
            <span className="font-semibold">Date:</span> 24/12/2024
          </p>
          <p className="text-gray-300">
            YourBank is excited to unveil our new Sustainable Banking Initiative,
            demonstrating our commitment to environmental responsibility...
          </p>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="bg-zinc-950 rounded-lg p-6 shadow-lg">
          <img
            src={press4}
            alt="Press release image 4"
            className="w-full rounded-lg h-40 object-cover mb-6"
          />
          <h3 className="text-xl font-semibold mb-2">
            YourBank Launches Sustainable Banking Initiative to Promote
            Environmental Responsibility
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            <span className="font-semibold">Location:</span> India &nbsp; | &nbsp;
            <span className="font-semibold">Date:</span> 28/12/2024
          </p>
          <p className="text-gray-300">
            This initiative includes eco-friendly investment options, green loans,
            and paperless banking solutions, promoting sustainability...
          </p>
        </div>
      </div>

    </section>
  );
};

export default Press;