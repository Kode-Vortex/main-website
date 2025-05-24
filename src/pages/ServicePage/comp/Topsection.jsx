import { useEffect, useState } from 'react';

const TopSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative  overflow-hidden justify-evenly bg-gray-800">
      {/* Background with business person */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bWFpbiUyMHZpZXclMjBmZWF0dXJlZCUyMGltYWdlJTIwcHJvZmVzc2lvbmFsJTIwaGlnaCUyMHF1YWxpdHklMjBmZWF0dXJlZHxlbnwwfDB8fHwxNzQzMTU5NDUyfDA&ixlib=rb-4.0.3&q=80&w=1080?q=80')] bg-cover bg-center opacity-60"></div>
      
      {/* Content container */}
      <div className="relative z-10 container   px-6 py-16 flex flex-col lg:flex-row lg:justify-evenly items-start  lg:items-center min-h-screen">
        {/* Left side - Text content */}
        <div className={`w-full transition-all  duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-white text-5xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-blue-400">Transform</span> Your<br />
            Business with AI-<br />
            Powered Solutions
          </h1>
          
          <p className="text-gray-300 text-lg mb-10 max-w-lg">
            Streamline operations, boost productivity, and drive growth with our
            cutting-edge software platform designed for modern businesses.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <button className={`bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              Get Free Demo
            </button>
            <button className={`border border-gray-500 hover:border-gray-300 text-white font-medium py-3 px-8 rounded transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              Explore Features
            </button>
          </div>
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <div className="flex items-center">
              <div className="flex -space-x-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxt_0PJ8T-KXXZa6YvyLG9iwdnCjpy-VfAQ&s" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxt_0PJ8T-KXXZa6YvyLG9iwdnCjpy-VfAQ&s" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxt_0PJ8T-KXXZa6YvyLG9iwdnCjpy-VfAQ&s" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxt_0PJ8T-KXXZa6YvyLG9iwdnCjpy-VfAQ&s" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-sm">Trusted by 2,000+ businesses</p>
                <div className="flex text-yellow-400 mt-1">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Dashboard mockup */}
        <div className={`w-full  mt-12 lg:mt-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
          <div className="relative w-[45rem] h-[30rem] ">
            {/* Dashboard frame */}
            <div className="bg-gray-800 h-full bg-opacity-80 rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm">
              {/* Browser-like header */}
              <div className="bg-gray-800 px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-right text-gray-300 text-sm">KodeVortex</div>
              </div>
              
              {/* Dashboard content */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="col-span-4 h-16 bg-gray-700 rounded-md animate-pulse"></div>
                  
                  <div className="col-span-3 h-32 bg-gray-700 rounded-md animate-pulse"></div>
                  <div className="col-span-1 h-32 bg-gray-700 rounded-md animate-pulse"></div>
                  
                  <div className="col-span-1 h-24 bg-gray-700 rounded-md animate-pulse"></div>
                  <div className="col-span-1 h-24 bg-gray-700 rounded-md animate-pulse"></div>
                  <div className="col-span-2 h-24 bg-gray-700 rounded-md animate-pulse"></div>
                  
                  <div className="col-span-3 h-32 bg-gray-700 rounded-md animate-pulse"></div>
                  <div className="col-span-1 h-32 bg-gray-700 rounded-md animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Green dot */}
            <div className={`absolute -bottom-5 -left-5 w-12 h-12 bg-green-400 opacity-15 rounded-full transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{ transitionDelay: '800ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;