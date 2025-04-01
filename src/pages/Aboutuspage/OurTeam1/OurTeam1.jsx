// import React, { useState } from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import suraj_nayak from "./suraj_nayak.jpg";
// import sonal_mittal from "./sonal_mittal.jpg";
// import rishabh_triphati from "./rishabh_triphati.jpg";
// import sanskriti from "./sanskriti.jpg";
// import "./OurTeam1.css";

// const OurTeam1 = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const teams = [
//     {
//       name: "Suraj Nayak",
//       image: suraj_nayak,
//       role: "CO-founder & Project Manager",
//       objectPosition: "center 30%", // Adjust to focus on face
//     },
//     {
//       name: "Sonal Mittal",
//       image: sonal_mittal,
//       role: "FULLSTACK DEVELOPER",
//       objectPosition: "center 25%", // Adjust to focus on face
//     },
//     {
//       name: "Rishabh Tripathi",
//       image: rishabh_triphati,
//       role: "FULLSTACK & ML Developer",
//       objectPosition: "center 20%", // Adjust to focus on face
//     },
//     {
//       name: "Sanskrati Agrawal",
//       image: sanskriti,
//       role: "UI/UX Designer",
//       objectPosition: "center 30%", // Adjust to focus on face
//     },
//   ];

//   const settings = {
//     infinite: true,
//     speed: 800,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     pauseOnHover: true,
//     centerMode: true,
//     centerPadding: "0px",
//     arrows: true,
//     dots: true,
//     beforeChange: (current, next) => setActiveSlide(next),
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 2, centerMode: false } },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 1, centerMode: true, centerPadding: "30px" },
//       },
//     ],
//   };

//   // useInView hook to trigger animation when section enters view
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

//   // Animation variants for section
//   const sectionVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//         duration: 0.8,
//       },
//     },
//   };

//   // Animation variants for each card
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//     hover: {
//       y: -10,
//       boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3)",
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <div className=" pt-12 md:py-20">
//       <div className="pt-10">
//         {/* Heading with animated reveal */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-purple-200 text-6xl font-semibold uppercase tracking-widest mb-2 font-light">
//             The Team Behind KodeVortex
//           </h2>
//           <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 font-mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
//             <span className="relative inline-block">
//               KODEVORTEX
//               <motion.span
//                 initial={{ width: "0%" }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: 1, delay: 1 }}
//                 className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-70"
//               ></motion.span>
//             </span>
//           </h1>
//           {/* <p className="text-purple-100/70 text-xl mt-4 max-w-xl mx-auto">
//             Extraordinary talents coming together to create exceptional
//             experiences
//           </p> */}
//         </motion.div>

//         {/* Carousel */}
//         <motion.div
//           className="w-full max-w-6xl mx-auto px-4"
//           ref={ref}
//           variants={sectionVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           <Slider {...settings} className="team-slider">
//             {teams.map((member, index) => (
//               <div key={index} className="px-3 md:px-4 py-2">
//                 <motion.div
//                   className={`relative group overflow-hidden ${
//                     activeSlide === index ? "active-slide" : ""
//                   }`}
//                   variants={cardVariants}
//                   whileHover="hover"
//                 >
//                   <div className="rounded-2xl overflow-hidden shadow-xl h-96 md:h-80 lg:h-96 relative face-container">
//                     {/* Base gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#0D0217] via-transparent to-transparent opacity-70 z-10 transition-all duration-300"></div>

//                     {/* Additional overlay with blur effect on hover */}
//                     <div className="absolute inset-0 bg-indigo-900/30 opacity-0 group-hover:opacity-40 backdrop-blur-0 group-hover:backdrop-blur-sm z-20 transition-all duration-300"></div>

//                     {/* Image with zoom effect - adjusted for face focus */}
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover transition-transform duration-700"
//                       style={{
//                         objectPosition: member.objectPosition,
//                         transform:
//                           activeSlide === index ? "scale(1.05)" : "scale(1)",
//                       }}
//                     />

