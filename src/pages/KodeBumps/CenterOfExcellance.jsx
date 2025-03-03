import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CenterOfExcellence = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Define the items to be displayed with icons
  const excellencePoints = [
    {
      text: "This initiative aims to provide skill-based education in advanced technologies and innovation.",
      icon: "🚀"
    },
    {
      text: "Aligned with industry requirements, it enhances employability and fosters a startup culture.",
      icon: "🌟"
    },
    {
      text: "With no financial burden on institutions, it ensures high-quality training with minimal investment.",
      icon: "💰"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut", 
        staggerChildren: 0.3,
        delayChildren: 0.2
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.6, 0.05, -0.01, 0.9],
        type: "spring",
        stiffness: 100 
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.15,
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 8
      } 
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 15px 30px rgba(242, 132, 116, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  // Check if element is in view for animations
  const checkInView = () => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible && !isInView) {
      setIsInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkInView);
    checkInView();
    return () => window.removeEventListener('scroll', checkInView);
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      className="py-16 px-4 md:px-10 bg-gradient-to-b from-[#141414] via-[#1c1c1c] to-[#252525] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Abstract geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        {/* Large circle */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full border-2 border-[#20B2AA]/30 -right-[150px] -top-[150px]"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 80,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Medium circle */}
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full border border-[#F28474]/20 right-[20%] bottom-[10%]"
          animate={{
            rotate: 270,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 70,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Small circle */}
        <motion.div
          className="absolute w-[250px] h-[250px] rounded-full border border-[#F28474]/20 -left-[100px] bottom-[15%]"
          animate={{
            rotate: -360,
            scale: [1, 1.15, 1],
          }}
          transition={{
            rotate: {
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.1]" style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgzMiwgMTc4LCAxNzAsIDAuMTUpIiBzdHJva2Utd2lkdGg9IjEuMSIgZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')",
          backgroundSize: "60px 60px"
        }} />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9InJnYmEoMjQyLCAxMzIsIDExNiwgMC4xNSkiIHN0cm9rZS13aWR0aD0iMS4xIiBkPSJNMCAwaDEyMHYxMjBIMHoiLz48L2c+PC9zdmc+')",
          backgroundSize: "120px 120px",
          transform: "rotate(30deg)",
        }} />
      </div>
      
      {/* Floating particles in background */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-b from-[#F28474] to-[#20B2AA] opacity-25"
          style={{
            width: Math.random() * 25 + 5,
            height: Math.random() * 25 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)"
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.35, 0.1],
            scale: [1, Math.random() * 0.6 + 1, 1]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto">
        {/* Logo and Title */}
        <motion.div 
          className="relative mb-16 text-center"
          variants={titleVariants}
        >
          <motion.div className="flex flex-col items-center justify-center space-y-6">
            {/* Empty space where logo was */}
            <motion.div 
              className="mb-4 relative h-20 w-44 md:h-24 md:w-52"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Logo removed as per the latest version */}
            </motion.div>
            
            <motion.h1 
              className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A71] via-[#E05E50] to-[#028985] font-sans text-4xl md:text-5xl font-bold tracking-tight z-10 leading-tight"
              animate={{
                textShadow: [
                  "0 0 10px rgba(242, 132, 116, 0.25)",
                  "0 0 18px rgba(242, 132, 116, 0.4)",
                  "0 0 10px rgba(242, 132, 116, 0.25)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              Why Center of Excellence?
            </motion.h1>

            {/* Animated underline */}
            <motion.div 
              className="h-1.5 bg-gradient-to-r from-[#FF8A71] via-[#E05E50] to-[#20B2AA] rounded-full w-24 md:w-32"
              animate={{
                width: ["4rem", "10rem", "4rem"],
                opacity: [0.7, 1, 0.7],
                height: ["0.25rem", "0.35rem", "0.25rem"]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </motion.div>

          {/* Light glow behind the title */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-40 rounded-full bg-gradient-to-r from-[#F28474]/25 via-[#E05E50]/20 to-[#20B2AA]/25 blur-[100px] opacity-40"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </motion.div>

        {/* Content items */}
        <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto px-4">
          {excellencePoints.map((point, index) => (
            <motion.div 
              key={index} 
              custom={index}
              variants={itemVariants}
              whileHover="hover"
              className="transform transition-all duration-300"
            >
              <motion.div 
                className="bg-gradient-to-br from-[#252525] to-[#1a1a1a] p-6 md:p-8 rounded-2xl border border-gray-800/70 shadow-xl shadow-black/60 relative group overflow-hidden"
                whileHover={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                  transition: { duration: 1.5 }
                }}
              >
                {/* Hover effect glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#F28474]/15 to-[#20B2AA]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute rotate-45 bg-gradient-to-r from-[#F28474]/10 to-[#20B2AA]/10 w-10 h-10 -right-5 -top-5 transform origin-bottom-left" />
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 text-3xl md:text-4xl bg-gradient-to-br from-[#E05E50] to-[#20B2AA] p-3 md:p-4 rounded-2xl shadow-lg shadow-black/50">
                    {point.icon}
                  </div>
                  
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {point.text}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FF8A71]/80 to-[#20B2AA]/80 w-0 group-hover:w-full transition-all duration-500 ease-out"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action button - Modified to use solid color instead of gradient */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              delay: 0.5
            }
          }}
          viewport={{ once: true }}
        >
          <motion.button
            className="relative py-3 px-8 bg-[#E05E50] text-white rounded-full font-semibold text-lg overflow-hidden group shadow-lg shadow-black/30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 15px 30px rgba(242, 132, 116, 0.3)"
            }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Text and icon */}
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <svg className="w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
            
            {/* Enhanced subtle glow effect on button */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-[#F28474]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CenterOfExcellence;