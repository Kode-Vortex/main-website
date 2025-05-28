// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import logo from "./21.png";
// import fo1 from "../../../public/cropped-image_1.svg";
// import fo2 from "../../../public/cropped-image_2.svg";
// import fo3 from "../../../public/cropped-image_3.svg";
// import fo4 from "../../../public/cropped-image_4.svg";
// import ssl from "../../../public/SSL.jpg"
// import gmail from "./gmail.png"
// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [year, setYear] = useState(new Date().getFullYear());

//   useEffect(() => {
//     // Update copyright year automatically
//     setYear(new Date().getFullYear());

//     // Add scroll to reveal animation for footer
//     const footer = document.querySelector("footer");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("opacity-100");
//             entry.target.classList.remove("opacity-0", "translate-y-10");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (footer) {
//       observer.observe(footer);
//     }

//     return () => {
//       if (footer) {
//         observer.unobserve(footer);
//       }
//     };
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email) return;

//     setIsSubmitting(true);

//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitted(true);
//       setEmail("");

//       // Reset submitted state after 3 seconds
//       setTimeout(() => {
//         setSubmitted(false);
//       }, 3000);
//     }, 1000);
//   };

//   const socialLinks = [
//     {
//       url: "https://twitter.com/kodeVortex",
//       name: "Twitter",
//       icon: fo3,
//     },
//     {
//       url: "https://www.instagram.com/kodevortex",
//       name: "Instagram",
//       icon: fo2,
//     },
//     {
//       url: "https://youtube.com/@kodevortex?si=PKz-yTp_5tH5QLFW",
//       name: "YouTube",
//       icon: fo1,
//     },
//     {
//       url: "https://www.linkedin.com/company/kodevortex",
//       name: "LinkedIn",
//       icon: fo4,
//     },
//   ];

//   const navLinks = [
//     { to: "/", label: "Home" },
//     { to: "/training", label: "Trainings" },
//     { to: "/internship", label: "Internship" },
//     { to: "/about-us", label: "About Us" },
//     { to: "/contact-us", label: "Contact Us" },
//   ];

//   const contactLinks = [
//     { href: "mailto:info@kodevortex.com", label: "Email", icon: gmail },
//     {
//       href: "https://www.linkedin.com/company/kodevortex",
//       label: "LinkedIn",
//       icon: fo4,
//     },
//     {
//       href: "https://www.instagram.com/kodevortex",
//       label: "Instagram",
//       icon: fo2,
//     },
//     {
//       href: "https://twitter.com/kodeVortex",
//       label: "Twitter (X)",
//       icon: fo3,
//     },
//   ];

//   return (
//     <footer className="bg-gradient-to-b bg-slate-950 text-white pt-10 px-4 transition-all duration-700 ease-in-out opacity-0 translate-y-10">
//       <div className="container mx-auto">
//         {/* "VISIT US" Section with animated underline */}
//         <div className="text-center mb-12 relative">
//           <h2 className="font-bold text-4xl tracking-wider">
//             VISIT <span className="text-[#056777]">US</span>
//           </h2>
//           <div className="h-1 w-36 bg-[#056777] mx-auto mt-2  animate-pulse"></div>
//         </div>

//         {/* Social Media Icons Section with hover effects */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-16 justify-center">
//           {socialLinks.map((social, index) => (
//             <div
//               className="text-center transform transition-transform duration-300 hover:scale-110"
//               key={index}
//             >
//               <a
//                 href={social.url}
//                 target="_blank"
//                 className={`inline-block p-4 rounded-full transition-all duration-300 `}
//               >
//                 <img
//                   src={social.icon}
//                   alt={social.name}
//                   className="w-16 h-16 sm:w-20 sm:h-20 mx-auto filter hover:brightness-110"
//                 />
//               </a>

//               <p className="mt-2 font-medium">@kodeVortex</p>
//             </div>
//           ))}
//         </div>

//         {/* Divider */}
//         <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-12"></div>

//         {/* Main Footer Content */}
//         <div className="flex flex-wrap lg:px-24  justify-center sm:justify-between gap-12  text-center sm:text-left">
//           {/* Logo Section with animation */}
//           <div className="w-full sm:w-auto flex flex-col items-center justify-center mb-9">
//             <img
//               src={logo}
//               alt="KodeVortex"
//               className="sm:w-48 w-[80%] h-auto transition-all duration-300 hover:opacity-90"
//             />
//             <p className="text-gray-400 mt-4 max-w-xs text-center text-sm">
//               Empowering innovation through code. Dive into the vortex of
//               knowledge.
//             </p>
//           </div>

//           {/* KVTech Section with hover effects */}
//           <div className="flex flex-col space-y-3 text-center sm:text-left">
//             <h3 className="font-bold text-2xl mb-2 text-[#056777]">
//               KodeVortex
//             </h3>
//             {navLinks.map((link, index) => (
//               <Link
//                 key={index}
//                 to={link.to}
//                 onClick={() => window.scrollTo(0, 0)}
//                 className="transition-all duration-200 hover:text-[#056777] hover:translate-x-1 flex items-center"
//               >
//                 <span className="mr-2 opacity-0 transition-all duration-200 group-hover:opacity-100">
//                   ›
//                 </span>
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* Contact Section with icons */}
//           <div className="flex flex-col space-y-5 text-center sm:text-left">
//             <h3 className="font-bold text-2xl mb-2 text-[#056777]">Contact</h3>
//             {contactLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.href}
//                 className="transition-all duration-200 hover:text-[#056777] flex items-center justify-center sm:justify-start"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img className="mr-2 w-6 h-6" src={link.icon} alt="" />

