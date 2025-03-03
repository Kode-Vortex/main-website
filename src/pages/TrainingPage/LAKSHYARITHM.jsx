import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const LAKSHYARITHM = () => {
  return (
    <motion.div 
      className="max-w-md bg-[#1B2B4B] relative rounded-3xl p-6 text-white shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={cardVariants}
    >
      <h1 className="text-3xl text-center underline font-bold uppercase tracking-wider">
        LAKSHYARITHM
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-6">
        <div className="w-72 h-28 bg-gray-300 rounded-full"></div>
        <div>
          <p className="text-lg text-gray-300 mt-1">
            A premium training program designed for comprehensive career and placement preparation.
          </p>
        </div>
      </div>

      <div className="bg-[#CF9274] py-1 px-10 w-fit rounded-full mb-6 ml-6">
        <p className="text-md text-black">Duration: 5 or 10 days</p>
      </div>

      <div className="mb-6 relative">
        <div className="p-3 rounded-lg mb-4 bg-transparent">
          <h2 className="text-lg absolute left-0 px-12 rounded-r-full py-1 bg-[#056777] font-semibold mb-3">
            Technology
          </h2>
          <div className="flex flex-col space-y-1 font-semibold items-center justify-center text-xl rounded-l-full mt-16 bg-[#4E4C7E] w-96 h-28 px-1 absolute right-0">
            <div className="flex space-x-5 w-[20rem]">
              <p>• Python</p>
              <p>• Advanced Python</p>
            </div>
            <div className="flex space-x-5 w-[20rem]">
              <p>• Machine Learning</p>
              <p>• MERN Stack</p>
            </div>
            <div className="flex space-x-5 w-[20rem]">
              <p>• Cybersecurity</p>
              <p>• Features</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-48 relative">
        <h2 className="text-lg absolute left-0 px-12 rounded-r-full py-1 bg-[#056777] font-semibold">
          Features
        </h2>
        <div className="space-y-4 text-2xl pt-[50px]">
          <div className="flex items-start gap-2">
            <span className="text-[#2A9D8F] mt-1">✓</span>
            <div>
              <h3 className="font-medium">Hands-on learning</h3>
              <p className="text-sm text-gray-300">
                Tailored to the student's chosen career path.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <span className="text-[#2A9D8F] mt-1">✓</span>
            <div>
              <h3 className="font-medium">Placement prep:</h3>
              <ul className="text-sm text-gray-300 list-inside space-y-1">
                <li>• Comprehensive DSA practice (Leetcode-based)</li>
                <li>• Aptitude training</li>
                <li>• Mock interviews</li>
                <li>• Ensure job readiness</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-[#2A9D8F] mt-1">✓</span>
            <div>
              <h3 className="font-medium">Premium addition:</h3>
              <p className="text-sm text-gray-300">
                In-depth coverage of fundamental subjects from semester.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LAKSHYARITHM;
