import React from 'react';
import { CreditCard, AtSign, FileText } from 'lucide-react';

const IntegrationCategoriesSection = () => {
  const categories = [
    {
      id: 1,
      icon: <CreditCard className="text-blue-500" size={24} />,
      iconBg: "bg-blue-950",
      title: "Payment Processors",
      description: "Connect with popular payment gateways to process transactions securely and efficiently.",
      platforms: [
        { name: "Stripe" },
        { name: "PayPal" },
        { name: "Square" },
        { more: 10 }
      ]
    },
    {
      id: 2,
      icon: <AtSign className="text-green-500" size={24} />,
      iconBg: "bg-green-950",
      title: "Marketing Tools",
      description: "Integrate with email marketing, CRM, and social media platforms to streamline campaigns.",
      platforms: [
        { name: "Mailchimp" },
        { name: "HubSpot" },
        { name: "Facebook" },
        { more: 24 }
      ]
    },
    {
      id: 3,
      icon: <FileText className="text-purple-500" size={24} />,
      iconBg: "bg-purple-950",
      title: "Productivity Suites",
      description: "Connect with document management, calendar, and project tracking tools for seamless workflows.",
      platforms: [
        { name: "Google Workspace" },
        { name: "Office 365" },
        { name: "Slack" },
        { more: 18 }
      ]
    }
  ];

  return (
    <div className="w-full bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Integration Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {categories.map((category) => (
            <div key={category.id} className="bg-gray-800 rounded-lg p-6">
              <div className={`${category.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-gray-400 mb-6">{category.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {category.platforms.map((platform, index) => (
                  platform.more ? (
                    <div key={`more-${index}`} className="bg-gray-700 text-gray-300 text-sm py-1 px-3 rounded-full">
                      +{platform.more} more
                    </div>
                  ) : (
                    <div key={platform.name} className="bg-gray-700 text-gray-300 text-sm py-1 px-3 rounded-full">
                      {platform.name}
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to connect your business tools?</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Our integration experts can help you design the perfect connectivity solution for your unique workflow needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Schedule a Consultation
            </button>
            <button className="bg-transparent border border-gray-600 hover:border-gray-500 text-white font-medium py-3 px-6 rounded-md transition-colors">
              View API Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCategoriesSection;