import React from 'react';

const HeroSection = ({ activeTab, setActiveTab }) => (
  <section className="pt-24 relative overflow-hidden" style={{ minHeight: '700px' }}>
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img 
        src="https://public.readdy.ai/ai/img_res/12bc5c9effb4db620636adcd7ec0355e.jpg" 
        alt="Blockchain background" 
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Blockchain-Powered Rental Agreements for Modern India
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Secure, transparent, and hassle-free rental contracts with blockchain technology. Say goodbye to paperwork and disputes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setActiveTab('landlord')}
              className={`px-6 py-3 text-lg font-medium rounded-md transition duration-300 cursor-pointer whitespace-nowrap !rounded-button ${activeTab === 'landlord' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              For Landlords
            </button>
            <button 
              onClick={() => setActiveTab('tenant')}
              className={`px-6 py-3 text-lg font-medium rounded-md transition duration-300 cursor-pointer whitespace-nowrap !rounded-button ${activeTab === 'tenant' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              For Tenants
            </button>
          </div>
          <div className="mt-10 flex items-center space-x-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">10,000+</p>
              <p className="text-gray-600">Contracts</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">25,000+</p>
              <p className="text-gray-600">Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">50+</p>
              <p className="text-gray-600">Cities</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src="https://public.readdy.ai/ai/img_res/5d89af9459571252dc0f2f38c4f30e46.jpg" 
            alt="Digital Contract Visualization" 
            className="max-w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
