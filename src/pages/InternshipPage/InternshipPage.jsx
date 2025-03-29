/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight, Award, Briefcase, Users, Clock, Star,
  CheckCircle, PenTool, Monitor, Palette, Type,
  MapPin, Book, Sparkles, Code, Zap, TrendingUp,
  MessageCircle, Share2, Target
} from "lucide-react";

const InternshipPage = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [activeSection, setActiveSection] = useState('all');
  const [deviceType, setDeviceType] = useState('desktop');
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const heroRef = useRef(null);
  const testimonialsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });

  // Optimized device detection with debouncing
  useEffect(() => {
    const debounce = (fn, ms) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), ms);
      };
    };

    const handleResize = debounce(() => {
      const width = window.innerWidth;
      if (width >= 1024) setDeviceType('desktop');
      else if (width >= 768) setDeviceType('tablet');
      else setDeviceType('mobile');
    }, 100);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Internship Opportunities
  const internships = [
    {
      id: 1,
      title: "UI/UX Design Internship",
      emoji: "🎨",
      role: "Design Innovation",
      color: "#CF9274",
      duration: "3-4 Months",
      stipend: "Performance Based Stipend",
      category: "design",
      description: "Transform user experiences through innovative design thinking and creative problem-solving.",
      skills: ["Figma & Adobe XD", "User Research", "Wireframing & Prototyping", "Design Systems"],
      keyHighlights: ["Build Professional Design Portfolio", "Mentorship from Design Experts", "Real-World UX Projects"],
      requiredSkills: ["Basic Design Software Knowledge", "Creative Problem-Solving", "Understanding of User Experience Principles"]
    },
    {
      id: 2,
      title: "Software Development Internship",
      emoji: "💻",
      role: "Tech Innovation",
      color: "#6764C9",
      duration: "4-6 Months",
      stipend: "Performance Based Stipend",
      category: "dev",
      description: "Develop cutting-edge software solutions and gain hands-on coding experience.",
      skills: ["JavaScript/React", "Python/Django", "Git Version Control", "API Development"],
      keyHighlights: ["Work on Live Projects", "Learn Modern Tech Stacks", "Collaborative Development Environment"],
      requiredSkills: ["Basic Programming Knowledge", "Problem-Solving Skills", "Passion for Technology"]
    },
    {
      id: 3,
      title: "Content Creation Internship",
      emoji: "✍️",
      role: "Creative Communication",
      color: "#056777",
      duration: "3 Months",
      stipend: "Performance Based Stipend",
      category: "content",
      description: "Craft compelling narratives and develop engaging content strategies.",
      skills: ["Copywriting", "Social Media Marketing", "SEO Fundamentals", "Content Strategy"],
      keyHighlights: ["Build Writing Portfolio", "Learn Digital Marketing", "Develop Creative Communication Skills"],
      requiredSkills: ["Strong Writing Skills", "Creativity", "Basic Digital Marketing Understanding"]
    },
    {
      id: 4,
      title: "Data Science Internship",
      emoji: "📊",
      role: "Analytical Innovation",
      color: "#4a90e2",
      duration: "4-5 Months",
      stipend: "Performance Based Stipend",
      category: "dev",
      description: "Dive into the world of data analytics, machine learning, and predictive modeling.",
      skills: ["Python/Pandas", "Data Visualization", "Machine Learning Basics", "Statistical Analysis"],
      keyHighlights: ["Real-World Data Projects", "Work with Advanced Analytics Tools", "Build Data Science Portfolio"],
      requiredSkills: ["Basic Programming Knowledge", "Statistical Understanding", "Analytical Thinking"]
    },
    {
      id: 5,
      title: "Marketing Internship",
      emoji: "📱",
      role: "Digital Engagement",
      color: "#CF9274",
      duration: "3-4 Months",
      stipend: "Performance Based Stipend",
      category: "marketing",
      description: "Drive engagement and grow brand presence through strategic social media management.",
      skills: ["Content Planning", "Social Media Analytics", "Community Management", "Campaign Strategy"],
      keyHighlights: ["Manage Real Brand Accounts", "Social Media Growth Strategy", "Content Creation Experience"],
      requiredSkills: ["Understanding of Social Platforms", "Basic Graphic Design Skills", "Strong Communication Skills"]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sanskrati Agrawal",
      role: "UI/UX Role at KodeVortex",
      quote: "My internship was a game-changer. The guidance I received and the practical projects I worked on equipped me with the expertise I needed to secure my dream role."
    },
    {
      id: 2,
      name: "Sonal Mittal",
      role: "FullStack Developer at KodeVortex",
      quote: "My internship experience was transformative. The mentorship and hands-on projects helped me build skills that landed me my dream job."
    },
    {
      id: 3,
      name: "Harsh Verma",
      role: "FullStack Developer at KodeVortex",
      quote: "During my internship, the exceptional mentorship and immersive project work significantly boosted my abilities, ultimately paving the way for me to achieve my career aspirations."
    }
  ];

  const categoryIcons = {
    all: <Sparkles className="w-6 h-6" />,
    design: <Palette className="w-6 h-6" />,
    dev: <Code className="w-6 h-6" />,
    content: <Book className="w-6 h-6" />,
    marketing: <Share2 className="w-6 h-6" />
  };

  const filteredInternships = activeSection === 'all'
    ? internships
    : internships.filter(internship => internship.category === activeSection);

  // Slide navigation for internships (mobile/tablet)
  const nextSlide = () => setCurrentSlide((prev) => 
    prev === filteredInternships.length - 1 ? 0 : prev + 1
  );
  const prevSlide = () => setCurrentSlide((prev) => 
    prev === 0 ? filteredInternships.length - 1 : prev - 1
  );

  // Slide navigation for testimonials
  const nextTestimonial = () => setCurrentTestimonialSlide((prev) => 
    prev === testimonials.length - 1 ? 0 : prev + 1
  );
  const prevTestimonial = () => setCurrentTestimonialSlide((prev) => 
    prev === 0 ? testimonials.length - 1 : prev - 1
  );

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.03, boxShadow: "0 20px 30px rgba(0,0,0,0.3)" }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    })
  };

  // Rain animation variants
  const rainVariants = {
    animate: (i) => ({
      y: [0, 1000],
      opacity: [0.7, 0],
      transition: {
        y: { duration: 2 + i * 0.2, repeat: Infinity, ease: "linear" },
        opacity: { duration: 2 + i * 0.2, repeat: Infinity, ease: "linear" }
      }
    })
  };

  // New animated design variants for hero section
  const orbitVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const renderCategoryFilter = () => {
    if (deviceType === 'desktop') {
      return (
        <motion.div 
          className="flex justify-center space-x-4 mb-8 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {Object.keys(categoryIcons).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveSection(category)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-full transition-all ${
                activeSection === category
                  ? 'bg-[#6764C9] text-white shadow-2xl'
                  : 'bg-[#121228] text-white/50 hover:bg-[#1c1c3a]'
              }`}
            >
              {categoryIcons[category]}
            </motion.button>
          ))}
        </motion.div>
      );
    }

    return (
      <>
        <motion.button
          onClick={() => setIsCategoryModalOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-40 bg-[#6764C9] text-white p-4 rounded-full shadow-2xl"
        >
          {categoryIcons[activeSection]}
        </motion.button>
        
        <AnimatePresence>
          {isCategoryModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
              onClick={() => setIsCategoryModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-[#121228] p-6 rounded-2xl flex flex-wrap justify-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                {Object.keys(categoryIcons).map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => {
                      setActiveSection(category);
                      setIsCategoryModalOpen(false);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-full transition-all ${
                      activeSection === category
                        ? 'bg-[#6764C9] text-white shadow-2xl'
                        : 'bg-[#121228] text-white/50 hover:bg-[#1c1c3a]'
                    }`}
                  >
                    {categoryIcons[category]}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  const renderInternships = () => {
    if (deviceType === 'desktop') {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredInternships.map((internship) => (
            <motion.div
              key={internship.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onClick={() => setSelectedInternship(internship)}
              className="bg-[#121228] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#6764C9]/30 transition-all"
            >
              <div className="h-2" style={{ backgroundColor: internship.color }} />
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="text-4xl mb-2">{internship.emoji}</div>
                  <div className="px-3 py-1 text-xs rounded-full font-medium" style={{
                    backgroundColor: `${internship.color}30`,
                    color: internship.color
                  }}>
                    {internship.role}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 line-clamp-1 bg-gradient-to-r from-[#CF9274] to-[#6764C9] bg-clip-text text-transparent">
                    {internship.title}
                  </h3>
                  <p className="text-white/70 mb-4 line-clamp-3 text-sm md:text-base h-20">
                    {internship.description}
                  </p>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-white/80 text-sm md:text-base">
                    <Clock className="mr-2 text-[#056777]" size={18} />
                    <span className="truncate">{internship.duration}</span>
                  </div>
                  <div className="flex items-center text-white/80 text-sm md:text-base">
                    <Star className="mr-2 text-[#6764C9]" size={18} />
                    <span className="truncate">{internship.stipend}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-[#6764C9] to-[#CF9274] text-white py-3 rounded-full text-sm md:text-base"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }

    // Mobile/Tablet slider
    return (
      <div className="relative px-4">
        <AnimatePresence initial={false} custom={currentSlide}>
          <motion.div
            key={currentSlide}
            custom={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedInternship(filteredInternships[currentSlide])}
              className="bg-[#121228] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#6764C9]/30 transition-all mx-auto max-w-md"
            >
              <div className="h-2" style={{ backgroundColor: filteredInternships[currentSlide].color }} />
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="text-4xl mb-2">{filteredInternships[currentSlide].emoji}</div>
                  <div className="px-3 py-1 text-xs md:text-sm rounded-full font-medium" style={{
                    backgroundColor: `${filteredInternships[currentSlide].color}30`,
                    color: filteredInternships[currentSlide].color
                  }}>
                    {filteredInternships[currentSlide].role}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 line-clamp-1 bg-gradient-to-r from-[#CF9274] to-[#6764C9] bg-clip-text text-transparent">
                    {filteredInternships[currentSlide].title}
                  </h3>
                  <p className="text-white/70 mb-4 line-clamp-3 text-sm md:text-base h-20">
                    {filteredInternships[currentSlide].description}
                  </p>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-white/80 text-sm md:text-base">
                    <Clock className="mr-2 text-[#056777]" size={18} />
                    <span className="truncate">{filteredInternships[currentSlide].duration}</span>
                  </div>
                  <div className="flex items-center text-white/80 text-sm md:text-base">
                    <Star className="mr-2 text-[#6764C9]" size={18} />
                    <span className="truncate">{filteredInternships[currentSlide].stipend}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-[#6764C9] to-[#CF9274] text-white py-3 rounded-full text-sm md:text-base"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="p-2 bg-[#6764C9] rounded-full"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="p-2 bg-[#6764C9] rounded-full"
          >
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {filteredInternships.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === currentSlide ? 'bg-[#6764C9]' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-[#0a1128] via-[#0f2042] to-[#1a3366] min-h-screen text-white overflow-x-hidden relative"
    >
      {/* Animated Background with Rain */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            custom={i}
            variants={rainVariants}
            animate="animate"
            className="absolute bg-[#6764C9]/30 rounded-full"
            style={{
              width: `${20 + i * 5}px`,
              height: `${20 + i * 5}px`,
              left: `${10 + i * 20}%`,
              top: `-${20 + i * 5}px`,
              filter: 'blur(2px)'
            }}
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`rect-${i}`}
            custom={i}
            variants={rainVariants}
            animate="animate"
            className="absolute bg-[#CF9274]/30"
            style={{
              width: `${15 + i * 5}px`,
              height: `${30 + i * 10}px`,
              left: `${60 - i * 15}%`,
              top: `-${30 + i * 10}px`,
              filter: 'blur(2px)'
            }}
          />
        ))}
      </div>

      {/* Hero Section with New Animated Design */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative px-4 py-16 md:py-24 z-10"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="lg:w-1/2 z-10 text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-lg md:text-2xl uppercase text-[#CF9274] tracking-wider mb-4">KICKSTART YOUR CAREER</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Are you looking for an <span className="bg-gradient-to-r from-[#CF9274] to-[#6764C9] bg-clip-text text-transparent">INTERNSHIP?</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              Kickstart your career with a hands-on, industry-focused internship at KodeVortex. 
              Gain real-world skills, expert mentorship, and work on cutting-edge projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6764C9] px-6 py-3 rounded-full text-white text-base md:text-lg flex items-center justify-center sm:justify-start"
              >
                Find Your Path <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 px-6 py-3 rounded-full text-white text-base md:text-lg flex items-center justify-center sm:justify-start"
              >
                View Opportunities
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 relative w-full max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative z-10 flex items-center justify-center">
              <motion.div 
                className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                variants={orbitVariants}
                animate="animate"
              >
                <div className="absolute w-8 h-8 rounded-full bg-[#CF9274]/50 top-0 left-1/2 -translate-x-1/2" />
                <div className="absolute w-6 h-6 rounded-full bg-[#6764C9]/50 bottom-0 left-1/2 -translate-x-1/2" />
                <div className="absolute w-10 h-10 rounded-full bg-[#056777]/50 left-0 top-1/2 -translate-y-1/2" />
                <div className="absolute w-8 h-8 rounded-full bg-[#4a90e2]/50 right-0 top-1/2 -translate-y-1/2" />
              </motion.div>
              <motion.div
                variants={pulseVariants}
                animate="animate"
                className="relative"
              >
                <Target className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 text-[#6764C9]/30" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Category Filter */}
      <div className="py-8 relative z-10">
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Browse Opportunities
        </motion.h2>
        {renderCategoryFilter()}
      </div>

      {/* Internship Opportunities */}
      <div className="px-4 py-8 relative z-10">
        {renderInternships()}
      </div>

      {/* Testimonials Section with Carousel */}
      <motion.div
        ref={testimonialsRef}
        initial={{ opacity: 0 }}
        animate={isTestimonialsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            What Our Interns Say
          </motion.h2>
          <div className="relative">
            <AnimatePresence initial={false} custom={currentTestimonialSlide}>
              <motion.div
                key={currentTestimonialSlide}
                custom={currentTestimonialSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full max-w-2xl mx-auto"
              >
                <motion.div
                  className="bg-[#121228]/70 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                  whileHover={{ y: -10 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#CF9274] to-[#6764C9] mr-4 flex items-center justify-center text-white font-bold">
                      {testimonials[currentTestimonialSlide].id}
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg">{testimonials[currentTestimonialSlide].name}</h4>
                      <p className="text-sm md:text-base text-white/70">{testimonials[currentTestimonialSlide].role}</p>
                    </div>
                  </div>
                  <p className="text-white/80 italic text-sm md:text-base">"{testimonials[currentTestimonialSlide].quote}"</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-between mt-6 max-w-2xl mx-auto">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="p-2 bg-[#6764C9] rounded-full"
              >
                <ArrowRight className="w-6 h-6 rotate-180" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="p-2 bg-[#6764C9] rounded-full"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <motion.div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentTestimonialSlide ? 'bg-[#6764C9]' : 'bg-white/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentTestimonialSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Internship Details Modal */}
      <AnimatePresence>
        {selectedInternship && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedInternship(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#121228] rounded-2xl p-6 max-w-md w-full border border-white/10 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl md:text-4xl">{selectedInternship.emoji}</div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#CF9274] to-[#6764C9] bg-clip-text text-transparent">
                  {selectedInternship.title}
                </h3>
              </div>
              <p className="text-white/80 mb-6 text-sm md:text-base">{selectedInternship.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-[#121228]/70 px-4 py-2 rounded-lg border border-white/10">
                  <Clock className="inline-block mr-2 text-[#056777]" size={18} />
                  <span className="text-sm md:text-base">{selectedInternship.duration}</span>
                </div>
                <div className="bg-[#121228]/70 px-4 py-2 rounded-lg border border-white/10">
                  <Star className="inline-block mr-2 text-[#6764C9]" size={18} />
                  <span className="text-sm md:text-base">{selectedInternship.stipend}</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#056777] mb-3 text-base md:text-lg">Skills You'll Develop</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedInternship.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-[#1c1c3a] text-white/80 px-3 py-1 rounded-full text-sm md:text-base"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#056777] mb-3 text-base md:text-lg">Required Skills</h4>
                  {selectedInternship.requiredSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center text-white/80 mb-2 text-sm md:text-base"
                    >
                      <CheckCircle className="mr-2 text-[#CF9274]" size={18} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-[#056777] mb-3 text-base md:text-lg">Key Highlights</h4>
                  {selectedInternship.keyHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center text-white/80 mb-2 text-sm md:text-base"
                    >
                      <Star className="mr-2 text-[#CF9274]" size={18} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  <motion.a
                    href="https://forms.gle/iFtBp8V5jYyCqnjF9"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-[#6764C9] to-[#CF9274] text-white py-3 rounded-full text-center text-sm md:text-base"
                  >
                    Apply Now
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedInternship(null)}
                    className="px-4 py-3 rounded-full border border-white/20 hover:bg-white/10 text-sm md:text-base"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InternshipPage;
