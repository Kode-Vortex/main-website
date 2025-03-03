import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SuccessStories.css";

const SuccessStories = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    arrows: false,
  };

  // Updated content with real testimonials
  const stories = [
    "Working with this team transformed our business completely. Their innovative approach helped us increase customer engagement by 45% within just three months. The results exceeded our expectations, and we're now expanding our collaboration to other departments.",
    "I was skeptical at first, but the results speak for themselves. Our conversion rates jumped by 32% after implementing the recommended strategies. Their customer support team was always available to answer questions and guide us through the process.",
    "What impressed me most was their attention to detail and commitment to our success. They took the time to understand our unique challenges and developed customized solutions that perfectly addressed our needs. I highly recommend their services to anyone looking to grow their business.",
  ];

  // Hook to trigger animation when in view
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  // Variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 }
    },
  };

  // Variants for the header
  const headerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  // Variants for the slider container with new animations
  const sliderVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.01, 0.9] 
      } 
    },
    hover: {
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  // Variants for the side graphic with enhanced animations
  const sideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.01, 0.9] 
      } 
    },
    hover: { 
      scale: 1.05, 
      filter: "brightness(1.1)",
      transition: { duration: 0.4 } 
    },
  };

  // Variants for connecting bridge
  const bridgeVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { 
        duration: 0.8, 
        delay: 1.2,
        ease: "easeOut" 
      } 
    }
  };

  // Variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // Border animation variants
  const borderVariants = {
    initial: { pathLength: 0 },
    animate: { 
      pathLength: 1, 
      transition: { duration: 1.5, ease: "easeInOut" } 
    }
  };

  // Enhanced background variants
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 }
    }
  };

  return (
    <motion.div 
      className=" pb-12 md:pb-24 relative overflow-hidden" // Updated to a rich deep blue
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Enhanced animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br  z-0" // Rich gradient background
        variants={backgroundVariants}
      />
      
      {/* Animated constellation background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-30 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stars" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="white" opacity="0.5" />
              <circle cx="25" cy="60" r="1" fill="white" opacity="0.7" />
              <circle cx="40" cy="30" r="1" fill="white" opacity="0.4" />
              <circle cx="60" cy="15" r="1" fill="white" opacity="0.6" />
              <circle cx="75" cy="45" r="1" fill="white" opacity="0.5" />
              <circle cx="90" cy="80" r="1" fill="white" opacity="0.8" />
            </pattern>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars)" />
          
          {/* Enhanced animated path connecting the sections */}
          <motion.path 
            d="M 35% 48% C 40% 48%, 45% 48%, 65% 48%"
            stroke="url(#bgGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          />
        </svg>
      </motion.div>
      
      {/* Enhanced aurora-like glow effect */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-purple-600/10 via-blue-500/15 to-pink-500/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={inView ? { 
          opacity: [0, 0.5, 0.2, 0.6, 0],
          scale: [0.8, 1, 0.9, 1.1, 0.8],
        } : { opacity: 0 }}
        transition={{ 
          delay: 0.5,
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Northern lights-like waves in background */}
      <motion.div
  className="absolute bottom-0 left-0 w-full h-2/3 opacity-20 overflow-hidden z-0"
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 0.2 } : { opacity: 0 }}
  transition={{ delay: 0.8, duration: 1.2 }}
>
  {[...Array(5)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute h-40 left-0 right-0"
      style={{
        bottom: `${i * 15}%`,
        background: `linear-gradient(90deg, rgba(139, 92, 246, ${0.1 - i * 0.01}) 0%, rgba(236, 72, 153, ${0.15 - i * 0.01}) 50%, rgba(99, 102, 241, ${0.1 - i * 0.01}) 100%)`,
        borderRadius: "50% 50% 0 0",
        transformOrigin: "bottom",
      }}
      animate={{
        scaleY: [1, 1.2, 1],
        y: [0, -10, 0],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{
        duration: 8 + i,
        repeat: Infinity,
        repeatType: "reverse",
        delay: i * 0.5,
      }}
    />
  ))}
</motion.div>


      {/* Floating particles */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              background: i % 3 === 0 ? "#8B5CF6" : i % 3 === 1 ? "#6366F1" : "#EC4899",
            }}
            animate={{
              y: [0, Math.random() * -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>

      {/* Header with new animated underline */}
      <div className="relative z-10">
        <motion.h1 
          className="success-head font-bold text-center tracking-wider pb-6 md:pb-12 pt-8 text-center text-white"
          variants={headerVariants}
        >
          Success Stories
        </motion.h1>
        
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 mx-auto mb-6 md:mb-12" // Enhanced gradient
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? { width: 96, opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Main Content with connected background */}
      <div className="flex flex-col lg:flex-row justify-center items-center relative px-4 md:px-8 lg:gap-0 z-10">
        {/* Enhanced radial glow connector */}
        <motion.div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-48 rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.1) 40%, rgba(0, 0, 0, 0) 70%)",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { 
            opacity: [0, 1, 0.6, 0.9, 0.7], 
            scale: [0.8, 1.1, 0.9, 1, 0.95],
          } : { opacity: 0, scale: 0.5 }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.8,
          }}
        />

        {/* Slider Container with enhanced animations */}
        <motion.div 
          className="relative bg-[#2c2c53] flex justify-center items-center h-64 md:h-96 w-full lg:w-[35%] mb-8 lg:mb-0 rounded-lg overflow-hidden z-10" // Updated background color
          variants={sliderVariants}
          whileHover="hover"
        >
          {/* Animated Border Lines using SVG for smoother animation */}
          <svg className="absolute inset-0 w-full h-full">
            <motion.path 
              d="M 8 8 L 92% 8" 
              stroke="#8B5CF6" // Updated border color
              strokeWidth="3"
              fill="none"
              variants={borderVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              transition={{ delay: 0.5 }}
            />
            
            <motion.path 
              d="M 8 8 L 8 92%" 
              stroke="#8B5CF6" // Updated border color
              strokeWidth="3"
              fill="none"
              variants={borderVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              transition={{ delay: 0.7 }}
            />
            
            <motion.path 
              d="M 92% 92% L 8% 92%" 
              stroke="#EC4899" // Updated border color
              strokeWidth="3"
              fill="none"
              variants={borderVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              transition={{ delay: 0.9 }}
            />
            
            <motion.path 
              d="M 92% 92% L 92% 8%" 
              stroke="#EC4899" // Updated border color
              strokeWidth="3"
              fill="none"
              variants={borderVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              transition={{ delay: 1.1 }}
            />
          </svg>

          {/* Slider with new text animations */}
          <div className="relative z-10 w-full md:w-[25rem] px-6 flex justify-center items-center">
            <Slider className="w-full" {...settings}>
              {stories.map((story, index) => (
                <motion.div 
                  key={index}
                  variants={textVariants}
                  className="px-4 py-2"
                >
                  <p className="text-center text-white text-sm md:text-lg"> {/* Updated text color */}
                    {story}
                  </p>
                  <div className="flex justify-center mt-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </motion.div>

        {/* Enhanced connecting bridge between the two sections */}
        <div className="hidden lg:block relative z-10">
          {/* Animated energy pulse effect */}
          <motion.div
            className="absolute left-12 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-purple-500/10 blur-xl"
            animate={{
              scale: [1, 2, 1],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
          
          {/* Top connecting line */}
          <motion.div 
            className="absolute top-0 left-0 h-3 bg-gradient-to-r from-purple-500 to-blue-400" // Updated gradient colors
            style={{ width: "100px", transformOrigin: "left" }}
            variants={bridgeVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          />
          
          {/* Bottom connecting line */}
          <motion.div 
            className="absolute bottom-0 left-0 h-3 bg-gradient-to-r from-purple-500 to-pink-500" // Updated gradient colors
            style={{ width: "100px", transformOrigin: "left" }}
            variants={bridgeVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 1.4 }}
          />
          
          {/* Vertical connecting lines */}
          <motion.div
            className="absolute left-[98px] top-0 w-3 bg-gradient-to-b from-blue-400 via-purple-500 to-purple-600" // Enhanced gradient
            style={{ height: "96px", transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          />
          
          <motion.div
            className="absolute left-[98px] bottom-0 w-3 bg-gradient-to-t from-pink-500 via-purple-500 to-purple-600" // Enhanced gradient
            style={{ height: "96px", transformOrigin: "bottom" }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          />
          
          {/* Enhanced pulse effect on the connecting bridge */}
          <motion.div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[100px] h-2 bg-white/70 blur-sm"
            animate={{
              opacity: [0, 0.8, 0],
              x: [0, 100, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </div>

        {/* Side Graphic with enhanced animations */}
        <motion.div 
          className="w-full lg:w-96 h-64 md:h-[500px] bg-grad-certificate relative rounded-lg overflow-hidden"
          variants={sideVariants}
          whileHover="hover"
        >
          {/* Animated border for the side graphic */}
          <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none">
            <motion.path 
              d="M 8 8 L 92% 8" 
              stroke="#8B5CF6" // Updated border color
              strokeWidth="3"
              fill="none"
              variants={borderVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              transition={{ delay: 0.5 }}
            />
            
            <motion.path 
              d="M 8 8 L 8 92%" 
              stroke="#8B5CF6" // Updated border color
              strokeWidth="3"
              fill="none"
              variants={borderVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              transition={{ delay: 0.7 }}
            />
            
            <motion.path 
              d="M 92% 92% L 8% 92%" 
              stroke="#EC4899" // Updated border color
              strokeWidth="3"
              fill="none"
              variants={borderVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              transition={{ delay: 0.9 }}
            />
            
            <motion.path 
              d="M 92% 92% L 92% 8%" 
              stroke="#EC4899" // Updated border color
              strokeWidth="3"
              fill="none"
              variants={borderVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              transition={{ delay: 1.1 }}
            />
          </svg>
          
          {/* Enhanced animated overlay effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-transparent" // Enhanced gradient
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
          
          {/* Enhanced subtle glow pulse */}
          <motion.div
            className="absolute inset-0 bg-blue-500/15"
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          {/* Enhanced animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 4
            }}
            style={{ width: "50%" }}
          />
          
          {/* Enhanced decorative elements */}
          <motion.div
            className="absolute top-4 right-4 w-16 h-16 border-4 border-indigo-400/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
              borderColor: ["rgba(129, 140, 248, 0.3)", "rgba(168, 85, 247, 0.3)", "rgba(129, 140, 248, 0.3)"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div
            className="absolute bottom-12 left-8 w-24 h-24 border-4 border-pink-400/20 rounded-full"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.3, 0.2],
              borderColor: ["rgba(236, 72, 153, 0.2)", "rgba(168, 85, 247, 0.2)", "rgba(236, 72, 153, 0.2)"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SuccessStories;