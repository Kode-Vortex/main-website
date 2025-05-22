import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "What is included in the free trial?",
      answer: "Our 14-day free trial includes full access to all platform features with no limitations. You'll be able to create projects, use all automation tools, access analytics, and test integrations. There's no credit card required to start your trial."
    },
    {
      question: "How does your pricing work?",
      answer: "Contact us for pricing details."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Yes, our platform supports integration with many popular tools and services."
    },
    {
      question: "How secure is your platform?",
      answer: "We implement industry-standard security measures to protect your data."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 customer support through chat, email, and phone."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time with no penalties."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl">Find answers to common questions about our platform and services.</p>
      </div>

      <div className="container mx-auto px-4 flex flex-col space-x-10 lg:flex-row">
        {/* FAQ List */}
        <div className="w-full lg:w-1/2">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl font-medium">{item.question}</span>
                {openIndex === index ? 
                  <ChevronUp className="h-6 w-6 text-blue-400" /> : 
                  <ChevronDown className="h-6 w-6 text-blue-400" />
                }
              </button>
              {openIndex === index && (
                <div className="pb-6 pr-12">
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="hidden lg:block lg:w-1/2">
          <div className="h-full flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZmFxJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMxNjAzNTJ8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                alt="Professional in suit adjusting tie"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default FAQSection;