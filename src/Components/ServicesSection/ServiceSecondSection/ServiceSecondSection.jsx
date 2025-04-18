import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MoveLeft, MoveRight } from 'lucide-react';

import logodesign from "./Logo_design.png";
import "./ServiceSecondSection.css";

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "John Doe",
    designation: "CEO, Company",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUMidMu4XnaERnDCx5DgUJ7Nbnui6Jswf5Ng&s",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Jane Smith",
    designation: "CTO, Company",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpzcLgdWnd1tYtqFuvi6DxtaL1LTu0KrRKw&s",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Alice Johnson",
    designation: "Designer, Company",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHUpC1aE1uXPfF3QaUmI6Bn4P8Lmi_yxoYw&s",
  },
];

const ServiceSecondSection = () => {
  const items = [
    "Expertise in Current and Emerging Technologies:",
    "Robust Curriculum and Experienced Instructors/Developers",
    "Strong Client and Community Engagement:",
    "Emphasis on Building a Sustainable Startup Ecosystem:",
    "Skills Gap Analysis and Targeted Training Recommendations:",
  ];

  const radius = 300;
  const duration = 2;

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  return (
    <motion.div
      ref={ref}
      className="flex mb-4 justify-center items-center text-white relative px-4"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Mobile View */}
      <div className="md:hidden w-full mb-10">
        <div className="max-w-sm mx-auto antialiased font-sans px-4">
          <div className="relative grid grid-cols-1 gap-20">
            {/* Logo */}
            <div className="flex justify-center">
              <img src={logodesign} className="w-40 z-10" alt="logo" />
            </div>

            {/* Circular Items */}
            <div className="space-y-6">
              {items.map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative w-full"
                >
                  <div className="relative w-full h-32 rounded-full overflow-hidden">
                    {/* Dark background */}
                    <div className="absolute inset-1 bg-slate-900 rounded-full z-10"></div>
                    
                    {/* Circular snake border */}
                    <div className="circularBorder1"></div>
                    
                    {/* Text content */}
                    <div className="absolute inset-1 z-20 flex items-center justify-center px-4 text-center">
                      {text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop View */}
      <div className="hidden h-[50rem]  pr-16 md:flex justify-center items-center w-full">
        <img src={logodesign} className="w-40 md:w-60 z-10" alt="logo" />
        
        {items.map((text, index) => {
          const angle = (index / items.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          
          return (
            <motion.div
              key={index}
              className="absolute w-32 h-32 md:w-64 md:h-64 text-lg text-center text-white p-4 rounded-full flex justify-center  items-center overflow-hidden"
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, x, y }}
              transition={{ delay: index * duration, duration: duration }}
            >
              {/* Main container with relative positioning */}
              <div className="relative w-full h-full rounded-full">
                {/* Dark background */}
                <div className="absolute inset-1 bg-slate-900 rounded-full z-10"></div>
                
                {/* Circular snake border */}
                <div className="circularBorder"></div>
                
                {/* Text content */}
                <div className="absolute inset-1 z-20 flex items-center justify-center px-3">
                  {text}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ServiceSecondSection;