import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import BoxSection from "./BoxSection/BoxSection";
import "./ChooseUs.css";
import chooseus from "./chooseus.jpg";
import { Link } from "react-router-dom";
import WhyDifferent from "../WhyDifferent/WhyDifferent";
import gif1 from "./gif1.gif"
import gif2 from "./gif2.gif"
import gif3 from "./gif3.gif"

const ChooseUs = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  // GIFs array for carousel - replace with your actual GIF paths
  const carouselGifs = [
    {
      src: gif1,  // Update with your actual GIF path
      alt: "Animation 1"
    },
    {
      src: gif2,  // Update with your actual GIF path
      alt: "Animation 2"
    },
    {
      src: gif3,  // Update with your actual GIF path
      alt: "Animation 3"
    }
  ];

  // Enhanced content with icons and descriptions
  const chooseusContent = [
    {
      text: "Live Project Opportunity",
      icon: "💼",
      description: "Work on real-world projects with industry mentors"
    },
    {
      text: "One-one Mentoring",
      icon: "👨‍🏫",
      description: "Personalized guidance from experienced professionals"
    },
    {
      text: "Personalised Support",
      icon: "🛠️",
      description: "Comprehensive assistance in technical & soft skills"
    },
    {
      text: "Open Competition",
      icon: "🏆",
      description: "Showcase your skills and measure your progress"
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex(prev =>
        prev === carouselGifs.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change slide every 5 seconds
   
    return () => clearInterval(interval);
  }, [carouselGifs.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
   
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 50
      }
    },
  };

  const boxVariants = {
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
      boxShadow: "0px 15px 30px rgba(139, 92, 246, 0.35)",
      transition: { duration: 0.3 }
    }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 60
      }
    },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 60
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 120
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
  };

  // Carousel slide variants
  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // 3D tilt effect calculation
  const calculateTilt = (x, y) => {
    if (!sectionRef.current) return { rotateX: 0, rotateY: 0 };
   
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
   
    // Normalize values
    const tiltX = ((y - centerY) / (rect.height / 2)) * 6;
    const tiltY = ((x - centerX) / (rect.width / 2)) * -6;
   
    return { rotateX: tiltX, rotateY: tiltY };
  };

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

  // Calculate mouse parallax effect
  const calculateParallax = (depth = 10) => {
    const x = (window.innerWidth - mousePosition.x * depth) / 100;
    const y = (window.innerHeight - mousePosition.y * depth) / 100;
    return { x, y };
  };

  // Handle carousel navigation
  const handleCarouselNav = (index) => {
    setCurrentCarouselIndex(index);
  };

  const handlePrevSlide = () => {
    setCurrentCarouselIndex(prev =>
      prev === 0 ? carouselGifs.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentCarouselIndex(prev =>
      prev === carouselGifs.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <motion.div
        ref={sectionRef}
        className="text-white px-4 md:px-[10%] pt-16 pb-20 rounded-t-[40px] bg-gradient-to-b from-black via-[#0D0217] to-[#150025] relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
       
        {/* Abstract geometric shapes in background */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {/* Large circle */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full border-2 border-purple-500/30 -right-[200px] -top-[200px]"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear"
            }}
          />
         
          {/* Small circle */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full border border-indigo-400/20 -left-[150px] bottom-[10%]"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
          />
         
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgxMjgsIDkwLCAyMTMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIgZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')] opacity-[0.15]" />
        </div>
       
        {/* Floating particles in background */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-b from-purple-400 to-indigo-500 opacity-10"
            style={{
              width: Math.random() * 25 + 5,
              height: Math.random() * 25 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)"
            }}
            animate={{
              y: [0, Math.random() * 120 - 60],
              x: [0, Math.random() * 120 - 60],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, Math.random() * 0.5 + 1, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Title with enhanced highlight effect */}
        <motion.div
          className="relative"
          variants={titleVariants}
        >
          <motion.div className="flex flex-col items-center justify-center space-y-4">
           
           
            <motion.h1
              className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-400 font-sans text-4xl md:text-6xl font-bold tracking-tight text-center z-10 leading-tight"
              animate={{
                textShadow: [
                  "0 0 8px rgba(168, 85, 247, 0.4)",
                  "0 0 16px rgba(168, 85, 247, 0.6)",
                  "0 0 8px rgba(168, 85, 247, 0.4)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Why Choose Kodevortex
            </motion.h1>

            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 rounded-full w-24 md:w-32"
              animate={{
                width: ["4rem", "10rem", "4rem"],
                opacity: [0.7, 1, 0.7]
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-40 rounded-full bg-purple-600 blur-[100px] opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>

        {/* Grid of BoxSections with enhanced animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 px-4 md:px-10 lg:px-16 mt-16 md:mt-20 relative z-10"
        >
          {chooseusContent.map((content, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={boxVariants}
              whileHover="hover"
              className="transform transition-all duration-300"
            >
              <motion.div
                className="bg-gradient-to-br from-[#1c1033] to-[#130926] p-6 md:p-8 rounded-2xl border border-purple-900/30 h-full relative group overflow-hidden"
                whileHover={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                  transition: { duration: 1.5 }
                }}
              >
                {/* Hover effect glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
               
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute rotate-45 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 w-10 h-10 -right-5 -top-5 transform origin-bottom-left" />
                </div>
               
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 text-3xl md:text-4xl bg-gradient-to-br from-purple-400 to-indigo-500 p-3 md:p-4 rounded-2xl shadow-lg shadow-purple-900/20">
                    {content.icon}
                  </div>
                 
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">
                      {content.text}
                    </h3>
                    <p className="text-purple-200/70 text-sm md:text-base">
                      {content.description}
                    </p>
                  </div>
                </div>
               
                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500/50 to-indigo-500/50 w-0 group-hover:w-full transition-all duration-500 ease-out"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content with text and image with 3D effect */}
        <motion.div
          className="px-4 md:px-8 lg:px-16 mt-20 md:mt-24 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16"
          variants={containerVariants}
        >
          <motion.div
            className="w-full lg:w-[45%] flex items-center text-start"
            variants={slideInLeftVariants}
          >
            <div className="space-y-6">
              <motion.h2
                className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-400"
                custom={0}
                variants={paragraphVariants}
              >
                Transform Your Learning Journey
              </motion.h2>
             
              <motion.p
                className="text-base md:text-lg tracking-wide leading-relaxed text-purple-100/90"
                custom={1}
                variants={paragraphVariants}
              >
                At <span className="text-purple-400 font-semibold">Kodevortex</span>, our mission is to bridge the gap between academic learning and industry needs.
                We believe in empowering students and professionals with the right skills to succeed in today's competitive
                technology-driven world.
              </motion.p>
             
              <motion.p
                className="text-base md:text-lg tracking-wide leading-relaxed text-purple-100/80"
                custom={2}
                variants={paragraphVariants}
              >
                We understand that every learner has unique goals and aspirations. That's why we offer personalized guidance to help
                you navigate your career path and achieve your dreams.
              </motion.p>
             
              {/* Feature list */}
              <motion.ul
                className="space-y-3 mt-6"
                custom={3}
                variants={paragraphVariants}
              >
                {[
                  "Industry-relevant curriculum",
                  "Hands-on project experience",
                  "Expert instructors with real-world experience",
                  "Flexible learning options"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-purple-100/80"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.5 + (i * 0.15),
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-purple-500">✓</span> {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* Image with GIF Carousel - REPLACED IFRAME WITH GIF */}
          <motion.div 
            className="w-full lg:w-[55%] h-[450px] rounded-3xl overflow-hidden relative"
            variants={slideInRightVariants}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 opacity-70" />
            
            {/* GIF carousel container */}
            <motion.div className="absolute inset-0 bg-[#0D0217] rounded-3xl overflow-hidden flex items-center justify-center">
              {/* Display each GIF with animation */}
              {carouselGifs.map((gif, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentCarouselIndex === index ? 1 : 0,
                    scale: currentCarouselIndex === index ? 1 : 0.95
                  }}
                  transition={{ 
                    opacity: { duration: 0.7 },
                    scale: { duration: 0.5 }
                  }}
                >
                  <img
                    src={gif.src}
                    alt={gif.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation arrows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
              <motion.button 
                className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-purple-600/50 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevSlide}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              <motion.button 
                className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-purple-600/50 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNextSlide}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {carouselGifs.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentCarouselIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentCarouselIndex === index ? "bg-purple-500 scale-110" : "bg-purple-200/30 hover:bg-purple-300/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 mx-4 md:mx-[5%] text-center"
          variants={fadeInVariants}
        >
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300"
            whileInView={{
              y: [20, 0],
              opacity: [0, 1],
              transition: { duration: 0.7 }
            }}
            viewport={{ once: true }}
          >
            Start Your Journey Today
          </motion.h2>
         
          <motion.p
            className="py-6 text-base md:text-xl text-center leading-relaxed max-w-4xl mx-auto text-purple-100/90"
            animate={{
              color: [
                "rgba(243, 232, 255, 0.9)",
                "rgba(233, 213, 255, 0.9)",
                "rgba(243, 232, 255, 0.9)"
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Joining <span className="text-purple-400 font-semibold">Kodevortex</span> means more than just attending classes. It's about becoming part of a growing community
            of innovators and problem-solvers who are shaping the future of technology.
          </motion.p>
         
          {/* Call to action button with enhanced animations */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="relative py-4 px-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold text-lg overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 30px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Button background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
             
              {/* Text and icon */}
              <Link to="/training"> 
                <span className="relative z-10 flex items-center gap-2">
                  Join Our Program
                  <svg className="w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </Link>
            </motion.button>
           
            <motion.button
              className="py-4 px-8 bg-transparent border border-purple-500/40 hover:border-purple-500 text-purple-300 rounded-full font-medium text-lg group"
              whileHover={{
                scale: 1.05,
                color: "white"
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/about-us">
                <span className="flex items-center gap-2">
                  Learn More
                  <svg className="w-5 h-5 inline-block opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </span>
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <WhyDifferent />
    </>
  );
};

export default ChooseUs;