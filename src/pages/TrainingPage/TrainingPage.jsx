import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import AlgoAcharya from "./AlgoAcharya";
import LAKSHYARITHM from "./LAKSHYARITHM";

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const TrainingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className="flex relative h-[40rem] bg-cover bg-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="absolute w-[80%] mt-24 ml-12 flex flex-col justify-center items-center px-4 md:px-44 space-y-6">
          <div className="w-full flex justify-end">
            <h1 className="text-4xl md:text-7xl font-bold text-white text-center">
              DISCOVER THE CAREER TO SKILL up YOURSELF
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white">
            Unlock the doors to the future career options
          </p>
          <div className="flex justify-center items-center space-x-3">
            <button className="bg-[#056777] rounded-full px-6 py-2 text-lg md:text-2xl font-semibold text-white">
              Start your journey
            </button>
            <IoIosArrowRoundForward className="text-4xl md:text-7xl text-white" />
          </div>
        </div>
        <div className="absolute right-0 flex justify-end w-[30%]">
          {/* First Triangle */}
          <motion.div
            className="absolute top-0 right-0 bottom-0 w-[21rem] h-[38rem] bg-[#056777] opacity-80"
            style={{ clipPath: "polygon(100% 0, 0 40%, 100% 100%)" }}
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 0.8, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            1
          </motion.div>

          {/* Second Triangle Overlapping */}
          <motion.div
            className="absolute top-12 right-0 bottom-0 w-[21rem] h-[40rem] bg-[#056777] opacity-80"
            style={{ clipPath: "polygon(100% 0, 0 40%, 100% 100%)" }}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 0.8, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            3
          </motion.div>
        </div>
        <div className="absolute bottom-0 flex flex-col items-center mx-auto left-1/2 transform -translate-x-1/2">
          <div className="w-full md:w-[80rem] h-6 bg-[#056777]"></div>
          <div className="w-full md:w-[82rem] h-7 bg-[#54677B]"></div>
        </div>
      </motion.div>

      {/* Trainings We Offer Section */}
      <motion.div 
        className="bg-[#181739] mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h1 className="text-[#CF9274] font-mono text-3xl font-semibold md:text-5xl py-12 md:py-16 text-center ">
          TRAININGS WE OFFER
        </h1>

        <div className="flex flex-col md:flex-row pb-10 justify-center items-center md:space-x-24 space-y-8 md:space-y-0">
          <AlgoAcharya />
          <LAKSHYARITHM />
        </div>
        <div className="flex justify-center items-center pb-16 pt-6 space-x-6">
          <h1 className="text-white text-lg md:text-xl">Want to know more? Reach out to us</h1>
          <button className="px-4 py-2 bg-[#CF9274] rounded-full font-bold">
            CONTACT US
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default TrainingPage;