//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* Join Us Section with improved form */}
//           <div className="flex flex-col items-center mx-auto space-y-4 text-center sm:text-left w-full sm:w-auto max-w-xs">
//             <h3 className="font-bold text-2xl mb-2 text-[#056777]">
//               Join Our Newsletter
//             </h3>
//             <p className="text-sm text-gray-300 mb-2">
//               Stay updated with our latest news and offers
//             </p>
//             <form onSubmit={handleSubmit} className="relative">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email Address"
//                 className="py-3 px-4 pr-32 text-white bg-gray-800 border border-gray-700 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-[#056777] transition-all"
//                 required
//               />
//               <button
//                 type="submit"
//                 disabled={isSubmitting || submitted}
//                 className={`absolute right-0 top-0 py-3 px-6 rounded-r-full font-bold transition-all duration-300 h-full
//                   ${
//                     submitted
//                       ? "bg-green-600 text-white"
//                       : isSubmitting
//                       ? "bg-gray-600 text-gray-300"
//                       : "bg-[#056777] text-white hover:bg-[#045666]"
//                   }`}
//               >
//                 {submitted ? "SENT ✓" : isSubmitting ? "SENDING..." : "SUBMIT"}
//               </button>
//             </form>
//             {/* GDPR compliance note */}
//             <p className="text-xs text-gray-400 mt-2">
//               By subscribing, you agree to our privacy policy and consent to
//               receive updates.
//             </p>
//           </div>
//         </div>

//         {/* Footer Bottom Section with SSL badge */}
//         <div className="mt-16 border-t border-gray-800 pt-6 pb-8">
//           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
//             <span className="text-gray-400">
//               © 2024 KodeVortex. All rights reserved.
//             </span>
//             <div className="flex items-center space-x-2 bg-black px-3 py-1 rounded-full">
//               <img
//                 src={ssl}
//                 alt="Secured with SSL"
//                 className="w-5 h-5"
//               />
//               <span className="text-sm">Secured with SSL</span>
//             </div>
//             <Link
//               to="/privacy-policy"
//               className="text-gray-400 hover:text-[#056777] text-sm"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               to="/terms"
//               className="text-gray-400 hover:text-[#056777] text-sm"
//             >
//               Terms of Service
//             </Link>

//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import logo from "./21.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Top Section with Logo and Description */}

        {/* Links Section */}
        <div className="flex justify-evenly flex-wrap gap-8">
          <div className="mb-8 w-[30%]">
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <img src={logo} className="w-24 h-26" alt="" />
              </div>
            </div>
            <p className="text-gray-400 mb-6">
            Your Gateway to 
Innovation and 
Success Revolutionizing 
Learning and Software 
Solutions
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4">
              
             
              <a
                href="https://twitter.com/kodeVortex"
                target="_blank"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
              >
                <FaTwitter className="text-gray-400" />
              </a>
              <a
                href="https://youtube.com/@kodevortex?si=PKz-yTp_5tH5QLFW"
                target="_blank"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
              >
                <FaYoutube className="text-gray-400" />
              </a>
              <a
                href="https://www.linkedin.com/company/kodevortex"
                target="_blank"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
              >
                <FaLinkedin className="text-gray-400" />
              </a>
              <a
                href="https://www.instagram.com/kodevortex"
                target="_blank"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
              >
                <FaInstagram className="text-gray-400" />
              </a>
            </div>

            {/* Contact Information */}
            <div className="text-gray-400 flex items-center">
              <span>+91-9639129214</span>
              <span className="mx-2">|</span>
              <span>+91-9137500132</span>
            </div>
          </div>

          <div className="flex space-x-28"> 
              {/* Quick Links */}
              <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  "Home",
                  "Training",
                  "Internship",
                  "About Us",
                  "Contact Us",
                  "KodeBumps"
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <FiArrowRight className="text-blue-500 mr-2" />
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Courses */}
            <div>
              <h3 className="text-xl font-bold mb-4">Popular Courses</h3>
              <ul className="space-y-3">
                {[
                  "Cloud Computing",
                  "Data Science",
                  "Generative AI",
                  "Java Full Stack",
                  "AWS & DevOps",
                  "SpringBoot",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <FiArrowRight className="text-blue-500 mr-2" />
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-3">
                {[
                  "Free Tutorials",
                  "Career Guide",
                  "Student Community",
                  "FAQ",
                  "Events & Webinars",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <FiArrowRight className="text-blue-500 mr-2" />
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Dark Mode Toggle */}
              <div className="absolute top-4 right-4 md:right-8">
                <button className="bg-gray-800 p-2 rounded-full">
                  <BsMoon className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-950 px-16 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300">
                Stay updated with the latest tech trends, course offers, and
                industry insights.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full md:w-64 rounded-l outline-none text-gray-800"
              />
              <button className="bg-blue-800 px-4 py-2.5 rounded-r hover:bg-blue-850 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 mt-2 flex justify-between px-10 text-gray-500 text-center py-4">
        <p>&copy; 2024 Kodevortex All Rights Reserved.</p>
        <div className="flex space-x-10 text-gray-500">
          <button>Privacy Policy</button>
          <button>Terms of Service</button>
          <button>Refund Policy</button>
          <button>Cookie Policy</button>
        </div>
    </div>
      
    </footer>
  );
};

export default Footer;
