import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  const [activeSection, setActiveSection] = useState('mission');

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Particle Background Effect
  const generateParticles = (count) => {
    return [...Array(count)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      delay: Math.random() * 2
    }));
  };

  const particles = generateParticles(40);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#001f3f] to-[#1a1a2e] text-white overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-cyan-500/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity
            }}
            animate={{
              y: [0, particle.size * 30, 0],
              x: [0, particle.size * 20, 0],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + particle.size * 5,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
        className="relative z-10 container mx-auto px-4 py-16"
      >
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
              KODE VORTEX
            </span>
          </h1>
          <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-full"></div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-12 space-x-4"
        >
          {['Mission', 'Vision', 'Team'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section.toLowerCase())}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeSection === section.toLowerCase() 
                  ? 'bg-gradient-to-r from-cyan-600 to-violet-600 text-white' 
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
              }`}
            >
              {section}
            </button>
          ))}
        </motion.div>

        {/* Mission Section */}
        {activeSection === 'mission' && (
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-600/20 rounded-xl blur-2xl"></div>
              <div className="relative bg-[#001f3f] border border-cyan-900/30 rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-black to-[#001f3f] flex items-center justify-center">
                  <svg className="w-48 h-48 text-cyan-500/20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                At KodeVortex, we are dedicated to transforming aspiring tech professionals into industry-ready innovators. 
                Our comprehensive training programs are meticulously designed to bridge the gap between academic knowledge and real-world technological challenges.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through intensive coding bootcamps, mentorship programs, and hands-on project experiences, we empower individuals 
                to develop cutting-edge skills in software development, competitive programming, and emerging technologies.
              </p>
            </div>
          </motion.div>
        )}

        {/* Vision Section (currently hidden) */}
        {activeSection === 'vision' && (
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                We envision a future where technology education transcends traditional boundaries, 
                creating a global ecosystem of continuous learning, innovation, and collaborative problem-solving.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                By leveraging cutting-edge curriculum, industry partnerships, and personalized mentorship, 
                we aim to cultivate a generation of tech leaders who can drive meaningful technological advancements.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute -inset-4 bg-cyan-600/20 rounded-xl blur-2xl"></div>
              <div className="relative bg-[#001f3f] border border-cyan-900/30 rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-black to-[#001f3f] flex items-center justify-center">
                  <svg className="w-48 h-48 text-cyan-500/20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Team Section (currently hidden) */}
        {activeSection === 'team' && (
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { 
                name: "Sophia Chen", 
                role: "Chief Technology Officer", 
                description: "Former Google engineer with 12+ years of experience in machine learning and AI innovation."
              },
              { 
                name: "Raj Patel", 
                role: "Head of Curriculum", 
                description: "PhD in Computer Science with expertise in algorithmic design and competitive programming strategies."
              },
              { 
                name: "Elena Rodriguez", 
                role: "Industry Partnerships Director", 
                description: "Tech startup founder with a passion for bridging academic talent with industry needs."
              }
            ].map((member) => (
              <div 
                key={member.name}
                className="bg-[#001f3f] border border-cyan-900/30 rounded-xl p-6 text-center hover:scale-105 transition-transform"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full flex items-center justify-center">
                  <svg className="w-20 h-20 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mt-16"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
            Accelerate Your Tech Journey
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Unlock your potential, master cutting-edge technologies, and transform your career 
            with our immersive learning experiences and industry-driven programs.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-violet-600 text-white rounded-full hover:scale-105 transition-transform">
              Explore Programs
            </button>
            <button className="px-8 py-3 border border-cyan-600 text-cyan-300 rounded-full hover:bg-cyan-900/30 transition-colors">
              Contact Advisor
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Placeholder */}
      <div className="h-16 bg-gradient-to-r from-black to-[#001f3f] mt-16"></div>
    </div>
  );
};

export default AboutUsPage;
