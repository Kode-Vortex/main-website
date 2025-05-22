import React from 'react';
import { CheckCircle, ChevronDown } from 'lucide-react';

const BusinessTransformationHero = () => {
  return (
    <div className="relative w-full bg-blue-950 text-white py-16 overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-950 to-blue-900 opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business Operations?
            </h1>
            
            <p className="text-lg mb-8 text-gray-200">
              Join thousands of companies leveraging our platform to streamline workflows, boost productivity, and drive growth.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-400" size={24} />
                <span>Free 14-day trial with full access to all features</span>
              </div>
              
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-400" size={24} />
                <span>No credit card required to start</span>
              </div>
              
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-400" size={24} />
                <span>Personalized onboarding and dedicated support</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors">
                Start Free Trial
              </button>
              
              <button className="bg-transparent border border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded-md transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
          
          {/* Right form */}
          <div className="lg:w-5/12 w-full">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Get Started Today</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Enter your name" 
                    className="w-full bg-gray-800/60 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="workEmail" className="block mb-2">Work Email</label>
                  <input 
                    type="email" 
                    id="workEmail" 
                    placeholder="Enter your work email" 
                    className="w-full bg-gray-800/60 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block mb-2">Company Name</label>
                  <input 
                    type="text" 
                    id="companyName" 
                    placeholder="Enter your company name" 
                    className="w-full bg-gray-800/60 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phoneNumber" 
                    placeholder="Enter your phone number" 
                    className="w-full bg-gray-800/60 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block mb-2">I'm interested in:</label>
                  <div className="relative">
                    <select 
                      id="interest" 
                      className="w-full bg-gray-800/60 border border-gray-700 rounded-md py-3 px-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Select an option</option>
                      <option>Workflow Automation</option>
                      <option>API Integration</option>
                      <option>Custom Solutions</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDown className="text-gray-400" size={20} />
                    </div>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Get Started
                </button>
                
                <p className="text-center text-sm text-gray-400">
                  By submitting this form, you agree to our {' '}
                  <a href="#" className="text-blue-400 hover:underline">Terms of Service</a> and {' '}
                  <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTransformationHero;