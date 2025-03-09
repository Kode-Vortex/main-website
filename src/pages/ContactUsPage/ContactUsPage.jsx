import { motion } from "framer-motion";
import { FaGoogle, FaYoutube } from "react-icons/fa";
import insta from "./insta.png";
import linkedin from "./linkedin.png";
import x from "./x.png";
import toast from "react-hot-toast";
import "./ContactUsPage.css";
import { send } from '@emailjs/browser';
import { useState, useEffect } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInView(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Enhanced animation variants for left section
  const leftSectionVariants = {
    hidden: { opacity: 0, x: -150, scale: 0.8, rotateY: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Enhanced animation variants for right section
  const rightSectionVariants = {
    hidden: { opacity: 0, x: 150, scale: 0.8, rotateY: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 1, 0.5, 1] 
      }
    }
  };

  // Individual element animations for left section
  const contactItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  // Social button hover effects
  const socialButtonVariants = {
    initial: { scale: 1, backgroundColor: "#23565F" },
    hover: { 
      scale: 1.05, 
      backgroundColor: "#357681",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  // Advanced form field animations
  const formVariants = {
    hidden: {},
    visible: {
      transition: { 
        staggerChildren: 0.12, 
        delayChildren: 0.5 
      }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: 50, y: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      } 
    }
  };

  // Submit button animation
  const submitButtonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.8
      } 
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0px 5px 15px rgba(13, 49, 92, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.97 }
  };

  // Heading text animations
  const textRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        delay: 0.2 + (i * 0.1) 
      } 
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone_number: formData.phoneNumber,
      message: formData.message,
      to_emails: 'harshverma8433@gmail.com,sn013293@gmail.com,vijay.singh@kodevortex.in,shivampaisal94@gmail.com',
    };

    try {
      await send(
        'service_7hbmjqn',
        'template_n9dedjp',
        templateParams,
        'FQ2mG-WW5dDSPIj-1'
      );
      toast.success('Message sent successfully!');
      setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row mt-4 mb-16 w-full px-[10%] space-y-8 md:space-y-0 overflow-hidden">
      {/* Left Half (Contact Info) */}
      <motion.div
        className="w-full md:w-[45%] p-6 bg-black rounded-l-3xl overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={leftSectionVariants}
      >
        <div className="flex flex-col items-start space-y-6">
          <motion.button 
            className="px-10 py-3 rounded-full bg-[#363739] text-white font-outfit text-[24px]"
            variants={contactItemVariants}
            whileHover={{ scale: 1.05, backgroundColor: "#4a4b4e" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
          
          <motion.div
            custom={1}
            variants={textRevealVariants}
          >
            <h1 className="text-white font-outfit text-5xl font-normal">
              How can we
            </h1>
          </motion.div>
          
          <motion.div
            custom={2}
            variants={textRevealVariants}
          >
            <h1 className="text-white font-outfit text-5xl font-normal">
              help you?
            </h1>
          </motion.div>
          
          <motion.div
            variants={contactItemVariants}
            className="mt-4"
          >
            <p className="text-white font-outfit text-[20px]">
              You can fill the form or drop an email to
            </p>
          </motion.div>
          
          <motion.div
            variants={contactItemVariants}
            whileHover={{ scale: 1.05, color: "#4d9bad" }}
          >
            <p className="text-white font-outfit text-[20px] hover:text-blue-300 transition-colors duration-300">
              vijay.singh@kodevortex.in
            </p>
          </motion.div>
          
          <div className="flex flex-col space-y-4 pt-6">
            <a 
            href="https://youtube.com/@kodevortex?si=PKz-yTp_5tH5QLFW"
              className="flex items-center bg-[#23565F] w-44 h-12 rounded-full justify-center space-x-2"
              target="_blank"
            >
              <FaYoutube className="text-3xl text-red-600" />
              <span className="text-white">kodevortex</span>
            </a>
            
            <a 
              href="https://www.instagram.com/kodevortex"
              className="flex items-center bg-[#23565F] w-44 h-12 rounded-full justify-center space-x-2"
              target="_blank"
            >
              <img className="w-8" src={insta} alt="Instagram" />
              <span className="text-white">kodevortex</span>
            </a>
            
            <a 
            
              href="https://www.linkedin.com/company/kodevortex"
              className="flex items-center bg-[#23565F] w-44 h-12 rounded-full justify-center space-x-2"
              target="_blank"
           
            >
              <img className="w-8" src={linkedin} alt="LinkedIn" />
              <span className="text-white">KodeVortex</span>
            </a>
            
            <a
              href="https://twitter.com/kodeVortex"
              className="flex items-center bg-[#23565F] w-44 h-12 rounded-full justify-center space-x-2"
             target="_blank"
            >
              <img className="w-8" src={x} alt="X" />
              <span className="text-white">KodeVortex</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Half (Contact Form) */}
      <motion.div
        className="w-full md:w-[55%] p-6 bg-black rounded-r-3xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={rightSectionVariants}
      >
        <motion.div 
          className="text-white flex flex-col items-center"
          variants={formVariants}
        >
          <form className="space-y-6 w-full" onSubmit={handleSubmit}>
            <motion.div variants={fieldVariants} className="flex flex-col">
              <label htmlFor="fullName" className="pb-2 font-outfit text-[20px]">
                Full Name
              </label>
              <motion.input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                placeholder="Enter your Full Name"
                onChange={handleChange}
                required
                className="w-full md:w-[100%] px-4 py-1.5 rounded-3xl bg-[#B8B8B8] text-black placeholder-black focus:outline-none"
                whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px rgba(255,255,255,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="flex flex-col">
              <label htmlFor="email" className="pb-2 font-outfit text-[20px]">
                Email Address
              </label>
              <motion.input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="Enter Your Email"
                onChange={handleChange}
                required
                className="w-full md:w-[100%] px-4 py-1.5 rounded-3xl bg-[#B8B8B8] text-black placeholder-black focus:outline-none"
                whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px rgba(255,255,255,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="flex flex-col">
              <label htmlFor="phoneNumber" className="pb-2 font-outfit text-[20px]">
                Phone Number
              </label>
              <motion.input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                placeholder="Enter your Phone Number"
                onChange={handleChange}
                required
                className="w-full md:w-[100%] px-4 py-1.5 rounded-3xl bg-[#B8B8B8] text-black placeholder-black focus:outline-none"
                whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px rgba(255,255,255,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="flex flex-col">
              <label htmlFor="message" className="pb-2 font-outfit text-[20px]">
                Message
              </label>
              <motion.textarea
                name="message"
                id="message"
                value={formData.message}
                placeholder="Enter Your Text Here"
                onChange={handleChange}
                required
                className="w-full md:w-[100%] px-4 py-2 h-32 rounded-2xl bg-[#B8B8B8] text-black placeholder-black focus:outline-none"
                whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px rgba(255,255,255,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="flex items-center gap-x-3">
              <motion.input 
                type="checkbox" 
                name="policy" 
                id="policy" 
                required 
                className="w-5 h-5"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
              <label htmlFor="policy" className="font-outfit text-[20px]">
                I agree to your <span className="text-blue-500">Privacy Policy</span> terms.
              </label>
            </motion.div>

            <motion.div 
              variants={submitButtonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <button 
                type="submit" 
                className="w-full py-2.5 rounded-3xl bg-[#0D315C] font-outfit text-xl"
              >
                Submit Form
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUsPage;