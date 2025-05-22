import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const TeamPotentialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="bg-black  w-full overflow-hidden">
      <div className="flex flex-col px-6 rounded-2xl lg:flex-row">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 h-96 rounded-l-2xl lg:h-auto relative">
          <img 
            src="https://images.unsplash.com/photo-1719399184280-89cfdecba587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZmVhdHVyZXMlMjBzaG93Y2FzZSUyMGRldGFpbGVkJTIwZGVtb25zdHJhdGl2ZXxlbnwwfDB8fHwxNzQzMTYwMTI3fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80" 
            alt="Interactive digital art installation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white text-xs opacity-70">
            Photo by Jason Wang
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 bg-gray-800 rounded-r-2xl p-8 lg:p-12">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">Unleash Your Team's Potential</h2>
            
            <p className="text-gray-300 mb-8">
              Our platform integrates powerful collaboration tools with advanced analytics to 
              transform how your team works together and drives results.
            </p>
            
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className={`flex transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '200ms'}}>
                <div className="mr-4 mt-1">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Comprehensive Project Dashboards</h3>
                  <p className="text-gray-400">Get a bird's-eye view of all your projects with customizable KPIs and progress tracking.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className={`flex transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '400ms'}}>
                <div className="mr-4 mt-1">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Intelligent Resource Allocation</h3>
                  <p className="text-gray-400">AI-driven recommendations help assign the right people to the right tasks at the right time.</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className={`flex transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '600ms'}}>
                <div className="mr-4 mt-1">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-xs font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Integrated Communication Hub</h3>
                  <p className="text-gray-400">Centralize all project communications, files, and feedback in one accessible location.</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className={`mt-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '800ms'}}>
              <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                See it in action
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPotentialSection;