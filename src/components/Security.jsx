import React from 'react';

const complianceItems = [
  'Indian Rental Act',
  'RERA Regulations',
  'Digital India Guidelines',
];

const Security = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Trust & Security</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our blockchain technology ensures the highest level of security and transparency for all rental agreements. Every transaction is encrypted, immutable, and fully traceable.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <i className="fas fa-lock text-blue-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">End-to-End Encryption</h3>
                <p className="text-gray-600">All data is encrypted and securely stored on the blockchain</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <i className="fas fa-shield-alt text-blue-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Immutable Records</h3>
                <p className="text-gray-600">Once recorded, data cannot be altered, ensuring complete transparency</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <i className="fas fa-fingerprint text-blue-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Biometric Verification</h3>
                <p className="text-gray-600">Advanced identity verification to prevent fraud</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliant With:</h3>
            <div className="flex flex-wrap gap-4">
              {complianceItems.map((item, index) => (
                <div key={index} className="bg-gray-100 px-4 py-2 rounded-md flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src="https://public.readdy.ai/ai/img_res/71f0ab4c7fba188b9113e2f92fa6c4df.jpg" 
            alt="Security Visualization" 
            className="max-w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">Trusted By</h3>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {[
            { icon: 'fa-building', name: 'PropTech India' },
            { icon: 'fa-university', name: 'National Housing Bank' },
            { icon: 'fa-landmark', name: 'Indian Rental Association' },
            { icon: 'fa-shield-alt', name: 'Blockchain Council' },
            { icon: 'fa-home', name: 'Housing.com' }
          ].map((partner, index) => (
            <div key={index} className="flex items-center space-x-2">
              <i className={`fas ${partner.icon} text-gray-400 text-2xl`}></i>
              <span className="text-gray-600 font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Security;
