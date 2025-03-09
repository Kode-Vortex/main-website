import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./SuccessStories.css";

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3
  });

  // Toggle between image and video every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(prev => !prev);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [showVideo]);

  // Reset video state when changing testimonials
  useEffect(() => {
    setShowVideo(false);
  }, [currentIndex]);

  // User achievements content
  const achievements = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      testimonial: "KodeVortex helped me master advanced JavaScript concepts that I was struggling with for months. The interactive challenges were exactly what I needed!",
      rating: 5,
      image: "/api/placeholder/400/320", // Placeholder for user image
      video: "/api/placeholder/400/320" // Placeholder for user video
    },
    {
      name: "Michael Chen",
      role: "Frontend Engineer",
      testimonial: "The React courses on KodeVortex are outstanding. I went from beginner to confident developer in just 8 weeks. Now I'm leading UI projects at my company!",
      rating: 5,
      image: "/api/placeholder/400/320", // Placeholder for user image
      video: "/api/placeholder/400/320" // Placeholder for user video
    },
    {
      name: "Priya Sharma",
      role: "Data Scientist",
      testimonial: "KodeVortex's Python for Data Science track was comprehensive and practical. The real-world projects helped me land my dream job at a top tech company.",
      rating: 5,
      image: "/api/placeholder/400/320", // Placeholder for user image
      video: "/api/placeholder/400/320" // Placeholder for user video
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -10,
      boxShadow: "0px 10px 25px rgba(157, 78, 221, 0.3)", // Changed shadow to violet
      transition: { duration: 0.3 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.5, delay: 0.2 } 
    }
  };

  const mediaVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  // Handle navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.div 
      className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#000000]" // Changed to darker black
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#001a20] to-[#000000] z-0" /> {/* Adjusted gradient */}
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stars" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#00ffaa" opacity="0.5" /> {/* Light green */}
              <circle cx="25" cy="60" r="1" fill="#00ffaa" opacity="0.7" />
              <circle cx="40" cy="30" r="1" fill="#be9ef7" opacity="0.4" /> {/* Light violet */}
              <circle cx="60" cy="15" r="1" fill="#00e6ff" opacity="0.6" /> {/* Light cyan */}
              <circle cx="75" cy="45" r="1" fill="#be9ef7" opacity="0.5" />
              <circle cx="90" cy="80" r="1" fill="#00e6ff" opacity="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars)" />
        </svg>
      </div>
      
      {/* Header with gradient text */}
      <div className="relative z-10 mb-8 md:mb-12">
        <motion.h1 
          className="font-bold text-3xl md:text-4xl text-center tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            textShadow: "0 0 15px rgba(190, 158, 247, 0.5)",
            background: "linear-gradient(to right, #be9ef7, #00e6ff, #00ffaa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent"
          }}
        >
          Success Stories
        </motion.h1>
        
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-[#be9ef7] via-[#00e6ff] to-[#00ffaa] mx-auto mt-4" // Violet to cyan to green gradient
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? { width: 96, opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </div>

      {/* Main Card Container */}
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          className="bg-[#000a0f] rounded-lg overflow-hidden shadow-xl" // Darker background
          variants={cardVariants}
          whileHover="hover"
          style={{ boxShadow: "0 5px 20px rgba(190, 158, 247, 0.15)" }} // Violet shadow
        >
          {/* Card Content */}
          <div className="md:flex">
            {/* Media Container - Left side on larger screens, top on mobile */}
            <div className="md:w-2/5 relative">
              <div className="aspect-w-4 aspect-h-3 h-64 md:h-full">
                {/* Image - Shown when showVideo is false */}
                <motion.div
                  variants={mediaVariants}
                  initial="visible"
                  animate={showVideo ? "exit" : "visible"}
                  style={{ display: showVideo ? "none" : "block", height: "100%" }}
                >
                  <img 
                    src={achievements[currentIndex].image} 
                    alt={achievements[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Video - Shows when showVideo is true */}
                <motion.div
                  variants={mediaVariants}
                  initial="hidden"
                  animate={showVideo ? "visible" : "hidden"}
                  style={{ display: showVideo ? "block" : "none", height: "100%" }}
                >
                  <video 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    muted 
                    loop
                  >
                    <source src={achievements[currentIndex].video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#be9ef7]/30 to-[#00e6ff]/30"></div> {/* Violet to cyan gradient */}
                
                {/* Media indicator */}
                <div className="absolute bottom-4 right-4 bg-black/50 rounded-full p-2">
                  {showVideo ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00ffaa]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm12.553 1.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            
            {/* Content - Right side on larger screens, bottom on mobile */}
            <div className="md:w-3/5 p-6">
              <motion.div variants={textVariants}>
                <h2 className="text-[#be9ef7] text-xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", textShadow: "0 0 10px rgba(0, 230, 255, 0.3)" }}>{achievements[currentIndex].name}</h2> {/* Changed to violet color with cyan shadow */}
                <p className="text-[#e0e0e0] text-sm mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>{achievements[currentIndex].role}</p> {/* Changed font */}
                
                <div className="mb-4">
                  <div className="flex mb-2">
                    {[...Array(achievements[currentIndex].rating)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-[#00e6ff]" // Changed to cyan
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <p className="text-[#e0e0e0] text-sm md:text-base italic" style={{ fontFamily: "'Lato', sans-serif" }}> {/* Changed font */}
                  "{achievements[currentIndex].testimonial}"
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Navigation and Media Toggle Controls */}
          <div className="px-6 py-4 bg-[#000607] flex justify-between items-center"> {/* Darker background */}
            <button 
              onClick={goToPrevious}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#000a0f] text-[#00e6ff] hover:bg-[#001015] transition-colors" // Cyan text
              aria-label="Previous story"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Pagination and Video Progress Indicator */}
            <div className="flex flex-col items-center">
              <div className="flex space-x-2 mb-2">
                {achievements.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-[#00ffaa]' : 'bg-[#e0e0e0]/30'}`} // Green active indicator
                  />
                ))}
              </div>
              
              {/* Video progress bar - now represents the 5-second toggle cycle */}
              <motion.div 
                className="h-1 bg-gradient-to-r from-[#be9ef7] to-[#00e6ff]" // Violet to cyan gradient
                initial={{ width: 0 }}
                animate={{ width: '80px' }}
                transition={{ 
                  duration: 5, 
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </div>
            
            {/* Toggle button for video/image */}
            <button 
              onClick={() => setShowVideo(!showVideo)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#000a0f] text-[#be9ef7] hover:bg-[#001015] transition-colors" // Violet text
              aria-label={showVideo ? "Show image" : "Show video"}
            >
              {showVideo ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm12.553 1.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              )}
            </button>
            
            <button 
              onClick={goToNext}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#000a0f] text-[#00e6ff] hover:bg-[#001015] transition-colors" // Cyan text
              aria-label="Next story"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
      
      
    </motion.div>
  );
};

export default SuccessStories;