//                     {/* Social media icons - centered and only visible on hover */}
//                     <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <div className="flex justify-center space-x-4">
//                         {["twitter", "instagram", "linkedin"].map(
//                           (platform, i) => (
//                             <motion.span
//                               key={platform}
//                               className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 bg-opacity-80 flex items-center justify-center text-white hover:bg-opacity-100 transition-all cursor-pointer"
//                               whileHover={{ scale: 1.2 }}
//                               initial={{ opacity: 0, y: 20 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{ delay: 0.1 * i, duration: 0.3 }}
//                             >
//                               {platform === "twitter" && (
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   viewBox="0 0 24 24"
//                                   fill="currentColor"
//                                   className="w-5 h-5"
//                                 >
//                                   <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0 1.29 5.59 4.16 4.16 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
//                                 </svg>
//                               )}
//                               {platform === "instagram" && (
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   viewBox="0 0 24 24"
//                                   fill="currentColor"
//                                   className="w-5 h-5"
//                                 >
//                                   <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" />
//                                   <circle cx="11.994" cy="11.979" r="3.003" />
//                                 </svg>
//                               )}
//                               {platform === "linkedin" && (
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   viewBox="0 0 24 24"
//                                   fill="currentColor"
//                                   className="w-5 h-5"
//                                 >
//                                   <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                                 </svg>
//                               )}
//                             </motion.span>
//                           )
//                         )}
//                       </div>
//                     </div>

//                     {/* Name and role at the bottom - always visible */}
//                     <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
//                       <div className="bg-[#0D0217] bg-opacity-80 backdrop-blur-sm p-4 rounded-xl">
//                         <div className="text-center">
//                           <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 font-bold text-lg tracking-wide">
//                             {member.name}
//                           </h3>
//                           <div className="h-px w-16 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-70 mx-auto mt-1"></div>
//                           <p className="text-purple-100 text-sm mt-2">
//                             {member.role}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             ))}
//           </Slider>

//           {/* Custom arrow navigation */}
//           <div className="mt-12 text-center">
//             <motion.button
//               className="mx-4 px-8 py-3 rounded-full bg-[#0D0217] text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-colors shadow-lg border border-purple-500/30"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Meet The Full Team
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };


// export default OurTeam1;










// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import "./OurTeam1.css";

// // Import your team member images
// import suraj_nayak from "./suraj_nayak.jpg";
// import sonal_mittal from "./sonal_mittal.jpg";
// import rishabh_triphati from "./rishabh_triphati.jpg";
// import sanskriti from "./sanskriti.jpg";

// const OurTeam1 = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAutoplay, setIsAutoplay] = useState(true);
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

//   // Team members data
//   const teamMembers = [
//     {
//       name: "Suraj Nayak",
//       image: suraj_nayak,
//       role: "Co-founder & Project Manager",
//       bio: "Visionary leader with expertise in project management and team coordination.",
//       socials: {
//         twitter: "#",
//         linkedin: "#",
//         github: "#",
//       },
//     },
//     {
//       name: "Sonal Mittal",
//       image: sonal_mittal,
//       role: "Fullstack Developer",
//       bio: "Passionate developer with a keen eye for creating seamless user experiences.",
//       socials: {
//         twitter: "#",
//         linkedin: "#",
//         github: "#",
//       },
//     },
//     {
//       name: "Rishabh Tripathi",
//       image: rishabh_triphati,
//       role: "Fullstack & ML Developer",
//       bio: "Innovative problem-solver blending web development with machine learning expertise.",
//       socials: {
//         twitter: "#",
//         linkedin: "#",
//         github: "#",
//       },
//     },
//     {
//       name: "Sanskrati Agrawal",
//       image: sanskriti,
//       role: "UI/UX Designer",
//       bio: "Creative designer focused on crafting intuitive and beautiful interfaces.",
//       socials: {
//         twitter: "#",
//         linkedin: "#",
//         github: "#",
//       },
//     },
//   ];

//   // Auto-rotate through team members
//   useEffect(() => {
//     let interval;
//     if (isAutoplay) {
//       interval = setInterval(() => {
//         setActiveIndex((prev) => (prev + 1) % teamMembers.length);
//       }, 5000);
//     }
//     return () => clearInterval(interval);
//   }, [isAutoplay, teamMembers.length]);

