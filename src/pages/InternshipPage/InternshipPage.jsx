/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
 
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Award, Briefcase, Users, Clock, Star, 
  CheckCircle, PenTool, Monitor, Palette, Type, 
  MapPin, Book, Sparkles, Code, Zap, TrendingUp,
  MessageCircle, Share2
} from "lucide-react";

const InternshipPage = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [activeSection, setActiveSection] = useState('all');
  const [deviceType, setDeviceType] = useState('desktop');
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  // Determine device type
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setDeviceType('desktop');
      } else if (width >= 768) {
        setDeviceType('tablet');
      } else {
        setDeviceType('mobile');
      }
    };

    // Initial check
    handleResize();

    // Add event listener
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
      skills: [
        "Figma & Adobe XD",
        "User Research",
        "Wireframing & Prototyping",
        "Design Systems"
      ],
      keyHighlights: [
        "Build Professional Design Portfolio",
        "Mentorship from Design Experts",
        "Real-World UX Projects"
      ],
      requiredSkills: [
        "Basic Design Software Knowledge",
        "Creative Problem-Solving",
        "Understanding of User Experience Principles"
      ]
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
      skills: [
        "JavaScript/React",
        "Python/Django",
        "Git Version Control",
        "API Development"
      ],
      keyHighlights: [
        "Work on Live Projects",
        "Learn Modern Tech Stacks",
        "Collaborative Development Environment"
      ],
      requiredSkills: [
        "Basic Programming Knowledge",
        "Problem-Solving Skills",
        "Passion for Technology"
      ]
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
      skills: [
        "Copywriting",
        "Social Media Marketing",
        "SEO Fundamentals",
        "Content Strategy"
      ],
      keyHighlights: [
        "Build Writing Portfolio",
        "Learn Digital Marketing",
        "Develop Creative Communication Skills"
      ],
      requiredSkills: [
        "Strong Writing Skills",
        "Creativity",
        "Basic Digital Marketing Understanding"
      ]
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
      skills: [
        "Python/Pandas",
        "Data Visualization",
        "Machine Learning Basics",
        "Statistical Analysis"
      ],
      keyHighlights: [
        "Real-World Data Projects",
        "Work with Advanced Analytics Tools",
        "Build Data Science Portfolio"
      ],
      requiredSkills: [
        "Basic Programming Knowledge",
        "Statistical Understanding",
        "Analytical Thinking"
      ]
    },
    {
      id: 5,
      title: "Social Media Handler Internship",
      emoji: "📱",
      role: "Digital Engagement",
      color: "#CF9274",
      duration: "3-4 Months",
      stipend: "Performance Based Stipend",
      category: "marketing",
      description: "Drive engagement and grow brand presence through strategic social media management.",
      skills: [
        "Content Planning",
        "Social Media Analytics",
        "Community Management",
        "Campaign Strategy"
      ],
      keyHighlights: [
        "Manage Real Brand Accounts",
        "Social Media Growth Strategy",
        "Content Creation Experience"
      ],
      requiredSkills: [
        "Understanding of Social Platforms",
        "Basic Graphic Design Skills",
        "Strong Communication Skills"
      ]
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

  // Render category filter based on device type
  const renderCategoryFilter = () => {
    // Desktop view: Always visible buttons
    if (deviceType === 'desktop') {
      return (
        <div className="flex justify-center space-x-4 mb-8 px-4">
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
        </div>
      );
    }
    
    // Mobile/Tablet view: Floating button to open category modal
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

        {/* Category Selection Modal */}
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-[#0a1128] via-[#0f2042] to-[#1a3366] min-h-screen text-white overflow-x-hidden"
    >
      {/* Hero Section */}
      <div className="relative px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10 text-left mb-12 lg:mb-0">
            <h2 className="text-lg md:text-xl uppercase text-[#CF9274] tracking-wider mb-4">KICKSTART YOUR CAREER</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Are you looking for an <span className="bg-gradient-to-r from-[#CF9274] to-[#6764C9] bg-clip-text text-transparent">INTERNSHIP?</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Kickstart your career with a hands-on, industry-focused internship at KodeVortex. 
              Gain real-world skills, expert mentorship, and work on cutting-edge projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6764C9] px-6 py-3 rounded-full text-white flex items-center justify-center sm:justify-start"
              >
                Find Your Path <ArrowRight className="ml-2" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 px-6 py-3 rounded-full text-white flex items-center justify-center sm:justify-start"
              >
                View Opportunities
              </motion.button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="/api/placeholder/450/600" 
                alt="Mobile app interface" 
                className="rounded-2xl shadow-2xl mx-auto max-w-full h-auto"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-dashed border-[#CF9274]/50 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-[#6764C9]/20 blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Browse Opportunities</h2>
        {renderCategoryFilter()}
      </div>

      {/* Internship Opportunities Grid */}
      <div className="px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredInternships.map((internship) => (
            <motion.div 
              key={internship.id}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 30px rgba(0,0,0,0.3)"
              }}
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
                  <h3 className="text-xl font-bold mb-2 line-clamp-1 bg-gradient-to-r from-[#CF9274] to-[#6764C9] bg-clip-text text-transparent">
                    {internship.title}
                  </h3>
                  <p className="text-white/70 mb-4 line-clamp-3 h-20">
                    {internship.description}
                  </p>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-white/80">
                    <Clock className="mr-2 text-[#056777]" size={18} />
                    <span className="truncate">{internship.duration}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Star className="mr-2 text-[#6764C9]" size={18} />
                    <span className="truncate">{internship.stipend}</span>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-[#6764C9] to-[#CF9274] text-white py-3 rounded-full"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Interns Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={`testimonial-${i}`}
                whileHover={{ y: -10 }}
                className="bg-[#121228]/70 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#CF9274] to-[#6764C9] mr-4 flex items-center justify-center text-white font-bold">
                    {i}
                  </div>
                  <div>
                    <h4 className="font-bold">Former Intern {i}</h4>
                    <p className="text-sm text-white/70">Role at KodeVortex</p>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "My internship experience was transformative. The mentorship and hands-on projects 
                  helped me build skills that landed me my dream job."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>



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
                <div className="text-3xl">{selectedInternship.emoji}</div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#CF9274] to-[#6764C9] bg-clip-text text-transparent">
                  {selectedInternship.title}
                </h3>
              </div>
              
              <p className="text-white/80 mb-6">{selectedInternship.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-[#121228]/70 px-4 py-2 rounded-lg border border-white/10">
                  <Clock className="inline-block mr-2 text-[#056777]" size={18} />
                  {selectedInternship.duration}
                </div>
                <div className="bg-[#121228]/70 px-4 py-2 rounded-lg border border-white/10">
                  <Star className="inline-block mr-2 text-[#6764C9]" size={18} />
                  {selectedInternship.stipend}
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#056777] mb-3">Skills You'll Develop</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedInternship.skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="bg-[#1c1c3a] text-white/80 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#056777] mb-3">Required Skills</h4>
                  {selectedInternship.requiredSkills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex items-center text-white/80 mb-2"
                    >
                      <CheckCircle className="mr-2 text-[#CF9274]" size={18} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#056777] mb-3">Key Highlights</h4>
                  {selectedInternship.keyHighlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="flex items-center text-white/80 mb-2"
                    >
                      <Star className="mr-2 text-[#CF9274]" size={18} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-6">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-[#6764C9] to-[#CF9274] text-white py-3 rounded-full"
                  >
                    Apply Now
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedInternship(null)}
                    className="px-4 py-3 rounded-full border border-white/20 hover:bg-white/10"
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
