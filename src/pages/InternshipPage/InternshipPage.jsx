import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowRight, Award, Briefcase, Users, Clock } from "lucide-react";

const InternshipPage = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const whyUsRef = useRef(null);
  
  // Parallax for hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const springHeroY = useSpring(heroY, { stiffness: 100, damping: 30 });
  
  // Section visibility
  const isCardsInView = useInView(cardsRef, { once: false, amount: 0.2 });
  const isWhyUsInView = useInView(whyUsRef, { once: false, amount: 0.2 });

  // Animation variants
  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.8, type: "spring" }
    })
  };

  const shimmerVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: { repeat: Infinity, repeatType: "mirror", duration: 2 }
    }
  };

  const cardHoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.3 } }
  };

  // Feature data
  const features = [
    {
      num: "1",
      title: "REAL WORLD PROJECTS, NO BUSY WORK",
      color: "#056777",
      icon: <Briefcase className="h-12 w-12" />
    },
    {
      num: "2",
      title: "WORK WITH INDUSTRY PROS AND MENTORS",
      color: "#6764C9",
      icon: <Users className="h-12 w-12" />
    },
    {
      num: "3",
      title: "FLEXIBLE WORK ENVIRONMENT",
      color: "#056777",
      icon: <Clock className="h-12 w-12" />
    },
    {
      num: "4",
      title: "GAIN EXPERIENCE + CERTIFICATE",
      color: "#6764C9",
      icon: <Award className="h-12 w-12" />
    }
  ];

  // Internship card data
  const internships = [
    {
      title: "CREATIVE ENTHUSIAST",
      emoji: "🎨",
      color: "#CF9274",
      secondaryColor: "#A77057",
      role: "UI/UX",
      position: "Design Intern",
      description: "Translate concepts into user flows, create wireframes, and craft intuitive experiences. Learn to transform complex problems into elegant solutions.",
      skills: [
        "Design intuitive interfaces",
        "Create user-friendly experiences",
        "Master Figma, Adobe XD, and prototyping tools"
      ]
    },
    {
      title: "FULL-STACK BUILDER",
      emoji: "🌐",
      color: "#6764C9",
      secondaryColor: "#4F4DB3",
      role: "WEB D",
      position: "Intern",
      description: "Develop responsive websites and applications using modern frameworks. Work on real projects and build a professional portfolio.",
      skills: [
        "Build dynamic and responsive websites",
        "Work with MERN stack, React, and Next.js",
        "Create scalable and maintainable code"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#070721] to-[#0a0a2a] min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#056777] blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#CF9274] blur-3xl opacity-20"
          animate={{ x: [0, -70, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 overflow-hidden"
        style={{ y: springHeroY, opacity: heroOpacity }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-24">
            {/* Left Content */}
            <motion.div 
              className="flex-1 z-10"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-sm uppercase tracking-widest font-medium text-[#056777]">Kickstart Your Career</span>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Are you looking for an{" "}
                <motion.span 
                  className="text-[#CF9274] inline-block"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    textShadow: ["0px 0px 0px rgba(207, 146, 116, 0)", "0px 0px 15px rgba(207, 146, 116, 0.7)", "0px 0px 0px rgba(207, 146, 116, 0)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  INTERNSHIP?
                </motion.span>
              </h1>
              
              <motion.p 
                className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Kickstart your career with a hands-on, industry-focused internship at KodeVortex. Gain real-world skills, expert mentorship, and work on cutting-edge projects.
              </motion.p>
              
              <motion.div 
                className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.button 
                  className="relative overflow-hidden bg-gradient-to-r from-[#6764C9] to-[#4F4DB3] text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Find Your Path</span>
                  <ArrowRight className="h-5 w-5 relative z-10" />
                  <motion.div 
                    className="absolute inset-0 bg-white opacity-10"
                    variants={shimmerVariants}
                    initial="initial"
                    animate="animate"
                  />
                </motion.button>
                
                <motion.button 
                  className="border border-[#056777] hover:border-[#CF9274] text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Opportunities
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Right Content - 3D Element */}
            <motion.div 
              className="flex-1 h-[300px] sm:h-[350px] md:h-[400px] relative"
              initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
            >
              <div className="w-full h-full relative perspective-[1000px]">
                {/* 3D Card Stack */}
                <motion.div 
                  className="absolute origin-center w-[240px] sm:w-[280px] md:w-[320px] h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-[#056777] to-[#034856] rounded-3xl shadow-xl"
                  animate={{ 
                    rotateY: [0, -10, 0, -10, 0],
                    rotateX: [0, 5, 0, 5, 0],
                    z: [0, 20, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                >
                  <div className="w-full h-full rounded-3xl bg-opacity-30 backdrop-blur-sm border border-white/10 p-8 flex flex-col justify-center">
                    <motion.div 
                      className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-white flex items-center justify-center mb-6"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-[#CF9274]"></div>
                    </motion.div>
                    <div className="space-y-3">
                      <div className="h-3 w-3/4 bg-white/20 rounded-full"></div>
                      <div className="h-3 w-1/2 bg-white/20 rounded-full"></div>
                      <div className="h-3 w-5/6 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute origin-center top-8 sm:top-12 left-8 sm:left-12 w-[240px] sm:w-[280px] md:w-[320px] h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-[#4A4E52] to-[#2D2F31] rounded-3xl shadow-2xl"
                  animate={{ 
                    rotateY: [0, 10, 0, 10, 0],
                    rotateX: [0, -5, 0, -5, 0],
                    z: [-20, 0, -20],
                  }}
                  transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 rounded-full border-4 border-[#CF9274] border-dashed"
                animate={{ rotate: 360, opacity: [0.7, 0.3, 0.7] }}
                transition={{ duration: 15, repeat: Infinity }}
              />
              
              <motion.div 
                className="absolute bottom-10 left-0 w-12 sm:w-16 h-12 sm:h-16 rounded-xl border-4 border-[#6764C9]"
                animate={{ rotate: -360, scale: [1, 1.1, 1], opacity: [0.7, 0.4, 0.7] }}
                transition={{ duration: 12, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Internship Cards Section */}
      <section 
        ref={cardsRef}
        className="relative px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-widest font-medium text-[#056777]">Opportunities</span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#CF9274] tracking-tight">
              EXPLORE CAREER INTERNSHIPS
            </h2>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-[#6764C9] to-[#056777] mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {internships.map((internship, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, filter: "blur(5px)" }}
                animate={isCardsInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, delay: 0.2 + (idx * 0.2) }}
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-[#0f0f2d]/80 to-[#0f0f2d] rounded-2xl transform ${idx % 2 === 0 ? '-rotate-1' : 'rotate-1'} blur-sm`}></div>
                <div className="relative bg-gradient-to-r from-[#0f0f2d] to-[#131344] text-white rounded-2xl overflow-hidden shadow-xl border border-[#056777]/20">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${idx % 2 === 0 ? 'from-[#056777] to-[#CF9274]' : 'from-[#6764C9] to-[#056777]'}`}></div>
                  
                  <div className={`absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[${internship.color}] px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg text-white text-base sm:text-xl font-bold flex items-center gap-2`}>
                    <span className="text-xl sm:text-2xl">{internship.emoji}</span> {internship.title}
                  </div>
                  
                  <div className="flex flex-col md:flex-row p-6 sm:p-8 md:p-10 pt-8 sm:pt-10 md:pt-12">
                    <div className="md:w-1/3 flex items-center justify-center mb-6 md:mb-0">
                      <motion.div 
                        className={`relative w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 bg-gradient-to-br from-[${internship.color}] to-[${internship.secondaryColor}] rounded-full flex items-center justify-center`}
                        whileHover={{ rotate: idx % 2 === 0 ? 5 : -5, scale: 1.05 }}
                        animate={{ 
                          boxShadow: `[0px 0px 0px rgba(${idx % 2 === 0 ? '207, 146, 116' : '103, 100, 201'}, 0.3), 0px 0px 30px rgba(${idx % 2 === 0 ? '207, 146, 116' : '103, 100, 201'}, 0.6), 0px 0px 0px rgba(${idx % 2 === 0 ? '207, 146, 116' : '103, 100, 201'}, 0.3)]`
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <div className={`text-${idx % 2 === 0 ? 'black' : 'white'} font-bold text-center`}>
                          <div className="text-3xl sm:text-4xl md:text-5xl">{internship.role}</div>
                          <div className="text-lg sm:text-xl md:text-2xl mt-2">{internship.position}</div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="md:w-2/3 md:pl-6 lg:pl-10">
                      <div className="space-y-4 sm:space-y-6">
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                          {internship.description}
                        </p>
                        
                        <ul className="space-y-2 sm:space-y-3">
                          {internship.skills.map((skill, i) => (
                            <motion.li 
                              key={i}
                              className="flex items-start gap-3 text-base sm:text-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isCardsInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                            >
                              <div className={`mt-1 text-[${internship.color}]`}>→</div>
                              <div>{skill}</div>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <div className="pt-4 sm:pt-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                          <motion.button 
                            className={`relative overflow-hidden bg-gradient-to-r from-[${internship.color}] to-[${internship.secondaryColor}] text-${idx % 2 === 0 ? 'black' : 'white'} font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full flex items-center justify-center gap-2 shadow-lg`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="relative z-10">Apply now</span>
                            <ArrowRight className="h-5 w-5 relative z-10" />
                            <motion.div 
                              className="absolute inset-0 bg-white opacity-10"
                              variants={shimmerVariants}
                              initial="initial"
                              animate="animate"
                            />
                          </motion.button>
                          
                          <div className="text-center md:text-right">
                            <div className="text-gray-400 text-sm sm:text-base">Send your resume:</div>
                            <a href="mailto:vijay.singh@kodevortex.in" className={`text-[#056777] hover:text-[${internship.color}] transition-colors text-sm sm:text-base`}>
                              vijay.singh@kodevortex.in
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <motion.section
        className="relative px-4 sm:px-6 md:px-12 py-16 sm:py-20"
        initial={{ opacity: 0 }}
        animate={isWhyUsInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="absolute -top-8 sm:-top-12 left-0 text-6xl sm:text-8xl md:text-9xl text-[#056777]/10 font-serif">"</div>
          <div className="absolute -bottom-16 sm:-bottom-20 right-0 text-6xl sm:text-8xl md:text-9xl text-[#056777]/10 font-serif">"</div>
          <motion.h3 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-[#056777]"
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            "Your career isn't just a job—it's a journey.
          </motion.h3>
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-white mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's help you find the right path!"
          </motion.h3>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <section 
        ref={whyUsRef}
        className="relative px-4 sm:px-6 md:px-12 py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-16">
            <motion.div
              className="mb-6 md:mb-0 text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={isWhyUsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#CF9274] text-xl sm:text-2xl md:text-3xl font-bold">
                WHY CHOOSE AN INTERNSHIP WITH US
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isWhyUsInView ? { opacity: 0.2, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent" style={{ WebkitTextStroke: "2px #1A1A40" }}>
                KODEVORTEX
              </h2>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="relative"
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate={isWhyUsInView ? "visible" : "hidden"}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-black/50 rounded-3xl transform -rotate-3 blur-sm"></div>
                <div className={`relative rounded-3xl border-4 border-[${feature.color}] bg-gradient-to-br from-[#0f0f2d] to-[#131344] p-6 sm:p-8 h-full flex`}>
                  <div className={`text-4xl sm:text-5xl md:text-6xl font-black text-[${feature.color}] mr-4 sm:mr-6`}>
                    {feature.num}.
                  </div>
                  <div className="flex-1">
                    <div className={`p-3 sm:p-4 rounded-full inline-block bg-[${feature.color}]/10 mb-3 sm:mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                      {feature.title}
                    </h3>
                    <div className={`mt-3 sm:mt-4 h-1 w-12 sm:w-16 bg-[${feature.color}]`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-16 sm:mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent mb-6 sm:mb-8" style={{ WebkitTextStroke: "2px #1A1A40" }}>
              INTERN
            </h2>
            <motion.button 
              className="relative overflow-hidden bg-gradient-to-r from-[#CF9274] to-[#A77057] text-black font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full flex items-center mx-auto justify-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Apply Today</span>
              <ArrowRight className="h-5 w-5 relative z-10" />
              <motion.div 
                className="absolute inset-0 bg-white opacity-10"
                variants={shimmerVariants}
                initial="initial"
                animate="animate"
              />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InternshipPage;