//   // Section animation variants
//   const sectionVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   // Text animation variants
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   // Card animation variants
//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5 },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.9,
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-purple-950">
//       {/* Animated background */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
//         <div className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-purple-700 opacity-10 blur-3xl"></div>
//         <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-blue-700 opacity-10 blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           variants={sectionVariants}
//           className="max-w-7xl mx-auto"
//         >
//           {/* Section heading */}
//           <motion.div className="text-center mb-20" variants={textVariants}>
//             <motion.p 
//               className="text-purple-400 font-medium tracking-wider mb-3"
//               variants={textVariants}
//             >
//               THE BRILLIANT MINDS
//             </motion.p>
//             <motion.h2 
//               className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300"
//               variants={textVariants}
//             >
//               <span className="relative">
//                 The Team Behind KodeVortex
//                 <motion.span
//                   initial={{ width: "0%" }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                   className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"
//                 ></motion.span>
//               </span>
//             </motion.h2>
//           </motion.div>

//           {/* Team showcase */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             {/* Featured member card */}
//             <motion.div 
//               className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-purple-900/20"
//               variants={textVariants}
//               onHoverStart={() => setIsAutoplay(false)}
//               onHoverEnd={() => setIsAutoplay(true)}
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   variants={cardVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="absolute inset-0"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/70 to-transparent"></div>
//                   <img
//                     src={teamMembers[activeIndex].image}
//                     alt={teamMembers[activeIndex].name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 p-8">
//                     <div className="max-w-md">
//                       <h3 className="text-3xl font-bold mb-2 text-white">
//                         {teamMembers[activeIndex].name}
//                       </h3>
//                       <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 mb-4"></div>
//                       <p className="text-indigo-300 text-lg font-medium mb-3">
//                         {teamMembers[activeIndex].role}
//                       </p>
//                       <p className="text-gray-300 mb-6">
//                         {teamMembers[activeIndex].bio}
//                       </p>
//                       <div className="flex space-x-4">
//                         {Object.keys(teamMembers[activeIndex].socials).map((platform) => (
//                           <a
//                             key={platform}
//                             href={teamMembers[activeIndex].socials[platform]}
//                             className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300"
//                           >
//                             <SocialIcon platform={platform} />
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </motion.div>

//             {/* Team member thumbnails */}
//             <motion.div 
//               className="grid grid-cols-2 gap-4"
//               variants={textVariants}
//             >
//               {teamMembers.map((member, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`overflow-hidden rounded-xl cursor-pointer shadow-lg transition-all duration-300 ${
//                     activeIndex === index
//                       ? "ring-2 ring-offset-4 ring-offset-purple-900 ring-purple-400"
//                       : "opacity-80 hover:opacity-100"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(index);
//                     setIsAutoplay(false);
//                   }}
//                 >
//                   <div className="relative aspect-[3/4] overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 p-4">
//                       <h4 className="text-white font-bold text-lg">{member.name}</h4>
//                       <p className="text-purple-300 text-sm">{member.role}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* CTA Button */}
//           <motion.div
//             className="mt-16 text-center"
//             variants={textVariants}
//           >
//             <motion.button
//               whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)" }}
//               whileTap={{ scale: 0.98 }}
//               className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-900/30"
//             >
//               Meet The Full Team
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Social media icons component
// const SocialIcon = ({ platform }) => {
//   switch (platform) {
//     case "twitter":
//       return (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//           <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0 1.29 5.59 4.16 4.16 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
//         </svg>
//       );
//     case "linkedin":
//       return (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//           <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//         </svg>
//       );
//     case "github":
//       return (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//         </svg>
//       );
//     default:
//       return null;
//   }
// };

// export default OurTeam1;


























// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import "./OurTeam1.css";

// // Import your team member images
// import suraj_nayak from "./suraj_nayak.jpg";
// import sonal_mittal from "./sonal_mittal.jpg";
// import rishabh_triphati from "./rishabh_triphati.jpg";
// import sanskriti from "./sanskriti.jpg";

// const OurTeam1 = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAutoplay, setIsAutoplay] = useState(true);
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

//   // Team members data
//   const teamMembers = [
//     {
//       name: "Suraj Nayak",
//       image: suraj_nayak,
//       role: "Co-founder & Project Manager",
//       bio: "Visionary leader with expertise in project management and team coordination.",
//       socials: {
//         twitter: "#",
//         linkedin: "#",
//         github: "#",
//       },
//     },
//     {
//       name: "Sonal Mittal",
//       image: sonal_mittal,
//       role: "Fullstack Developer",
//       bio: "Passionate developer with a keen eye for creating seamless user experiences.",
//       socials: {
//         twitter: "#",
//         linkedin: "#",
//         github: "#",
//       },
//     },
//     {
//       name: "Rishabh Tripathi",
//       image: rishabh_triphati,
//       role: "Fullstack & ML Developer",
//       bio: "Innovative problem-solver blending web development with machine learning expertise.",
//       socials: {
//         twitter: "#",
//         linkedin: "#",
//         github: "#",
//       },
//     },
//     {
//       name: "Sanskrati Agrawal",
//       image: sanskriti,
//       role: "UI/UX Designer",
//       bio: "Creative designer focused on crafting intuitive and beautiful interfaces.",
//       socials: {
//         twitter: "#",
//         linkedin: "#",
//         github: "#",
//       },
//     },
//   ];

//   // Auto-rotate through team members
//   useEffect(() => {
//     let interval;
//     if (isAutoplay) {
//       interval = setInterval(() => {
//         setActiveIndex((prev) => (prev + 1) % teamMembers.length);
//       }, 5000);
//     }
//     return () => clearInterval(interval);
//   }, [isAutoplay, teamMembers.length]);

//   // Section animation variants
//   const sectionVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   // Text animation variants
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   // Card animation variants
//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5 },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.9,
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-900">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        
//         {/* Animated background circles */}
//         <motion.div 
//           initial={{ x: "-10%", y: "10%" }}
//           animate={{ 
//             x: "5%", 
//             y: "-5%",
//             transition: { 
//               repeat: Infinity, 
//               repeatType: "reverse", 
//               duration: 20,
//               ease: "easeInOut"
//             }
//           }}
//           className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-3xl"
//         ></motion.div>
        
//         <motion.div 
//           initial={{ x: "10%", y: "-5%" }}
//           animate={{ 
//             x: "-15%", 
//             y: "10%",
//             transition: { 
//               repeat: Infinity, 
//               repeatType: "reverse", 
//               duration: 15,
//               ease: "easeInOut"
//             }
//           }}
//           className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-blue-600 opacity-20 blur-3xl"
//         ></motion.div>
        
//         <motion.div 
//           initial={{ x: "0%", y: "0%" }}
//           animate={{ 
//             x: "10%", 
//             y: "5%",
//             transition: { 
//               repeat: Infinity, 
//               repeatType: "reverse", 
//               duration: 18,
//               ease: "easeInOut"
//             }
//           }}
//           className="absolute top-2/3 left-1/4 w-72 h-72 rounded-full bg-pink-600 opacity-10 blur-3xl"
//         ></motion.div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute top-10 left-10 w-32 h-32 border border-purple-500/20 rounded-full"></div>
//       <div className="absolute bottom-10 right-10 w-24 h-24 border border-indigo-500/20 rounded-full"></div>
//       <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-purple-500/30 rounded-full"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           variants={sectionVariants}
//           className="max-w-7xl mx-auto"
//         >
//           {/* Section heading with enhanced styling */}
//           <motion.div className="text-center mb-20" variants={textVariants}>
//             <motion.div 
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="inline-block mb-3 px-6 py-2 rounded-full bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-purple-500/20"
//             >
//               <motion.p className="text-purple-300 font-medium tracking-widest text-sm">
//                 THE BRILLIANT MINDS
//               </motion.p>
//             </motion.div>
            
//             <motion.h2 
//               className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300"
//               variants={textVariants}
//             >
//               <span className="relative inline-block">
//                 The Team Behind
//                 <motion.div
//                   initial={{ width: "0%" }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                   className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"
//                 ></motion.div>
//               </span>
//               <br />
//               <span className="text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">KodeVortex</span>
//             </motion.h2>
//           </motion.div>

//           {/* Team showcase with enhanced visuals */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//             {/* Featured member card with improved styling */}
//             <motion.div 
//               className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-purple-900/30"
//               variants={textVariants}
//               onHoverStart={() => setIsAutoplay(false)}
//               onHoverEnd={() => setIsAutoplay(true)}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm z-10 mix-blend-overlay"></div>
              
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   variants={cardVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="absolute inset-0"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/70 to-transparent z-20"></div>
                  
//                   {/* Glowing border effect */}
//                   <div className="absolute inset-0 rounded-2xl border border-purple-500/20 z-30"></div>
//                   <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-sm z-10"></div>
                  
//                   <img
//                     src={teamMembers[activeIndex].image}
//                     alt={teamMembers[activeIndex].name}
//                     className="w-full h-full object-cover scale-110 transition-transform duration-7000 hover:scale-100"
//                   />
                  
//                   <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
//                     <div className="max-w-md">
//                       <motion.h3 
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.4 }}
//                         className="text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg"
//                       >
//                         {teamMembers[activeIndex].name}
//                       </motion.h3>
                      
