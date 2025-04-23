import React from 'react';

const landlordBenefits = [
  'Reduced vacancy periods with faster tenant verification',
  'Automated rent collection with instant payment confirmation',
  'Decreased risk of payment defaults with escrow system',
  'Documented property condition to prevent damage disputes',
  'Access to verified tenant history and reputation scores',
  'Automated compliance with regional rental regulations',
];

const tenantBenefits = [
  'Transparent rental terms with no hidden clauses',
  'Secure deposit handling with conditional release',
  'Simplified utility payments through the platform',
  'Digital proof of rental history for future applications',
  'Fair dispute resolution with immutable evidence',
  'Easy maintenance request tracking and resolution',
];

const Benefits = () => (
  <section className="py-16 bg-gray-50 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <img 
        src="https://public.readdy.ai/ai/img_res/1ef56d66f2db8c7f486e4ed038c7ea7e.jpg" 
        alt="Blockchain Pattern" 
        className="w-full h-full object-cover"
      />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">Benefits</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how Digi-Lease benefits both landlords and tenants
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Landlords */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">For Landlords</h3>
          {landlordBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start mb-4">
              <div className="flex-shrink-0 mt-1">
                <i className="fas fa-check-circle text-green-500 text-xl"></i>
              </div>
              <p className="ml-3 text-gray-700">{benefit}</p>
            </div>
          ))}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 font-semibold">
              <span className="text-2xl font-bold">70%</span> reduction in paperwork and administrative tasks
            </p>
          </div>
        </div>

        {/* Tenants */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">For Tenants</h3>
          {tenantBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start mb-4">
              <div className="flex-shrink-0 mt-1">
                <i className="fas fa-check-circle text-green-500 text-xl"></i>
              </div>
              <p className="ml-3 text-gray-700">{benefit}</p>
            </div>
          ))}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 font-semibold">
              <span className="text-2xl font-bold">90%</span> of tenants report higher satisfaction with blockchain-based rentals
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Benefits;
