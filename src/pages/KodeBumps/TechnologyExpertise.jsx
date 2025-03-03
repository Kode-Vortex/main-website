import React from "react";
import { motion } from "framer-motion";

const TechnologyExpertise = () => {
  // Technology categories and their related technologies
  const technologies = [
    {
      category: "Web Development",
      description: "Modern frameworks, responsive design, and full-stack development.",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Angular", level: 80 },
        { name: "Vue.js", level: 75 },
        { name: "Next.js", level: 85 }
      ],
      icon: (
        <svg className="w-10 h-10 text-[#F28474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
      )
    },
    {
      category: "AI & Machine Learning",
      description: "Practical applications of AI with hands-on experience in ML algorithms.",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Natural Language Processing", level: 75 },
        { name: "Computer Vision", level: 70 },
        { name: "Data Analysis", level: 90 }
      ],
      icon: (
        <svg className="w-10 h-10 text-[#20B2AA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      category: "Mobile Development",
      description: "Cross-platform app development for iOS and Android.",
      skills: [
        { name: "React Native", level: 90 },
        { name: "Flutter", level: 85 },
        { name: "Swift", level: 75 },
        { name: "Kotlin", level: 70 },
        { name: "Xamarin", level: 65 }
      ],
      icon: (
        <svg className="w-10 h-10 text-[#F28474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      category: "Cloud Computing",
      description: "Leveraging cloud platforms for scalable applications and services.",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Azure", level: 80 },
        { name: "Google Cloud", level: 75 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 }
      ],
      icon: (
        <svg className="w-10 h-10 text-[#20B2AA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      )
    },
    {
      category: "DevOps & Automation",
      description: "Streamlining development processes with CI/CD pipelines and automation.",
      skills: [
        { name: "Jenkins", level: 85 },
        { name: "GitHub Actions", level: 90 },
        { name: "Terraform", level: 80 },
        { name: "Ansible", level: 75 },
        { name: "Monitoring Tools", level: 85 }
      ],
      icon: (
        <svg className="w-10 h-10 text-[#F28474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      )
    },
    {
      category: "Data Science",
      description: "Extracting insights and value from structured and unstructured data.",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 80 },
        { name: "SQL", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Big Data (Hadoop/Spark)", level: 75 }
      ],
      icon: (
        <svg className="w-10 h-10 text-[#20B2AA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      )
    }
  ];

  // Key industry partners - these could be dynamically loaded in a real app
  const partners = [
    "Microsoft", "Google", "Amazon", "IBM", "Oracle", 
    "Salesforce", "Adobe", "Cisco", "Dell", "Intel"
  ];

  return (
    <div className="bg-gradient-to-b from-[#0c0c0c] via-[#111111] to-[#1a1a1a] text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full border border-[#20B2AA]/30 -right-[100px] -top-[100px]"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
        
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full border border-[#F28474]/30 -left-[100px] bottom-[10%]"
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
      </div>

      {/* Floating particles for visual interest */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-b from-[#F28474] to-[#20B2AA] opacity-20"
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)"
          }}
          animate={{
            y: [0, Math.random() * 80 - 40],
            x: [0, Math.random() * 80 - 40],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, Math.random() * 0.5 + 1, 1]
          }}
          transition={{
            duration: Math.random() * 8 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A71] to-[#20B2AA]"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ 
              backgroundSize: '200% 100%',
            }}
          >
            Technology Expertise
          </motion.h2>
          <motion.div 
            className="h-1 w-24 mx-auto bg-gradient-to-r from-[#F28474] to-[#20B2AA] rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.8 }}
          />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our Centre of Excellence offers cutting-edge training programs designed to equip students with the skills most in-demand by industry. We focus on practical, hands-on learning in these key technology areas.
          </p>
        </motion.div>

        {/* Technology categories with skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-[#121212] to-[#0a0a0a] rounded-xl p-6 border border-gray-800/30 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3), 0 0 10px rgba(242, 132, 116, 0.1)" 
              }}
            >
              {/* Subtle background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#F28474]/5 to-[#20B2AA]/5 opacity-0 group-hover:opacity-100"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                }}
                transition={{ 
                  duration: 10, 
                  ease: "linear", 
                  repeat: Infinity 
                }}
                style={{ 
                  backgroundSize: '200% 200%',
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{tech.icon}</div>
                  <h3 className="text-xl font-bold text-white">{tech.category}</h3>
                </div>
                <p className="text-gray-400 mb-6">{tech.description}</p>
                
                {/* Skills with animated progress bars */}
                <div className="space-y-4">
                  {tech.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-[#F28474] to-[#20B2AA]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: 0.2 + (idx * 0.1),
                            ease: "easeOut"
                          }}
                          viewport={{ once: false, amount: 1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry partnership section with logos */}
        <motion.div
          className="bg-[#0a0a0a]/80 border border-gray-800/30 rounded-xl p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#F28474] to-[#20B2AA]">
            Our Industry Partners
          </h3>
          <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto">
            We collaborate with leading technology companies to ensure our curriculum stays relevant and our students gain real-world experience through internships and projects.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-[#121212] border border-gray-800/20 rounded-lg p-4 flex items-center justify-center h-16"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: false, amount: 0.5 }}
                whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)" }}
              >
                <span className="text-gray-300 font-semibold">{partner}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training methodology section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#F28474] to-[#20B2AA]">
            Our Training Methodology
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Learn by Doing",
                description: "Hands-on projects that simulate real-world challenges and applications.",
                icon: (
                  <svg className="w-12 h-12 text-[#F28474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                )
              },
              {
                title: "Industry Mentors",
                description: "Regular sessions with professionals working in leading tech companies.",
                icon: (
                  <svg className="w-12 h-12 text-[#20B2AA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                )
              },
              {
                title: "Project-Based",
                description: "Build a portfolio of projects that demonstrate your capabilities to employers.",
                icon: (
                  <svg className="w-12 h-12 text-[#F28474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                )
              },
              {
                title: "Career Support",
                description: "Interview preparation, resume building, and direct industry connections.",
                icon: (
                  <svg className="w-12 h-12 text-[#20B2AA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                )
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-[#121212] to-[#0a0a0a] rounded-xl p-6 text-center border border-gray-800/20 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2), 0 0 10px rgba(242, 132, 116, 0.05)" 
                }}
              >
                <div className="bg-[#1d1d1d] p-4 rounded-full mb-4 shadow-lg">
                  {method.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{method.title}</h4>
                <p className="text-gray-400">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
            Ready to Upgrade Your Skills?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our technology training programs and gain the expertise needed to thrive in today's competitive tech industry.
          </p>
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-gradient-to-r from-[#E05E50] to-[#F28474] px-8 py-4 rounded-full font-semibold text-white shadow-lg shadow-[#E05E50]/25 flex items-center gap-2 mx-auto">
              Explore Programs
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyExpertise;