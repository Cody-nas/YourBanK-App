import React from 'react';

const JobOpenings = () => {
  const jobs = [
    {
      title: 'Relationship Manager',
      location: 'India',
      department: 'Retail Banking',
      description: 'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
      requirements: [
        'Bachelor\'s degree in Business, Finance, or a related field',
        'Minimum of 3 years of experience in sales or relationship management in the banking industry',
        'Proven track record of meeting and exceeding sales targets',
        'Excellent interpersonal and negotiation skills',
        'Strong knowledge of banking products and services',
      ],
    },
    {
      title: 'Risk Analyst',
      location: 'India',
      department: 'Risk Management',
      description: 'As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.',
      requirements: [
        'Bachelor\'s degree in Finance, Economics, or a related field',
        'Minimum of 2 years of experience in risk management or a similar role',
        'Proficiency in risk analysis tools and techniques',
        'Strong analytical and problem-solving skills',
        'Knowledge of regulatory requirements and industry best practices',
      ],
    },
    {
      title: 'IT Specialist',
      location: 'India',
      department: 'Information Technology',
      description: 'As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.',
      requirements: [
        'Bachelor\'s degree in Computer Science, Information Technology Security, or a related field',
        'Minimum of 5 years of experience in IT security or a similar role',
        'In-depth knowledge of network security protocols and technologies',
        'Familiarity with regulatory frameworks such as PCI DSS, and GDPR',
        'Professional certifications such as CISSP or CISM preferred',
      ],
    },
  ];

  return (
    <section className="flex-col md:flex-row md:items-center md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
      <div className="font-medium mb-4 md:mb-0 text-center md:text-left">
        <h2 className="text-4xl text-grn">Job Openings</h2>
      </div>
      <div className="flex flex-col md:flex-row md:items-center mt-4 md:mt-0">
        <p className="mt-2 text-gray-300 text-center md:text-left">
          Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be <br />
          part of shaping a brighter future in the banking industry.
        </p>
      </div>
      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-zinc-950 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
            <div className="flex justify-between text-gray-400 mb-4">
              <span className="bg-gray-700 px-2 py-1 rounded-lg">{`Location: ${job.location}`}</span>
              <span className="bg-gray-700 px-2 py-1 rounded-lg">{`Department: ${job.department}`}</span>
            </div>
            <p className="text-gray-300 mb-4">{job.description}</p>
            <h4 className="text-lg font-bold mb-2">Requirements & Qualifications</h4>
            <ul className="list-disc pl-5 text-gray-300">
              {job.requirements.map((requirement, idx) => (
                <li key={idx}>{requirement}</li>
              ))}
            </ul>
            <button className="bg-grn mt-4 space-x-2 py-2 px-6 text-black text-sm md:text-base font-medium hover:text-gray-400 transition-all duration-300 rounded-2xl hover:bg-slate-grey">Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobOpenings;
