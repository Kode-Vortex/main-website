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
      className="flex mb-4 justify-center items-center  text-white relative px-4"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="md:hidden w-full mb-10">
        <div className="max-w-sm mx-auto antialiased font-sans px-4">
          <div className="relative grid grid-cols-1 gap-20">
            <div>
              <div className="relative h-80 w-full">
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.src}
                      initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                      animate={{ opacity: isActive(index) ? 1 : 0.7, scale: isActive(index) ? 1 : 0.95 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <img
                        src={testimonial.src}
                        alt={testimonial.name}
                        className="h-full w-full rounded-3xl object-cover object-center"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex justify-between flex-col py-4">
              <div className="flex gap-4 pt-1">
                <button
                  onClick={handlePrev}
                  className="h-7 w-7 rounded-full bg-neutral-800 flex items-center justify-center group/button"
                >
                  <MoveLeft className="h-5 w-5 text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-7 w-7 rounded-full bg-neutral-800 flex items-center justify-center group/button"
                >
                  <MoveRight className="h-5 w-5 text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden h-[50rem] md:flex justify-center items-center w-full">
        <img src={logodesign} className="w-40 md:w-60 z-10" alt="logo" />
        
        {items.map((text, index) => {
          const angle = (index / items.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          
          return (
            <motion.div
              key={index}
              className="absolute w-32 h-32 md:w-64 md:h-64 text-lg text-center text-white p-4 rounded-full flex justify-center items-center overflow-hidden"
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