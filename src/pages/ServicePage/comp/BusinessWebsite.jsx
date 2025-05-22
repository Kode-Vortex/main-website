import React, { useState } from 'react';

const ServiceTab = ({ title, isActive, onClick }) => (
  <button
    className={`px-4 py-2 text-gray-300 hover:text-white ${
      isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''
    }`}
    onClick={onClick}
  >
    {title}
  </button>
);

const ServiceIcon = ({ icon }) => {
  const icons = {
    eye: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    chart: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    calendar: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    lightning: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    users: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    code: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    support: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    bell: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    refresh: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  };
  
  return icons[icon] || null;
};

const ServiceItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 mb-8">
    <div className="mt-1">
      <ServiceIcon icon={icon} />
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const ActionButton = ({ text, color }) => {
  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    purple: "bg-purple-600 hover:bg-purple-700"
  };
  
  return (
    <button className={`${colorClasses[color]} text-white px-6 py-3 rounded flex items-center`}>
      {text}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  );
};

const ConsultingContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">Strategic Business Consulting</h2>
      <p className="text-gray-400 mb-8">
        Our expert consultants work with you to identify opportunities, solve challenges, and create
        roadmaps for success.
      </p>
      
      <ServiceItem 
        icon="eye" 
        title="Business Analysis" 
        description="Comprehensive assessment of your operations, processes, and technology infrastructure."
      />
      
      <ServiceItem 
        icon="chart" 
        title="Strategy Development" 
        description="Custom roadmaps that align technology investments with your business objectives."
      />
      
      <ServiceItem 
        icon="calendar" 
        title="Project Planning" 
        description="Detailed implementation plans with clear milestones, resources, and timelines."
      />
      
      <div className="mt-6">
        <ActionButton text="Schedule a Consultation" color="blue" />
      </div>
    </div>
    
    <div className="hidden md:block">
      <div className="relative h-full w-full">
        <img 
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8c2VydmljZXMlMjBvZmZlcmluZyUyMHByb2Zlc3Npb25hbCUyMHNlcnZpY2UlMjBmb2N1c2VkfGVufDB8MHx8fDE3NDMxNjA2MTF8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80" 
          alt="Business consultant in suit adjusting tie" 
          className="rounded-lg object-cover h-full w-full"
        />
        <div className="absolute bottom-2 right-2 text-xs text-white opacity-70">
          Photo by Hunters Race
        </div>
      </div>
    </div>
  </div>
);

const ImplementationContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">Seamless Implementation Services</h2>
      <p className="text-gray-400 mb-8">
        Our technical teams ensure smooth deployment and integration of solutions that work with your
        existing systems.
      </p>
      
      <ServiceItem 
        icon="lightning" 
        title="System Integration" 
        description="Connect and harmonize multiple systems for unified operations and data flow."
      />
      
      <ServiceItem 
        icon="users" 
        title="Team Training" 
        description="Comprehensive knowledge transfer ensuring your team can maximize platform benefits."
      />
      
      <ServiceItem 
        icon="code" 
        title="Custom Development" 
        description="Tailored solutions built to address your specific business challenges and requirements."
      />
      
      <div className="mt-6">
        <ActionButton text="Discuss Your Project" color="green" />
      </div>
    </div>
    
    <div className="hidden md:block">
      <div className="relative h-full w-full">
        <img 
          src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8c2VydmljZXMlMjBvZmZlcmluZyUyMHByb2Zlc3Npb25hbCUyMHNlcnZpY2UlMjBmb2N1c2VkfGVufDB8MHx8fDE3NDMxNjA2MTF8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80" 
          alt="Person holding a coffee mug that says LIKE A BOSS" 
          className="rounded-lg object-cover h-full w-full"
        />
        
      </div>
    </div>
  </div>
);

const SupportContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">Dedicated Ongoing Support</h2>
      <p className="text-gray-400 mb-8">
        Our support teams ensure your systems run smoothly with proactive monitoring and rapid
        response to issues.
      </p>
      
      <ServiceItem 
        icon="support" 
        title="24/7 Technical Support" 
        description="Round-the-clock assistance ensuring your business operations continue without disruption."
      />
      
      <ServiceItem 
        icon="bell" 
        title="Proactive Monitoring" 
        description="Continuous system oversight identifying and resolving potential issues before they impact you."
      />
      
      <ServiceItem 
        icon="refresh" 
        title="Regular Updates" 
        description="Scheduled maintenance and feature enhancements keeping your systems secure and current."
      />
      
      <div className="mt-6">
        <ActionButton text="Explore Support Plans" color="purple" />
      </div>
    </div>
    
    <div className="hidden md:block">
      <div className="relative h-full w-full">
        <img 
          src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8c2VydmljZXMlMjBvZmZlcmluZyUyMHByb2Zlc3Npb25hbCUyMHNlcnZpY2UlMjBmb2N1c2VkfGVufDB8MHx8fDE3NDMxNjA2MTF8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80" 
          alt="Business professional adjusting tie" 
          className="rounded-lg object-cover h-full w-full"
        />
        <div className="absolute bottom-2 right-2 text-xs text-white opacity-70">
          Photo by Ben Rosett
        </div>
      </div>
    </div>
  </div>
);

const BusinessWebsite = () => {
  const [activeTab, setActiveTab] = useState('consulting');
  
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8 border-b border-gray-800">
          <ServiceTab 
            title="Consulting" 
            isActive={activeTab === 'consulting'} 
            onClick={() => setActiveTab('consulting')}
          />
          <ServiceTab 
            title="Implementation" 
            isActive={activeTab === 'implementation'} 
            onClick={() => setActiveTab('implementation')}
          />
          <ServiceTab 
            title="Support" 
            isActive={activeTab === 'support'} 
            onClick={() => setActiveTab('support')}
          />
        </div>
        
        {/* Content Area */}
        <div className="mt-8">
          {activeTab === 'consulting' && <ConsultingContent />}
          {activeTab === 'implementation' && <ImplementationContent />}
          {activeTab === 'support' && <SupportContent />}
        </div>
      </div>
    </div>
  );
};

export default BusinessWebsite;