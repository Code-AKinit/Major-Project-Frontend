import React from 'react';

const Header = () => (
  <header className="bg-white shadow-sm fixed w-full z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">Digi-Lease</span>
          </div>
          <nav className="ml-10 hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Home</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">How it Works</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">Contact</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium cursor-pointer whitespace-nowrap !rounded-button">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer whitespace-nowrap !rounded-button">Register</button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