//                       <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mb-4"></div>
                      
//                       <motion.p 
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.4, delay: 0.1 }}
//                         className="text-indigo-200 text-lg font-medium mb-3"
//                       >
//                         {teamMembers[activeIndex].role}
//                       </motion.p>
                      
//                       <motion.p 
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.4, delay: 0.2 }}
//                         className="text-gray-300 mb-6 backdrop-blur-sm bg-purple-900/10 p-3 rounded-lg"
//                       >
//                         {teamMembers[activeIndex].bio}
//                       </motion.p>
                      
//                       <motion.div 
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.4, delay: 0.3 }}
//                         className="flex space-x-4"
//                       >
//                         {Object.keys(teamMembers[activeIndex].socials).map((platform) => (
//                           <motion.a
//                             key={platform}
//                             whileHover={{ 
//                               scale: 1.2, 
//                               boxShadow: "0 0 15px rgba(168, 85, 247, 0.7)" 
//                             }}
//                             whileTap={{ scale: 0.95 }}
//                             href={teamMembers[activeIndex].socials[platform]}
//                             className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 border border-purple-500/30"
//                           >
//                             <SocialIcon platform={platform} />
//                           </motion.a>
//                         ))}
//                       </motion.div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
              
//               {/* Navigation buttons */}
//               <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-30">
//                 <motion.button
//                   whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.3)" }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => {
//                     setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
//                     setIsAutoplay(false);
//                   }}
//                   className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-purple-500/30"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </motion.button>
                
