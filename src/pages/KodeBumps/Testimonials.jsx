import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Expanded testimonials array with 8 items
const testimonials = [
  {
    name: "Niyati Ravindra Patil",
    position: "CEO, Tech Solutions Inc.",
    image: "",
    feedback:
      "This was a very well-organized training! The trainer explained concepts clearly, and the hands-on activities, especially the Bluetooth-controlled car, were very engaging. I feel much more confident using this technology now!",
  },
  {
    name: "Gayatri Santosh Sable",
    position: "CTO, Innovate Tech Labs",
    image: "",
    feedback:
      "The training was good, and the trainer's teaching skills were excellent. I found the traffic light section the most interesting. The hands-on sessions were very helpful in understanding the concepts!",
  },
  {
    name: "Sumit Sushant Padhy",
    position: "Head of Research, FutureTech Industries",
    image: "",
    feedback:
      "I had a great learning experience! The training was well-structured, and the hands-on activities helped a lot. It would be great if the training also included more real-world applications!",
  },
  {
    name: "Aastha Jadhav",
    position: "Founder, Tech Innovators Startup",
    image: "",
    feedback:
      "Fantastic training! The Raspberry Pi camera and Al section were the most useful. I enjoyed the hands-on activities the most. It was a pleasant experience with Rushikesh sir!",
  },
  {
    name: "Anushka Kshirsagar",
    position: "Director of Innovation, Global Tech",
    image: "",
    feedback:
      "Great learning experience! The trainer's teaching was excellent, and the hands-on activities helped a lot. I found the notification section very useful. Very well organized!",
  },
  {
    name: "Subodh Deshmukh",
    position: "VP of Engineering, NextGen Solutions",
    image: "",
    feedback:
      "The training was well conducted, and I learned a lot.The GPIO pins and cloud connections part was very useful. Everything was perfect!",
  },
  {
    name: "Pratik Mokal",
    position: "Founder, AI Solutions Co.",
    image: "",
    feedback:
      "The session was excellent! The trainer taught really well, and the hands-on exercises were very helpful. I feel much more confident working with Arduino now.Everything was perfect!",
  },
  {
    name: "Harshita Singh",
    position: "Head of Product, DataSmart Inc.",
    image: "",
    feedback:
      "The training was excellent! The content was easy to understand, and the hands-on activities really helped in grasping the concepts. The hardware section was the most useful for me. Overall, a great session!",
  },
];

const Testimonials = () => {
  // Group testimonials into sets of 4
  const testimonialSets = [];
  for (let i = 0; i < testimonials.length; i += 4) {
    testimonialSets.push(testimonials.slice(i, Math.min(i + 4, testimonials.length)));
  }

  const [activeSetIndex, setActiveSetIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  
  // Handle automatic slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveSetIndex((prev) => (prev === testimonialSets.length - 1 ? 0 : prev + 1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialSets.length]);
  
  const goToSet = (index) => {
    setActiveSetIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  const nextSet = () => {
    setActiveSetIndex((prev) => (prev === testimonialSets.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };
  
  const prevSet = () => {
    setActiveSetIndex((prev) => (prev === 0 ? testimonialSets.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  return (
    <motion.section
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0F0F10] via-[#161618] to-[#1D1D20] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Dynamic animated particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * -80 - 40],
              opacity: [0.1, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Blurred gradient spots */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#3C33FF] to-[#9747FF] opacity-20 blur-[80px]"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/5 w-72 h-72 rounded-full bg-gradient-to-r from-[#FF3365] to-[#FF9533] opacity-20 blur-[100px]"
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), 
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Section title */}
      <div className="relative z-10 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-400 font-medium">
            {/* Client Testimonials */}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
            Our Student Feedback
          </h2>
          <motion.div 
            className="mt-4 mx-auto h-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
      </div>
      
      {/* Carousel container */}
      <div 
        ref={carouselRef}
        className="relative max-w-7xl mx-auto"
        
      >
        {/* Grid of testimonials */}
        <div className="relative ">
          {testimonialSets.map((set, setIndex) => (
            <motion.div
              key={setIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 "
              initial={{ opacity: 0, x: 300 }}
              animate={{ 
                opacity: activeSetIndex === setIndex ? 1 : 0.95,
                x: activeSetIndex === setIndex ? 0 : (activeSetIndex > setIndex ? -300 : 300),
                pointerEvents: activeSetIndex === setIndex ? "auto" : "none"
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                position: 'absolute',
                width: '100%',
                display: activeSetIndex === setIndex ? 'grid' : 'none'
              }}
            >
              {set.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#202024] to-[#18181c] rounded-2xl shadow-xl border border-gray-800/50 p-6 flex flex-col overflow-hidden relative">
                    {/* Animated gradient border effect */}
                    <div className="absolute inset-0 p-[1px] rounded-2xl overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-[#FF6B6B]/20 to-[#4ECDC4]/20"
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        style={{
                          backgroundSize: '300% 300%',
                        }}
                      />
                    </div>
                    
                    {/* Quote mark */}
                    <div className="absolute top-4 right-4 text-5xl leading-none opacity-5 font-serif">"</div>
                    
                    {/* Content */}
                    <div className="flex flex-col h-full">
                      {/* Quote section */}
                      <div className="flex-grow mb-4 max-h-36  pb-10">
                        <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed relative z-10">
                          "{testimonial.feedback}"
                        </p>
                      </div>
                      
                      {/* Author section */}
                      <div className="flex items-center mt-auto pt-6">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                        </div>
                      </div>
                    </div>
                    
                    {/* Glowing corner accent */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-[100px] bg-gradient-to-tl from-[#4ECDC4]/20 to-transparent opacity-30" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
          
          {/* Empty grid for spacing when sets are absolutely positioned */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 pointer-events-none">
            {testimonialSets[0].map((_, index) => (
              <div key={index} className="h-64 md:h-80"></div>
            ))}
          </div>
        </div>
        
        {/* Navigation controls */}
        <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-30 px-4">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm text-white border border-gray-700/50"
            onClick={prevSet}
            aria-label="Previous set of testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm text-white border border-gray-700/50"
            onClick={nextSet}
            aria-label="Next set of testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>
        </div>
        
        {/* Pagination indicators */}
        <div className="flex justify-center items-center space-x-3 mt-8">
          {testimonialSets.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeSetIndex === index 
                ? "bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] w-8" 
                : "bg-gray-600 hover:bg-gray-500"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSet(index)}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Auto-play indicator */}
        {isAutoPlaying && (
          <div className="mt-4 flex justify-center">
            <div className="h-0.5 w-24 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Testimonials;