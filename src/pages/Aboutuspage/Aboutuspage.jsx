/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
   
  Lightbulb, 
  Users, 
  Code, 
  Trophy,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Eye
} from 'lucide-react';

const AboutUsPage = () => {
  const [activeSection, setActiveSection] = useState('mission');

  const sections = {
    mission: {
      title: "Our Mission",
      icon: Target,
      description: [
        "At KodeVortex, we bridge the gap between academia and industry by providing high-tech, hands-on training in competitive programming, data structures, and algorithms.",
        "Our dynamic learning environment fosters growth, confidence, and career readiness.",
        "We are committed to transforming students into industry-ready professionals through innovative, practical learning approaches.",
        "By combining cutting-edge curriculum with real-world problem-solving techniques, we equip our students with the skills needed to excel in today's competitive tech landscape.",
        "Our mission extends beyond traditional education – we aim to create a community of lifelong learners who are passionate about technology and continuous improvement."
      ]
    },
    vision: {
      title: "Our Vision",
      icon: Eye,
      description: [
        "To become the global leader in tech education, pioneering a revolutionary approach to learning that seamlessly connects passionate learners with industry demands.",
        "We envision a future where every aspiring technologist has access to world-class, practical learning experiences that prepare them for the most challenging and innovative roles in the tech industry.",
        "Our vision is to create an ecosystem that nurtures talent, encourages innovation, and empowers individuals to become architects of technological transformation.",
        "We aim to break down traditional barriers in tech education, making advanced learning accessible, engaging, and directly aligned with the rapidly evolving global tech landscape."
      ]
    },
    team: {
      leadership: [
        { 
          name: "Shivam Paisal", 
          role: "CEO & Founder",
          image: "/api/placeholder/300/300",
          social: {
            linkedin: "https://www.linkedin.com/in/shivam-pasial",
            twitter: "https://twitter.com/shivampasial"
          }
        },
        { 
          name: "Suraj Nayak", 
          role: "Co-Founder & Project Manager",
          image: "/api/placeholder/300/300",
          social: {
            linkedin: "https://www.linkedin.com/in/suraj-nayak",
            twitter: "https://twitter.com/surajnayak"
          }
        }
      ],
      developers: [
        { 
          name: "Harsh Verma", 
          role: "FullStack Developer",
          image: "/api/placeholder/300/300"
        },
        { 
          name: "Rishabh Tripathi", 
          role: "FullStack & ML Developer ",
          image: "/api/placeholder/300/300"
        },
        { 
          name: "Sanskrati Agrawal", 
          role: "UI/UX Designer",
          image: "/api/placeholder/300/300"
        },
        { 
          name: "Sonal Mittal", 
          role: "FullStack Developer",
          image: "/api/placeholder/300/300"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#233554] text-white p-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#64FFDA]">
            KODE VORTEX
          </h1>
          <p className="text-xl text-[#8892B0] mt-4">
            Transforming Tech Education, Empowering Future Innovators
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-12 space-x-4">
          {['mission', 'vision', 'team'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-2 rounded-full ${
                activeSection === section 
                  ? 'bg-[#64FFDA]/20 text-[#64FFDA]' 
                  : 'bg-[#112240] text-[#8892B0]'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeSection === 'mission' && (
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#64FFDA]">
              Our Mission
            </h2>
            {sections.mission.description.map((para, index) => (
              <p key={index} className="text-[#8892B0] mb-4">
                {para}
              </p>
            ))}
          </div>
        )}

        {activeSection === 'vision' && (
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#64FFDA]">
              Our Vision
            </h2>
            {sections.vision.description.map((para, index) => (
              <p key={index} className="text-[#8892B0] mb-4">
                {para}
              </p>
            ))}
          </div>
        )}

        {activeSection === 'team' && (
          <div>
            {/* Leadership Section */}
            <h2 className="text-3xl font-bold mb-8 text-center text-[#64FFDA]">
              Leadership Team
            </h2>
            <div className="flex justify-center space-x-8 mb-12">
              {sections.team.leadership.map((leader, index) => (
                <div 
                  key={index} 
                  className="bg-[#112240] p-6 rounded-lg text-center w-64"
                >
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-[#CCD6F6]">
                    {leader.name}
                  </h3>
                  <p className="text-[#8892B0] mb-4">
                    {leader.role}
                  </p>
                  <div className="flex justify-center space-x-4">
                    {leader.social?.linkedin && (
                      <a 
                        href={leader.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#8892B0] hover:text-[#64FFDA]"
                      >
                        <Linkedin />
                      </a>
                    )}
                    {leader.social?.twitter && (
                      <a 
                        href={leader.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#8892B0] hover:text-[#64FFDA]"
                      >
                        <Twitter />
                      </a>
                    )}
                    {leader.social?.github && (
                      <a 
                        href={leader.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#8892B0] hover:text-[#64FFDA]"
                      >
                        <Github />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Developers Section */}
            <h2 className="text-3xl font-bold mb-8 text-center text-[#64FFDA]">
              Our Developers
            </h2>
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sections.team.developers.map((developer, index) => (
                <div 
                  key={index} 
                  className="bg-[#112240] p-6 rounded-lg text-center"
                >
                  <img 
                    src={developer.image} 
                    alt={developer.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-[#CCD6F6]">
                    {developer.name}
                  </h3>
                  <p className="text-[#8892B0]">
                    {developer.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUsPage;
