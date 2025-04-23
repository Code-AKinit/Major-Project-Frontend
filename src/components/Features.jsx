import React from 'react';

const featureList = [
  {
    icon: 'fa-file-contract',
    title: 'Smart Contract Agreements',
    description: 'Digitally enforceable rental agreements with self-executing terms',
  },
  {
    icon: 'fa-balance-scale',
    title: 'Dispute Resolution',
    description: 'Transparent handling of disputes with blockchain verified records',
  },
  {
    icon: 'fa-id-card',
    title: 'Identity Verification',
    description: 'Secure authentication of landlords and tenants using blockchain',
  },
  {
    icon: 'fa-shield-alt',
    title: 'Escrow-Based Deposits',
    description: 'Funds held in escrow and released based on predefined conditions',
  },
  {
    icon: 'fa-images',
    title: 'Property Image Storage',
    description: 'Blockchain-stored images of property to prevent false claims',
  },
  {
    icon: 'fa-star',
    title: 'Reputation System',
    description: 'Decentralized rating system based on past rental history',
  },
  {
    icon: 'fa-bolt',
    title: 'Utility Bill Settlements',
    description: 'Automated payments for electricity, water, and internet',
  },
  {
    icon: 'fa-gavel',
    title: 'Legal Compliance',
    description: 'Integration of state-specific rental laws for legal agreements',
  },
];

const Features = () => (
  <section id="features" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Our blockchain technology revolutionizes the rental agreement process with these innovative features
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featureList.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i className={`fas ${feature.icon} text-blue-600 text-xl`}></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
