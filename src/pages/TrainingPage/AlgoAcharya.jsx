import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AlgoAcharya = () => {
  const [activeTab, setActiveTab] = useState("technology");
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);

    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, type: "spring", bounce: 0.3 } },
  };

  const techItems = [
    { name: "Python", icon: "🐍", description: "Master Python with in-depth coverage of core concepts, advanced techniques, and real-world applications.", color: "from-cyan-500 to-blue-600" },
    { name: "ML & AI", icon: "🧠", description: "Dive into machine learning and AI with neural networks, deep learning, and hands-on projects.", color: "from-violet-500 to-purple-600" },
    { name: "MERN Stack", icon: "⚛", description: "Build full-stack web applications using MongoDB, Express.js, React, and Node.js.", color: "from-cyan-400 to-teal-500" },
    { name: "Cybersecurity", icon: "🔒", description: "Learn cybersecurity essentials, ethical hacking, and advanced threat detection strategies.", color: "from-purple-500 to-pink-600" },
    { name: "Data Analysis", icon: "📊", description: "Analyze and visualize data with modern tools like Pandas, Tableau, and Power BI.", color: "from-cyan-600 to-teal-600" },
    { name: "Cloud Computing", icon: "☁", description: "Master AWS, Azure, and Google Cloud with practical cloud architecture projects.", color: "from-blue-500 to-indigo-600" },
  ];

  const featureItems = [
    {
      id: 1,
      title: "Immersive Learning Experience",
      description: "Engage in career-focused projects, live coding sessions, and personalized feedback from industry experts.",
      icon: "🚀",
      color: "text-cyan-400",
      bgColor: "from-cyan-700/30 to-teal-500/40",
      details: "Interactive workshops, real-time problem-solving, and hands-on labs designed to accelerate your learning curve.",
    },
    {
      id: 2,
      title: "Comprehensive Placement Support",
      description: "Prepare thoroughly for technical interviews and secure top-tier job opportunities.",
      list: [
        "Advanced DSA with LeetCode-style challenges",
        "Tailored company-specific interview prep",
        "Mock interviews with senior engineers",
        "Portfolio and LinkedIn optimization",
        "Expert salary negotiation guidance",
      ],
      icon: "🏆",
      color: "text-violet-400",
      bgColor: "from-violet-700/30 to-purple-500/40",
      details: "A structured roadmap to placement success, including resume reviews and job application strategies.",
    },
    {
      id: 3,
      title: "Premium Learning Ecosystem",
      description: "Gain access to exclusive resources, mentorship, and a vibrant tech community.",
      list: [
        "1:1 mentorship with industry leaders",
        "Lifetime access to updated course content",
        "Membership in an elite tech community",
        "Direct job referrals and placement support",
        "Globally recognized certification",
      ],
      icon: "💎",
      color: "text-teal-400",
      bgColor: "from-teal-700/30 to-cyan-500/40",
      details: "A holistic ecosystem to support your growth, from learning to networking and career advancement.",
    },
  ];

  // Enhanced Particle System
  const particles = Array(100).fill().map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 2,
    speed: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden font-mono" ref={containerRef}>
      {/* Glowing Cursor Effect */}
      <motion.div
        className="fixed w-40 h-40 rounded-full pointer-events-none z-50 hidden md:block"
        animate={{ x: cursorPos.x - 20, y: cursorPos.y - 20 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        style={{
          background: "radial-gradient(circle, rgba(0,255,255,0.3) 0%, rgba(147,51,234,0.2) 70%, transparent 100%)",
          boxShadow: "0 0 50px rgba(0,255,255,0.5), 0 0 100px rgba(147,51,234,0.3)",
          filter: "blur(10px)",
        }}
      />

      {/* Particle System with Cyan and Violet Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.id % 2 === 0 ? "#00FFFF" : "#9333EA",
              boxShadow: `0 0 20px ${particle.id % 2 === 0 ? "#00FFFF" : "#9333EA"}, 0 0 40px ${particle.id % 2 === 0 ? "#00FFFF" : "#9333EA"}`,
              filter: "blur(2px)",
            }}
            animate={{
              y: [0, -1200],
              opacity: [particle.opacity, particle.opacity * 1.3, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 10 / particle.speed,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      {/* Gradient Background */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0,255,255,0.2) 0%, rgba(147,51,234,0.2) 50%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-screen w-full max-w-7xl mx-auto px-6 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-lg z-50 px-6 py-4 flex justify-between items-center shadow-[0_0_20px_rgba(0,255,255,0.3)]">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
            style={{ textShadow: "0 0 15px rgba(0,255,255,0.6)" }}
          >
            AlgoAcharya
          </motion.h1>
          <ul className="hidden md:flex gap-8">
            {["Home", "Courses", "Features", "About", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "#00FFFF", textShadow: "0 0 10px rgba(0,255,255,0.8)" }}
                className="cursor-pointer text-gray-300"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Hero Section */}
        <motion.section className="pt-24 pb-16 text-center" variants={itemVariants}>
          <motion.div
            className="relative mb-12 mx-auto w-48 h-48"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-600 opacity-60 blur-3xl rounded-full"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="relative z-10 w-full h-full"
              whileHover={{ rotate: 360, transition: { duration: 2 } }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-cyan-500/60"
                animate={{ boxShadow: "0 0 25px rgba(0,255,255,0.7), 0 0 50px rgba(147,51,234,0.5)" }}
              />
              <img src="/api/placeholder/192/192" alt="AlgoAcharya Logo" className="w-full h-full rounded-full object-cover border-2 border-cyan-500/80" />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
            style={{ textShadow: "0 0 25px rgba(0,255,255,0.8)" }}
          >
            AlgoAcharya
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            style={{ textShadow: "0 0 10px rgba(0,255,255,0.3)" }}
          >
            Unleash your potential with a transformative learning experience blending <span className="text-cyan-400 font-bold">cutting-edge technology</span> and{" "}
            <span className="text-violet-400 font-bold">timeless wisdom</span>.
          </motion.p>
          <motion.div className="flex flex-wrap gap-8 justify-center mt-12">
            {[
              { days: "5", label: "Intensive Program", gradient: "from-cyan-500 to-teal-500" },
              { days: "10", label: "Master Program", gradient: "from-violet-500 to-purple-600" },
            ].map((badge, i) => (
              <motion.div
                key={i}
                className="relative group"
                whileHover={{ scale: 1.1, boxShadow: "0 0 35px rgba(0,255,255,0.6)" }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${badge.gradient} blur-sm opacity-50 rounded-xl group-hover:opacity-70`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className={`relative px-8 py-4 bg-gradient-to-r ${badge.gradient} rounded-xl shadow-lg border border-cyan-500/40`}>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-bold text-white">{badge.days}</span>
                    <div className="text-left">
                      <span className="block text-white font-semibold">Day</span>
                      <span className="text-white text-sm opacity-80">{badge.label}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Tabs Section */}
        <motion.section className="py-16" variants={itemVariants}>
          <div className="flex justify-center mb-12">
            <div className="bg-black/60 backdrop-blur-lg p-3 rounded-xl border border-cyan-500/40 shadow-[0_0_25px_rgba(0,255,255,0.3)]">
              <motion.button
                className={`py-3 px-10 rounded-lg font-medium ${activeTab === "technology" ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-[0_0_20px_rgba(0,255,255,0.7)]" : "text-gray-300 hover:text-cyan-400"}`}
                onClick={() => setActiveTab("technology")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Technology Tracks
              </motion.button>
              <motion.button
                className={`py-3 px-10 rounded-lg font-medium ${activeTab === "features" ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.7)]" : "text-gray-300 hover:text-violet-400"}`}
                onClick={() => setActiveTab("features")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Program Features
              </motion.button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "technology" && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                key="technology"
              >
                {techItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-cyan-500/40 shadow-lg"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,255,255,0.5), 0 0 60px rgba(147,51,234,0.3)" }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 hover:opacity-40 transition-opacity duration-300 rounded-xl`}
                    />
                    <div className="relative z-10">
                      <motion.div
                        className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-black border border-cyan-500/60 mb-6"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 1.2 }}
                      >
                        <span className="text-4xl" style={{ textShadow: "0 0 15px rgba(0,255,255,0.7)" }}>{item.icon}</span>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-4" style={{ textShadow: "0 0 10px rgba(0,255,255,0.4)" }}>{item.name}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                      <motion.div
                        className={`mt-6 h-1 w-24 rounded-full bg-gradient-to-r ${item.color}`}
                        animate={{ scaleX: [1, 1.3, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "features" && (
              <motion.div
                className="space-y-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                key="features"
              >
                {featureItems.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-violet-500/40 shadow-lg"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 1 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(147,51,234,0.5), 0 0 60px rgba(0,255,255,0.3)" }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-xl`}
                    />
                    <div className="relative z-10 flex items-start gap-6">
                      <motion.div
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-black border border-violet-500/60"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 1.2 }}
                      >
                        <span className={`text-3xl ${feature.color}`} style={{ textShadow: "0 0 15px rgba(147,51,234,0.7)" }}>{feature.icon}</span>
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3" style={{ textShadow: "0 0 10px rgba(147,51,234,0.4)" }}>{feature.title}</h3>
                        <p className="text-gray-300 mb-4">{feature.description}</p>
                        <p className="text-gray-400 text-sm mb-4">{feature.details}</p>
                        {feature.list && (
                          <>
                            <AnimatePresence>
                              {activeFeature === feature.id && (
                                <motion.div
                                  className="mt-6 p-6 bg-black/80 rounded-xl border border-violet-500/50 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                >
                                  <ul className="space-y-4">
                                    {feature.list.map((item, i) => (
                                      <motion.li
                                        key={i}
                                        className="flex items-start gap-4 text-gray-300"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.15 }}
                                      >
                                        <span className={`text-xl ${feature.color}`} style={{ textShadow: "0 0 8px rgba(147,51,234,0.5)" }}>•</span>
                                        <span>{item}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                            <motion.button
                              className={`mt-6 px-6 py-2 rounded-lg text-sm ${activeFeature === feature.id ? "bg-gray-800/70 text-gray-300" : `${feature.color} bg-black/70`} border border-violet-500/50`}
                              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(147,51,234,0.6)" }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                            >
                              {activeFeature === feature.id ? "Show Less" : "View Details"} <span>{activeFeature === feature.id ? "↑" : "↓"}</span>
                            </motion.button>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* CTA Section */}
        <motion.section className="py-16 text-center" variants={itemVariants}>
          <motion.div className="relative group mb-8 max-w-md mx-auto">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-violet-600 rounded-full blur-md opacity-70 group-hover:opacity-90"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.9, 0.7] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.button
              className="relative py-4 px-12 w-full bg-gradient-to-r from-cyan-500 via-teal-500 to-violet-600 rounded-full text-white text-lg font-bold shadow-[0_0_25px_rgba(0,255,255,0.5)]"
              whileHover={{ scale: 1.1, boxShadow: "0 0 50px rgba(0,255,255,0.7)" }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button>
          </motion.div>
          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span>100% Placement Assistance</span> • <span>Industry Recognized Certificate</span> • <span>Lifetime Access</span>
          </motion.div>
        </motion.section>

        {/* Footer */}
      </motion.div>
    </div>
  );
};

export default AlgoAcharya;