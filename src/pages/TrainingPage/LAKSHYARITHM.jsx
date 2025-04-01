import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Lakshyarithm = () => {
  const [activeTab, setActiveTab] = useState("technology");
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const techItems = [
    { name: "Python", icon: "🐍", description: "Learn Python from basics to advanced concepts.", color: "#306998" },
    { name: "Advanced Python", icon: "⚙", description: "Master professional-grade Python techniques.", color: "#0F9D58" },
    { name: "Machine Learning", icon: "🧠", description: "Explore AI and ML with practical projects.", color: "#4285F4" },
    { name: "MERN Stack", icon: "⚛", description: "Build modern web apps with MERN.", color: "#00D8FF" },
    { name: "Cybersecurity", icon: "🔒", description: "Understand security and threat analysis.", color: "#DB4437" },
    { name: "Data Science", icon: "📊", description: "Analyze and visualize data effectively.", color: "#F4B400" },
  ];

  const featureItems = [
    {
      id: 1,
      title: "Hands-on Learning Experience",
      description: "Practical learning tailored to your career path.",
      icon: "🚀",
      color: "#4285F4",
    },
    {
      id: 2,
      title: "Comprehensive Placement Preparation",
      description: "Prepare for top-tier technical interviews.",
      list: [
        "DSA mastery with practice problems",
        "Aptitude training",
        "Mock interviews",
        "Resume optimization",
        "Company-specific prep",
      ],
      icon: "🏆",
      color: "#0F9D58",
    },
    {
      id: 3,
      title: "Premium Academic Support",
      description: "Support for your semester curriculum.",
      list: [
        "Core CS fundamentals",
        "Supplementary materials",
        "Project assistance",
        "Doubt clearing",
        "Progress tracking",
      ],
      icon: "📚",
      color: "#F4B400",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-gray-100 text-gray-800 font-sans" ref={containerRef}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-green-600"
        >
          Lakshyarithm
        </motion.h1>
        <ul className="hidden md:flex gap-6">
          {["Home", "Courses", "Features", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: "#0F9D58" }}
              className="text-gray-600 hover:text-green-600 cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <motion.div
        className="relative z-10 pt-20 pb-12 max-w-6xl mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Section */}
        <motion.section className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-600">Lakshyarithm:</span> Your Path to Success
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A premium training program designed for comprehensive career and placement preparation.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <motion.div
              className="bg-green-100 text-green-700 px-6 py-3 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-bold text-xl">5 Days</span> - Standard Program
            </motion.div>
            <motion.div
              className="bg-blue-100 text-blue-700 px-6 py-3 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-bold text-xl">10 Days</span> - Premium Program
            </motion.div>
          </div>
        </motion.section>

        {/* Tabs Navigation */}
        <motion.div className="mb-12" variants={itemVariants}>
          <div className="flex justify-center gap-4 border-b border-gray-200 pb-2">
            <motion.button
              className={`px-6 py-2 font-semibold rounded-t-lg ${activeTab === "technology" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"}`}
              onClick={() => setActiveTab("technology")}
              whileHover={{ scale: 1.05 }}
            >
              Technology Tracks
            </motion.button>
            <motion.button
              className={`px-6 py-2 font-semibold rounded-t-lg ${activeTab === "features" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"}`}
              onClick={() => setActiveTab("features")}
              whileHover={{ scale: 1.05 }}
            >
              Program Features
            </motion.button>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "technology" && (
              <motion.div
                key="technology"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {techItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl" style={{ color: item.color }}>{item.icon}</span>
                      <h3 className="text-xl font-semibold" style={{ color: item.color }}>{item.name}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                    <button className="mt-4 text-green-600 font-semibold hover:underline">Learn More</button>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "features" && (
              <motion.div
                key="features"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 space-y-6"
              >
                {featureItems.map((feature) => (
                  <motion.div
                    key={feature.id}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl" style={{ color: feature.color }}>{feature.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold" style={{ color: feature.color }}>{feature.title}</h3>
                        <p className="text-gray-600 mt-2">{feature.description}</p>
                        {feature.list && (
                          <>
                            <AnimatePresence>
                              {activeFeature === feature.id && (
                                <motion.ul
                                  className="mt-4 space-y-2 text-gray-600 list-disc list-inside"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                >
                                  {feature.list.map((item, i) => (
                                    <motion.li key={i} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: i * 0.1 } }}>
                                      {item}
                                    </motion.li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                            <button
                              className="mt-4 text-green-600 font-semibold hover:underline"
                              onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                            >
                              {activeFeature === feature.id ? "Show Less" : "View Details"}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.section className="text-center mt-12" variants={itemVariants}>
          <motion.button
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
          <p className="mt-4 text-gray-600">
            Limited spots available. Next batch starts <span className="font-semibold text-green-600">April 5, 2025</span>.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm text-gray-500">
            <span>Dedicated Placement Support</span>
            <span>•</span>
            <span>Industry Recognized Certificate</span>
            <span>•</span>
            <span>Continuous Mentoring</span>
          </div>
        </motion.section>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Lakshyarithm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Lakshyarithm;