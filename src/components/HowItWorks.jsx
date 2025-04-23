import React from 'react';

const steps = [
  {
    step: '01',
    title: 'Register & Verify',
    description: 'Create an account and complete our secure blockchain-based verification process',
    image: 'https://public.readdy.ai/ai/img_res/b1c21690499234b293611b1385d9ce4f.jpg'
  },
  {
    step: '02',
    title: 'Create Contract',
    description: 'Generate a smart contract with customizable terms that meet your specific requirements',
    image: 'https://public.readdy.ai/ai/img_res/1a68734839bc196dda1cacd276df597f.jpg'
  },
  {
    step: '03',
    title: 'Manage Rental',
    description: 'Track payments, maintenance requests, and all rental activities through our platform',
    image: 'https://public.readdy.ai/ai/img_res/d2a2e482ccd0469fcdeb8f6975fe55b3.jpg'
  }
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Three simple steps to transform your rental experience with blockchain technology
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-lg p-6 relative">
            <div className="text-6xl font-bold text-blue-100 absolute top-0 right-4">{step.step}</div>
            <img 
              src={step.image}
              alt={step.title}
              className="w-full h-48 object-cover object-top rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
