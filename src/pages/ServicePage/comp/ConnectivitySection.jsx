import React from 'react';
import { Zap, CircleCheck, Lock, Settings, ArrowRight } from 'lucide-react';

const ConnectivitySection = () => {
  const integrationPlatforms = [
    { name: "Facebook", icon: "/api/placeholder/32/32", bgColor: "bg-gray-700" },
    { name: "Twitter", icon: "/api/placeholder/32/32", bgColor: "bg-gray-700" },
    { name: "GitHub", icon: "/api/placeholder/32/32", bgColor: "bg-gray-700" },
    { name: "YouTube", icon: "/api/placeholder/32/32", bgColor: "bg-gray-700" },
    { name: "Discord", icon: "/api/placeholder/32/32", bgColor: "bg-gray-700" },
    { name: "Slack", icon: "/api/placeholder/32/32", bgColor: "bg-gray-700" },
    { name: "RSS", icon: "/api/placeholder/32/32", bgColor: "bg-gray-700" },
    { name: "LinkedIn", icon: "/api/placeholder/32/32", bgColor: "bg-gray-700" }
  ];

  const features = [
    {
      icon: <Zap className="text-blue-500" size={24} />,
      title: "API-First Architecture",
      description: "Connect with any tool or service through our robust API ecosystem, with detailed documentation and developer support."
    },
    {
      icon: <CircleCheck className="text-green-500" size={24} />,
      title: "Pre-Built Connectors",
      description: "Get started quickly with 100+ ready-to-use integrations for CRM, marketing, finance, collaboration, and productivity tools."
    },
    {
      icon: <Lock className="text-purple-500" size={24} />,
      title: "Enterprise-Grade Security",
      description: "Securely connect systems with advanced encryption, OAuth 2.0 support, and comprehensive audit logging."
    },
    {
      icon: <Settings className="text-yellow-500" size={24} />,
      title: "Custom Workflow Builder",
      description: "Create custom integrations with our no-code workflow builder, enabling automation across your entire tech stack."
    }
  ];

  return (
    <div className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8">Powerful Connectivity For Your Business</h2>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a href="#" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                Explore Integrations
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8aW50ZWdyYXRpb24lMjBwcm9mZXNzaW9uYWx8ZW58MHwwfHx8MTc0MzE4ODg3OHww&ixlib=rb-4.0.3&q=80&w=1080?q=80" 
                alt="People working on integration" 
                className="rounded-lg w-full"
              />
              
              <div className="absolute bottom-0 right-0 bg-gray-800 bg-opacity-90 p-4 rounded-tl-lg rounded-br-lg">
                <div className="mb-2 text-sm text-gray-300">Integrates with 100+ platforms</div>
                <div className="grid grid-cols-4 gap-2">
                  {integrationPlatforms.slice(0, 8).map((platform, index) => (
                    <div key={index} className={`${platform.bgColor} p-2 rounded-md flex items-center justify-center`}>
                      <img src={platform.icon} alt={platform.name} className="w-6 h-6" />
                    </div>
                  ))}
                </div>
                <div className="mt-2 text-right">
                  <a href="#" className="text-blue-400 text-sm hover:underline">View all integration partners</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectivitySection;