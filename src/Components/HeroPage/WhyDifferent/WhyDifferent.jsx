import { motion } from "framer-motion";
import { useRef } from "react";
import "./WhyDifferent.css";

const WhyDifferent = () => {
  const diffcontent = [
    "Holistic Career Transformation, Not Just Training",
    "Startup Ecosystem Integration with Real-World Mentorship",
    "Agile Development and Continuous Learning Culture",
    "Deep Industry Partnerships and Community Engagement",
  ];
  
  const containerRef = useRef(null);

  // Card variants for staggered animations
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.2,
      },
    }),
  };

  // Hover animation for cards
  const hoverAnimation = {
    scale: 1.05,
    rotate: 2,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  return (
    <div className="quotes-section overflow-hidden pt-16 pb-20 relative">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500 opacity-30"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Title with animated underline */}
      <div className="text-center relative z-10 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="different-des text-white text-3xl font-bold tracking-wider"
        >
          What Makes Us Different
        </motion.h2>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-4"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "6rem", opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
      </div>

      {/* Cards with staggered animation */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 max-w-6xl mx-auto relative z-10"
        ref={containerRef}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      >
        {diffcontent.map((text, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover={hoverAnimation}
            className="quote-card flex items-center justify-center px-8 py-12 text-lg text-white bg-gradient-to-br from-slate-850 to-slate-900 rounded-lg shadow-md backdrop-blur-sm border border-slate-700 overflow-hidden relative"
          >
            {/* Animated accent corner */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            
            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
                className="text-xl font-medium"
              >
                {text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scrolling accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};

export default WhyDifferent;