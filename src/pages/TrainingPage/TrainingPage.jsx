import  { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { FaGamepad, FaCode, FaBrain, FaRocket } from "react-icons/fa";
import AlgoAcharya from "./AlgoAcharya";
import LAKSHYARITHM from "./LAKSHYARITHM";

// Floating particles component
const ParticleField = () => {
  const particles = Array.from({ length: 30 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-2 md:h-2 bg-purple-400 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Code rain effect
const CodeRain = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 text-fuchsia-400 font-mono text-sm"
          style={{ left: `${i * 5}%` }}
          initial={{ y: -20 }}
          animate={{ y: "100vh" }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        >
          {Array.from({ length: 25 }).map((_, j) => (
            <div key={j} className="my-2">
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// Hexagon Grid Background
const HexagonGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <div className="grid grid-cols-6 md:grid-cols-12 gap-6">
        {Array.from({ length: 120 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-12 h-12 border border-fuchsia-400"
            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Feature Box component
const FeatureBox = ({ icon, title, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-6 rounded-lg bg-gradient-to-br from-black to-[#1a103d] border border-fuchsia-500 w-full md:w-64 backdrop-blur-lg"
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 0 20px rgba(218, 0, 255, 0.5)",
        y: -10 
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-4xl text-white mb-4"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-mono font-bold text-white mb-2">{title}</h3>
      <p className="text-white font-mono text-center text-sm">{description}</p>
    </motion.div>
  );
};

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Main component
const TrainingPage = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom cursor glow effect */}
      <motion.div 
        className="fixed w-32 h-32 rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: cursorPosition.x - 64,
          y: cursorPosition.y - 64,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.1 }}
        style={{ 
          background: "radial-gradient(circle, rgba(218, 0, 255, 0.3) 0%, rgba(218, 0, 255, 0) 70%)",
          boxShadow: "0 0 20px rgba(218, 0, 255, 0.2)",
        }}
      />

      {/* Hero Section */}
      <motion.div 
        className="flex relative h-screen overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #000000, #13054D)",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Background Effects */}
        <CodeRain />
        <ParticleField />
        <HexagonGrid />
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 md:px-16">
          <motion.div 
            className="w-full max-w-5xl flex flex-col items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-center text-white font-mono">
              DISCOVER THE CAREER TO SKILL up YOURSELF
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white mb-12 text-center max-w-3xl font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Unlock the doors to the future career options
            </motion.p>
            
            <motion.div 
              className="flex flex-col md:flex-row justify-center items-center gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 30px rgba(5, 103, 119, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full text-lg font-bold font-mono relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#056777] to-[#054d6e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                <span className="group-hover:text-white transition-colors duration-300">START YOUR JOURNEY</span>
              </motion.button>
              
              <motion.div className="flex items-center">
                <IoIosArrowRoundForward className="text-4xl md:text-7xl text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Right triangles */}
        <div className="absolute right-0 flex justify-end w-[30%]">
          {/* First Triangle */}
          <motion.div
            className="absolute top-0 right-0 bottom-0 w-[21rem] h-[38rem] bg-gradient-to-br from-[#056777] to-black opacity-80"
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
            className="absolute top-12 right-0 bottom-0 w-[21rem] h-[40rem] bg-gradient-to-br from-[#056777] to-black opacity-80"
            style={{ clipPath: "polygon(100% 0, 0 40%, 100% 100%)" }}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 0.8, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            3
          </motion.div>
        </div>
        
        {/* Scanner effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex flex-col items-center mx-auto left-1/2 transform -translate-x-1/2">
            <motion.div 
              className="w-full md:w-[80rem] h-6 bg-gradient-to-r from-black to-[#056777]"
              animate={{ 
                boxShadow: ["0 0 10px rgba(5, 103, 119, 0.5)", "0 0 30px rgba(5, 103, 119, 0.5)", "0 0 10px rgba(5, 103, 119, 0.5)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="w-full md:w-[82rem] h-7 bg-gradient-to-r from-[#121212] to-[#54677B]"
              animate={{ 
                boxShadow: ["0 0 10px rgba(84, 103, 123, 0.5)", "0 0 30px rgba(84, 103, 123, 0.5)", "0 0 10px rgba(84, 103, 123, 0.5)"]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        className="py-20 bg-gradient-to-b from-black to-[#13054D] relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white text-sm uppercase tracking-widest mb-3 font-mono">Why Choose Us</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
              NEXT-GEN TECH TRAINING
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureBox 
              icon={<FaGamepad />} 
              title="Gamified Learning" 
              description="Level up your skills with our gamified approach to mastering complex tech concepts."
            />
            <FeatureBox 
              icon={<FaCode />} 
              title="Hands-On Coding" 
              description="Build real-world projects with immediate feedback and expert guidance."
            />
            <FeatureBox 
              icon={<FaBrain />} 
              title="AI-Powered" 
              description="Personalized learning paths powered by advanced AI to optimize your progress."
            />
            <FeatureBox 
              icon={<FaRocket />} 
              title="Career Boosting" 
              description="Unlock high-demand skills that will fast-track your tech career advancement."
            />
          </div>
        </div>
      </motion.div>

      {/* Trainings We Offer Section */}
      <motion.div 
        className="bg-gradient-to-b from-[#13054D] to-black py-20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ParticleField />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#CF9274] text-sm uppercase tracking-widest mb-3 font-mono">Master Your Skills</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
              TRAININGS WE OFFER
            </h2>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row gap-12 justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          >
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AlgoAcharya />
            </motion.div>
            
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LAKSHYARITHM />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-white text-lg md:text-xl font-mono mb-6">Want to know more? Reach out to us</p>
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(207, 146, 116, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-[#CF9274] rounded-full font-mono font-bold"
            >
              CONTACT US
            </motion.button>
          </motion.div>
        </div>
        
        {/* Bottom circuit lines */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1200 100" fill="none">
            <path d="M0,50 H400 M450,50 H700 M750,50 H1000 M1050,50 H1200" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
            <path d="M400,50 L400,0 M700,50 L700,100 M1000,50 L1000,0" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
            <circle cx="400" cy="50" r="5" fill="rgba(255, 255, 255, 0.5)" />
            <circle cx="700" cy="50" r="5" fill="rgba(255, 255, 255, 0.5)" />
            <circle cx="1000" cy="50" r="5" fill="rgba(255, 255, 255, 0.5)" />
          </svg>
        </div>
      </motion.div>
    </>
  );
};

export default TrainingPage;