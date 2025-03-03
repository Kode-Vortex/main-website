import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Certification.css";
import image from "./certificte.jpg";
import { LampContainer, LampDemo } from "./LampContainer"; // Ensure correct import path

const Certification = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="relative  pt-16  h-[35rem]">
      {/* Lamp Effect Above */}
      <LampContainer>

      {/* Certification Section */}
      <motion.div
        ref={ref}
        className="flex mt-28 flex-col md:flex-row px-4 md:px-20 py-12 md:py-16"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Image Section */}
        <div className="w-1/2 flex justify-center items-center">
          <motion.img
            src={image}
            className="w-full max-w-[500px] md:w-4/5"
            alt="certificate.png"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
        </div>

        {/* Text Section */}
        <div className="w-1/2 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="mt-8 text-white py-4 text-center text-3xl font-medium tracking-tight md:text-5xl"
          >
            Build your career and <br /> achieve a certificate to <br /> enhance
            your resume
          </motion.h1>
        </div>
      </motion.div>
      </LampContainer>
    </div>
  );
};

export default Certification;
