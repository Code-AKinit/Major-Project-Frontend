import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-xl font-bold mb-4">Digi-Lease</h3>
          <p className="text-gray-400 mb-4">
            Revolutionizing rental agreements with blockchain technology across India.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
            <li><a href="#features" className="text-gray-400 hover:text-white transition duration-300">Features</a></li>
            <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition duration-300">How it Works</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cookie Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Data Protection</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <i className="fas fa-map-marker-alt mt-1 mr-2 text-gray-400"></i>
              <span className="text-gray-400">123 Tech Park, Bengaluru, Karnataka, India</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone-alt mr-2 text-gray-400"></i>
              <span className="text-gray-400">+91 98765 43210</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope mr-2 text-gray-400"></i>
              <span className="text-gray-400">info@digi-lease.com</span>
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
            <div className="flex">
              <input 
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-none"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300 cursor-pointer whitespace-nowrap !rounded-button">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400">© 2025 Digi-Lease. All rights reserved.</p>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <div className="flex items-center text-gray-400">
            <i className="fab fa-cc-visa text-xl mr-2"></i>
            <i className="fab fa-cc-mastercard text-xl mr-2"></i>
            <i className="fab fa-cc-paypal text-xl"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
