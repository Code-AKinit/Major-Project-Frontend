import React from 'react';

const CTA = () => (
  <section className="py-16 bg-blue-600">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">
        Ready to Transform Your Rental Experience?
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
        Join thousands of landlords and tenants who are already benefiting from our blockchain-powered rental platform.
      </p>
      <button className="bg-white text-blue-600 px-8 py-4 text-lg font-bold rounded-md hover:bg-blue-50 transition duration-300 shadow-lg cursor-pointer whitespace-nowrap !rounded-button">
        Start Free Trial
      </button>
      <p className="mt-4 text-blue-100">No credit card required. 14-day free trial.</p>
    </div>
  </section>
);

export default CTA;