//                 <motion.button
//                   whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.3)" }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => {
//                     setActiveIndex((prev) => (prev + 1) % teamMembers.length);
//                     setIsAutoplay(false);
//                   }}
//                   className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-purple-500/30"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </motion.button>
//               </div>
              
//               {/* Progress indicator */}
//               <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-2 z-30">
//                 <div className="flex space-x-2">
//                   {teamMembers.map((_, index) => (
//                     <motion.button
//                       key={index}
//                       onClick={() => {
//                         setActiveIndex(index);
//                         setIsAutoplay(false);
//                       }}
//                       className={`w-2 h-2 rounded-full ${
//                         activeIndex === index
//                           ? "bg-purple-500 w-6"
//                           : "bg-white/40"
//                       } transition-all duration-300`}
//                     ></motion.button>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Team member thumbnails with enhanced styling */}
//             <motion.div 
//               className="grid grid-cols-2 gap-6"
//               variants={textVariants}
//             >
//               {teamMembers.map((member, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`overflow-hidden rounded-xl cursor-pointer transition-all duration-300 group ${
//                     activeIndex === index
//                       ? "ring-2 ring-offset-4 ring-offset-purple-900 ring-purple-400 shadow-lg shadow-purple-500/30"
//                       : "opacity-80 hover:opacity-100"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(index);
//                     setIsAutoplay(false);
//                   }}
//                 >
//                   <div className="relative aspect-[3/4] overflow-hidden">
//                     {/* Glowing effect for active item */}
//                     {activeIndex === index && (
//                       <motion.div 
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur-sm z-0"
//                       ></motion.div>
//                     )}
                    
//                     <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent z-10"></div>
                    
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110"
//                     />
                    
//                     <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
//                       <div className={`w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 mb-2 transition-all duration-300 ${activeIndex === index ? "w-full" : "group-hover:w-1/2"}`}></div>
//                       <h4 className="text-white font-bold text-lg">{member.name}</h4>
//                       <p className="text-purple-300 text-sm">{member.role}</p>
//                     </div>
                    
//                     {/* Hover overlay with additional info */}
//                     <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 to-purple-900/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//                       <div className="text-center p-4">
//                         <h4 className="text-white font-bold text-lg mb-1">{member.name}</h4>
//                         <p className="text-purple-300 text-sm mb-3">{member.role}</p>
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="px-4 py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur-sm border border-purple-500/30"
//                         >
//                           View Profile
//                         </motion.button>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Enhanced CTA Button */}
//           <motion.div
//             className="mt-16 text-center"
//             variants={textVariants}
//           >
//             <motion.button
//               whileHover={{ 
//                 scale: 1.05, 
//                 boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)",
//               }}
//               whileTap={{ scale: 0.98 }}
//               className="relative px-10 py-4 rounded-full overflow-hidden group"
//             >
//               {/* Button background with glow effect */}
//               <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></span>
//               <span className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500"></span>
              
