import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTypewriter } from 'react-simple-typewriter';

const AboutUsSection1 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Enhanced typewriter with more words
  const [text] = useTypewriter({
    words: ["SHIVAM PAISAL"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 100,
    delaySpeed: 1800
  });

  // Responsive background elements
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const textRevealVariants = {
    hidden: { 
      opacity: 0,
      clipPath: "inset(0 100% 0 0)"
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Particle effect for background decoration
  const particleCount = 20;
  const particles = [...Array(particleCount)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    speed: Math.random() * 1 + 0.2
  }));

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 overflow-hidden py-16 px-4">
      {/* Enhanced background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.12),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.15),transparent_60%)]"></div>
        
        {/* Animated particles */}
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity
            }}
            animate={{
              y: [0, particle.speed * 20, 0],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + particle.speed * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Glass morphism accent elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Enhanced section heading with animated underline */}
          <motion.div 
             variants={itemVariants} 
            className="mb-10 text-center"
          >
            { <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 tracking-tight mb-4">
              MEET THE CEO
            </h2> }
            <motion.div 
              className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"
              initial={{ width: "0px" }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            ></motion.div>
          </motion.div>

          {/* Main content with responsive layout */}
          <motion.div 
            ref={ref}
            variants={containerVariants}
            className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full"
          >
            {/* Profile image with enhanced effects */}
            <motion.div 
              variants={itemVariants}
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-md"
                animate={{
                  opacity: isHovered ? 0.8 : 0.5,
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
              ></motion.div>
              
              <motion.div 
                className="absolute inset-0 rounded-full bg-[rgba(15,15,20,0.5)] backdrop-blur-md border border-zinc-700/50"
                style={{ padding: "5px" }}
                whileHover={{ scale: 1.03, rotate: 2 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              >
                <div className="relative w-full h-full rounded-full bg-zinc-900 overflow-hidden">
                  {/* Placeholder for image with improved SVG */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 text-zinc-600">
                    <svg className="w-32 h-32 opacity-30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  {/* Uncomment and add src when you have an image */}
                  {/* <img className="w-full h-full object-cover" src="" alt="Shivam Paisal" /> */}
                </div>
              </motion.div>
              
              {/* Orbital ring animation */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30"
                style={{ margin: "-15px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </motion.div>

            {/* Text content with improved layout and animations */}
            <motion.div 
              variants={containerVariants}
              className="flex-1 max-w-2xl text-center lg:text-left space-y-6 mt-6 lg:mt-0"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-3">
                  {text}
                  <span className="inline-block w-1 h-8 md:h-10 ml-1 bg-indigo-400 animate-blink"></span>
                </h3>
                
                <motion.div 
                  variants={textRevealVariants}
                  className="text-xl md:text-2xl text-white/90 font-medium"
                >
                  Full-Stack Developer & UI/UX Designer
                </motion.div>
              </motion.div>

              {/* Better typography and layout for bio text */}
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.p 
                  variants={textRevealVariants}
                  className="text-lg text-zinc-200 leading-relaxed"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro voluptatem quibusdam, 
                  explicabo nostrum nemo cum tempore ratione qui odit sed at, nesciunt esse? Nobis, asperiores.
                </motion.p>
                
                <motion.p 
                  variants={textRevealVariants} 
                  className="text-base text-zinc-300 leading-relaxed"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis velit, vitae ducimus sequi 
                  doloribus esse, aut ex aspernatur tempore harum placeat. Impedit necessitatibus veritatis fugiat 
                  distinctio quae, repellat provident!
                </motion.p>
              </motion.div>

              {/* Skills indicator */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-2 justify-center lg:justify-start"
              >
                {['React', 'Node.js', 'UI/UX', 'TypeScript', 'Tailwind'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-zinc-800/50 backdrop-blur-sm text-sm text-zinc-200 rounded-full border border-zinc-700/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Enhanced action buttons */}
              <motion.div 
                variants={itemVariants}
                className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <motion.a 
                  href="#" 
                  className="group relative px-8 py-3 overflow-hidden rounded-full text-white font-medium"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-700"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM20 18H4V8L12 13L20 8V18ZM20 6L12 11L4 6H20Z"></path>
                    </svg>
                    Contact Me
                  </span>
                </motion.a>
                
                <motion.a 
                  href="#" 
                  className="group relative px-8 py-3 overflow-hidden rounded-full text-white font-medium"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.6582 10.1271L19.6586 10.1267L19.9408 9.86396C20.877 9.03013 20.9826 7.66946 20.1732 6.70952C19.3639 5.74959 17.9829 5.57866 17.0467 6.41249L16.7648 6.67507L16.7645 6.67543C16.1652 7.21507 15.2079 7.56454 14.3693 7.06771C14.3693 7.06771 10.8269 4.44285 9.29982 8.57184C7.7727 12.7008 12.0615 13.2932 12.0615 13.2932C12.0615 13.2932 15.3949 13.5523 16.2246 10.2493C16.7547 10.9241 17.7404 11.3453 18.6557 10.5289C18.6557 10.5289 19.0584 10.1726 19.2181 10.0297C19.3778 9.88672 19.5377 9.74409 19.6582 9.63586V10.1271Z"></path>
                      <path d="M11.002 3C6.58747 3 3 6.58595 3 11C3 15.4141 6.58747 19 11.002 19C15.4155 19 19 15.4141 19 11C19 10.3002 18.9075 9.6223 18.7386 8.97742C18.316 9.11702 17.8311 9.16623 17.3534 9.09374C17.4486 9.71289 17.5 10.3486 17.5 11C17.5 14.5898 14.5918 17.5 11.002 17.5C7.41127 17.5 4.50195 14.5898 4.50195 11C4.50195 7.41016 7.41127 4.5 11.002 4.5C11.6733 4.5 12.3258 4.57968 12.9448 4.73742C12.8843 4.22003 12.9448 3.69085 13.0923 3.2254C12.4317 3.07775 11.7295 3 11.002 3Z"></path>
                    </svg>
                    Portfolio
                  </span>
                </motion.a>
              </motion.div>

              {/* Social media links */}
              <motion.div 
                variants={itemVariants}
                className="flex gap-4 justify-center lg:justify-start mt-6"
              >
                {[
                  { icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", name: "Facebook" },
                  { icon: "M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm5.546 15.85a.998.998 0 0 1-1.414 0l-5.478-5.478a.999.999 0 0 1-.293-.707V7.5a1 1 0 0 1 2 0v3.757l5.185 5.185a1 1 0 0 1 0 1.415v-.007z", name: "Twitter" },
                  { icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z", name: "LinkedIn" },
                  { icon: "M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z", name: "GitHub" }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800/50 backdrop-blur-sm text-zinc-300 hover:text-white hover:bg-zinc-700/50 transition-colors duration-300 border border-zinc-700/30"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d={social.icon}></path>
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        @media (max-width: 640px) {
          .container {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection1;
