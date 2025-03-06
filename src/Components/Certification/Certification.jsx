import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Certification.css";
import image from "./certificte.jpg";

const Certification = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Unique floating badges animation
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
        yoyo: Infinity,
      }
    }),
    hover: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  // Unique shining effect animation
  const shineVariants = {
    initial: { x: "-100%", opacity: 0 },
    animate: {
      x: "100%",
      opacity: [0, 0.5, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  // Badge data - unique element
  const badges = [
    { id: 1, name: "Career Ready" },
    { id: 2, name: "Industry Verified" },
    { id: 3, name: "Expert Designed" },
  ];

  return (
    <div className="certification-wrapper relative py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <motion.div
        ref={ref}
        className="certification-content max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Image Section with 3D effect */}
        <div className="certificate-image w-full md:w-1/2 relative perspective-effect">
          <motion.div
            className="relative"
            animate={{ rotateY: isHovered ? 15 : 0, rotateX: isHovered ? -5 : 0 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.img
              src={image}
              alt="certificate"
              className="w-full rounded-lg shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
            
            {/* Unique shining effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 pointer-events-none"
              variants={shineVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className="certificate-text w-full md:w-1/2 relative">
          <motion.h1
            className="text-3xl md:text-4xl text-white lg:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          >
            Build your career and <br className="hidden md:block" /> achieve a certificate to{" "}
            <br className="hidden md:block" /> enhance your resume
          </motion.h1>

          {/* Unique element: Floating badge cloud */}
         
        </div>
      </motion.div>
      
      {/* Decorative animated dots - unique element */}
       <motion.div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-20 hidden md:block">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-blue-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Certification;