//               {/* Button content */}
//               <span className="relative flex items-center justify-center space-x-2 text-white font-medium">
//                 <span>Meet The Full Team</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </span>
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Social media icons component
// const SocialIcon = ({ platform }) => {
//   switch (platform) {
//     case "twitter":
//       return (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//           <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0 1.29 5.59 4.16 4.16 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
//         </svg>
//       );
//     case "linkedin":
//       return (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//           <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//         </svg>
//       );
//     case "github":
//       return (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//         </svg>
//       );
//     default:
//       return null;
//   }
// };

// export default OurTeam1;

















import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./OurTeam1.css";

// Import your team member images
import suraj_nayak from "./suraj_nayak.jpg";
import sonal_mittal from "./sonal_mittal.jpg";
import rishabh_triphati from "./rishabh_triphati.jpg";
import sanskriti from "./sanskriti.jpg";

const OurTeam1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  // Team members data
  const teamMembers = [
    {
      name: "Suraj Nayak",
      image: suraj_nayak,
      role: "Co-founder & Project Manager",
      bio: "Visionary leader with expertise in project management and team coordination.",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Sonal Mittal",
      image: sonal_mittal,
      role: "Fullstack Developer",
      bio: "Passionate developer with a keen eye for creating seamless user experiences.",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Rishabh Tripathi",
      image: rishabh_triphati,
      role: "Fullstack & ML Developer",
      bio: "Innovative problem-solver blending web development with machine learning expertise.",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Sanskrati Agrawal",
      image: sanskriti,
      role: "UI/UX Designer",
      bio: "Creative designer focused on crafting intuitive and beautiful interfaces.",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ];

  // Auto-rotate through team members
  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % teamMembers.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, teamMembers.length]);

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        
        {/* Animated background circles */}
        <motion.div 
          initial={{ x: "-10%", y: "10%" }}
          animate={{ 
            x: "5%", 
            y: "-5%",
            transition: { 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 20,
              ease: "easeInOut"
            }
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-emerald-600 opacity-20 blur-3xl"
        ></motion.div>
        
        <motion.div 
          initial={{ x: "10%", y: "-5%" }}
          animate={{ 
            x: "-15%", 
            y: "10%",
            transition: { 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 15,
              ease: "easeInOut"
            }
          }}
          className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-teal-600 opacity-20 blur-3xl"
        ></motion.div>
        
        <motion.div 
          initial={{ x: "0%", y: "0%" }}
          animate={{ 
            x: "10%", 
            y: "5%",
            transition: { 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 18,
              ease: "easeInOut"
            }
          }}
          className="absolute top-2/3 left-1/4 w-72 h-72 rounded-full bg-cyan-600 opacity-10 blur-3xl"
        ></motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-emerald-500/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-teal-500/20 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-cyan-500/30 rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section heading with enhanced styling */}
          <motion.div className="text-center mb-20" variants={textVariants}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-3 px-6 py-2 rounded-full bg-gradient-to-r from-emerald-900/40 to-teal-900/40 backdrop-blur-sm border border-emerald-500/20"
            >
              <motion.p className="text-emerald-300 font-medium tracking-widest text-sm">
                THE BRILLIANT MINDS
              </motion.p>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300"
              variants={textVariants}
            >
              <span className="relative inline-block">
                The Team Behind
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"
                ></motion.div>
              </span>
              <br />
              <span className="text-white drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">KodeVortex</span>
            </motion.h2>
          </motion.div>

          {/* Team showcase with enhanced visuals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Featured member card with improved styling */}
            <motion.div 
              className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-emerald-900/30"
              variants={textVariants}
              onHoverStart={() => setIsAutoplay(false)}
              onHoverEnd={() => setIsAutoplay(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 to-emerald-900/40 backdrop-blur-sm z-10 mix-blend-overlay"></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/70 to-transparent z-20"></div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl border border-emerald-500/20 z-30"></div>
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-sm z-10"></div>
                  
                  <img
                    src={teamMembers[activeIndex].image}
                    alt={teamMembers[activeIndex].name}
                    className="w-full h-full object-cover scale-110 transition-transform duration-7000 hover:scale-100"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                    <div className="max-w-md">
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg"
                      >
                        {teamMembers[activeIndex].name}
                      </motion.h3>
                      
                      <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 mb-4"></div>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-teal-200 text-lg font-medium mb-3"
                      >
                        {teamMembers[activeIndex].role}
                      </motion.p>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-gray-300 mb-6 backdrop-blur-sm bg-emerald-900/10 p-3 rounded-lg"
                      >
                        {teamMembers[activeIndex].bio}
                      </motion.p>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="flex space-x-4"
                      >
                        {Object.keys(teamMembers[activeIndex].socials).map((platform) => (
                          <motion.a
                            key={platform}
                            whileHover={{ 
                              scale: 1.2, 
                              boxShadow: "0 0 15px rgba(16, 185, 129, 0.7)" 
                            }}
                            whileTap={{ scale: 0.95 }}
                            href={teamMembers[activeIndex].socials[platform]}
                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 border border-emerald-500/30"
                          >
                            <SocialIcon platform={platform} />
                          </motion.a>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-30">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
                    setIsAutoplay(false);
                  }}
                  className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-emerald-500/30"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
                    setIsAutoplay(false);
                  }}
                  className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-emerald-500/30"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
              
              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-2 z-30">
              <div className="flex space-x-2">
                  {teamMembers.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setActiveIndex(index);
                        setIsAutoplay(false);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex 
                          ? "bg-gradient-to-r from-emerald-400 to-teal-400 scale-125" 
                          : "bg-white/30"
                      }`}
                    ></motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Team stats and other members */}
            <motion.div 
              className="space-y-10"
              variants={textVariants}
            >
              {/* Team stats */}
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={textVariants}
              >
                <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-800/20 to-cyan-800/20 backdrop-blur-lg border border-emerald-500/20">
                  <h3 className="text-4xl font-bold text-white mb-1">10+</h3>
                  <p className="text-emerald-300">Years Experience</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-800/20 to-cyan-800/20 backdrop-blur-lg border border-emerald-500/20">
                  <h3 className="text-4xl font-bold text-white mb-1">50+</h3>
                  <p className="text-emerald-300">Projects Completed</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-800/20 to-cyan-800/20 backdrop-blur-lg border border-emerald-500/20">
                  <h3 className="text-4xl font-bold text-white mb-1">99%</h3>
                  <p className="text-emerald-300">Client Satisfaction</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-800/20 to-cyan-800/20 backdrop-blur-lg border border-emerald-500/20">
                  <h3 className="text-4xl font-bold text-white mb-1">24/7</h3>
                  <p className="text-emerald-300">Support Available</p>
                </div>
              </motion.div>
              
              {/* Other team members thumbnails */}
              <motion.div variants={textVariants}>
                <h3 className="text-xl font-semibold text-emerald-300 mb-4">Meet the Team</h3>
                <div className="flex flex-wrap gap-4">
                  {teamMembers.map((member, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setActiveIndex(index);
                        setIsAutoplay(false);
                      }}
                      className={`relative w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                        index === activeIndex 
                          ? "border-emerald-400 scale-110 shadow-lg shadow-emerald-500/30" 
                          : "border-white/20 opacity-70"
                      }`}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                      {index === activeIndex && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-t from-emerald-500/70 to-transparent"
                        ></motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
              
              {/* Team description */}
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-emerald-800/20 to-cyan-800/20 backdrop-blur-lg border border-emerald-500/20"
                variants={textVariants}
              >
                <h3 className="text-xl font-semibold text-white mb-2">Why Choose Our Team?</h3>
                <p className="text-gray-300 mb-4">
                  Our team brings together expertise from diverse fields to deliver exceptional results. 
                  With a passion for innovation and attention to detail, we transform ideas into 
                  impactful solutions that drive success.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium flex items-center gap-2 group"
                >
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Component for social icons
const SocialIcon = ({ platform }) => {
  switch (platform) {
    case "twitter":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
      );
    case "linkedin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
      );
    case "github":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      );
    default:
      return null;
  }
};

// CSS for background grid pattern (to be included in OurTeam1.css)
// .bg-grid-pattern {
//   background-image: linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
//                     linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px);
//   background-size: 30px 30px;
// }

export default OurTeam1;