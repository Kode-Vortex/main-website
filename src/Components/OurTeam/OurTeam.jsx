import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import suraj_nayak from "./suraj_nayak.jpg";
import sonal_mittal from "./sonal_mittal.jpg";
import rishabh_triphati from "./rishabh_triphati.jpg";
import sanskriti from "./sanskriti.jpg";
import "./OurTeam.css";

const TeamShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const teams = [
    {
      name: "Suraj Nayak",
      image: suraj_nayak,
      role: "CO-founder & Project Manager",
      objectPosition: "center 30%", // Adjust to focus on face
    },
    {
      name: "Sonal Mittal",
      image: sonal_mittal,
      role: "FULLSTACK DEVELOPER",
      objectPosition: "center 25%", // Adjust to focus on face
    },
    {
      name: "Rishabh Tripathi",
      image: rishabh_triphati,
      role: "FULLSTACK & ML Developer",
      objectPosition: "center 20%", // Adjust to focus on face
    },
    {
      name: "Sanskrati Agrawal",
      image: sanskriti,
      role: "UI/UX Designer",
      objectPosition: "center 30%", // Adjust to focus on face
    },
  ];

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    dots: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, centerMode: false } },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "30px" },
      },
    ],
  };

  // useInView hook to trigger animation when section enters view
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  // Animation variants for section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(207, 146, 116, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="  py-12 md:pt-20">
      {/* Heading */}
    

      <div className="bg-gradient-to-b   overflow-hidden">
        {/* Heading with animated reveal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-lg uppercase tracking-widest mb-2 font-light">
            The DEVELOPERS
          </h2>
          <h1 className="text-[#CF9274] font-mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="relative inline-block">
              KODEVORTEX
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-2 left-0 h-1 bg-[#CF9274] opacity-70"
              ></motion.span>
            </span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Extraordinary talents coming together to create exceptional
            experiences
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="w-full max-w-6xl mx-auto px-4"
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Slider {...settings} className="team-slider">
            {teams.map((member, index) => (
              <div key={index} className="px-3 md:px-4 py-2">
                <motion.div
                  className={`relative group overflow-hidden ${
                    activeSlide === index ? "active-slide" : ""
                  }`}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl h-96 md:h-80 lg:h-96 relative face-container">
                    {/* Base gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 z-10 transition-all duration-300"></div>

                    {/* Additional overlay with blur effect on hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 backdrop-blur-0 group-hover:backdrop-blur-sm z-20 transition-all duration-300"></div>

                    {/* Image with zoom effect - adjusted for face focus */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700"
                      style={{
                        objectPosition: member.objectPosition,
                        transform:
                          activeSlide === index ? "scale(1.05)" : "scale(1)",
                      }}
                    />

                    {/* Social media icons - centered and only visible on hover */}
                    <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-center space-x-4">
                        {["twitter", "instagram", "linkedin"].map(
                          (platform, i) => (
                            <motion.span
                              key={platform}
                              className="w-10 h-10 rounded-full bg-[#CF9274] bg-opacity-30 flex items-center justify-center text-white hover:bg-opacity-100 transition-all cursor-pointer"
                              whileHover={{ scale: 1.2 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * i, duration: 0.3 }}
                            >
                              {platform === "twitter" && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0 1.29 5.59 4.16 4.16 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101a4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                                </svg>
                              )}
                              {platform === "instagram" && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633a6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419a4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078a1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" />
                                  <circle cx="11.994" cy="11.979" r="3.003" />
                                </svg>
                              )}
                              {platform === "linkedin" && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                              )}
                            </motion.span>
                          )
                        )}
                      </div>
                    </div>

                    {/* Name and role at the bottom - always visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                      <div className="bg-black bg-opacity-80 backdrop-blur-sm p-4 rounded-xl">
                        <div className="text-center">
                          <h3 className="text-[#CF9274] font-bold text-lg tracking-wide">
                            {member.name}
                          </h3>
                          <div className="h-px w-16 bg-[#CF9274] opacity-70 mx-auto mt-1"></div>
                          <p className="text-white text-sm mt-2">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>

          {/* Custom arrow navigation */}
          <div className="mt-12 text-center">
            <motion.button
              className="mx-4 px-8 py-3 rounded-full bg-slate-800 text-[#CF9274] hover:bg-[#CF9274] hover:text-white transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Meet The Full Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamShowcase;
