import React, { useEffect, useState } from 'react';
import { BarChart3, Fingerprint, Users } from 'lucide-react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-8xl mx-auto">
        {/* Heading Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Powerful Features That Drive Results</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with intuitive design to help your business thrive.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Analytics Card */}
          <div className={`bg-gray-900 rounded-lg p-6 h-80  transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{transitionDelay: '200ms'}}>
            <div className="bg-blue-900/50 w-12 h-12 mt-2 rounded flex items-center justify-center ">
              <BarChart3 className="text-blue-400 w-6 h-6" />
            </div>
            
            <h3 className="text-white text-2xl font-bold my-2">Advanced Analytics</h3>
            <p className="text-gray-400 mb-3">
              Gain deep insights into your business performance with real-time data visualization and predictive analysis.
            </p>
            
            <ul className="text-lg">
              <li className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">✓</div>
                <span className="text-gray-300">Customizable dashboards</span>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">✓</div>
                <span className="text-gray-300">Intelligent forecasting</span>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">✓</div>
                <span className="text-gray-300">Automated reporting</span>
              </li>
            </ul>
          </div>
          
          {/* Automation Card */}
          <div className={`bg-gray-900 rounded-lg p-6 h-80 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{transitionDelay: '400ms'}}>
            <div className="bg-purple-900/50 w-12 h-12 rounded flex items-center justify-center">
              <Fingerprint className="text-purple-400 w-6 h-6" />
            </div>
            
            <h3 className="text-white text-2xl font-bold my-2">AI-Powered Automation</h3>
            <p className="text-gray-400 mb-6">
              Streamline workflows and eliminate repetitive tasks with intelligent automation solutions.
            </p>
            
            <ul className="text-lg">
              <li className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">✓</div>
                <span className="text-gray-300">Smart workflow builder</span>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">✓</div>
                <span className="text-gray-300">Process optimization</span>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">✓</div>
                <span className="text-gray-300">Time-saving triggers</span>
              </li>
            </ul>
          </div>
          
          {/* Collaboration Card */}
          <div className={`bg-gray-900 rounded-lg p-6 h-80 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{transitionDelay: '600ms'}}>
            <div className="bg-green-900/50 w-12 h-12 rounded flex items-center justify-center ">
              <Users className="text-green-400 w-6 h-6" />
            </div>
            
            <h3 className="text-white text-2xl font-bold my-2">Team Collaboration</h3>
            <p className="text-gray-400 mb-6">
              Enable seamless teamwork with integrated communication and project management tools.
            </p>
            
            <ul className="text-lg">
              <li className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">✓</div>
                <span className="text-gray-300">Real-time messaging</span>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">✓</div>
                <span className="text-gray-300">Document sharing</span>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">✓</div>
                <span className="text-gray-300">Task assignment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;