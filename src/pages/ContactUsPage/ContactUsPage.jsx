import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import insta from "./insta.png";
import linkedin from "./linkedin.png";
import x from "./x.png";
import toast from "react-hot-toast";
import "./ContactUsPage.css";
import { send } from '@emailjs/browser';
import { useState } from "react";

// Animation variants for left and right sections
const leftSectionVariants = {
  hidden: { opacity: 0, x: -150, rotate: -10, scale: 0.9 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotate: 0, 
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

const rightSectionVariants = {
  hidden: { opacity: 0, x: 150, rotate: 10, scale: 0.9 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotate: 0, 
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

// Animation variant for form elements (staggered)
const formVariants = {
  hidden: {},
  visible: {
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2 
    }
  }
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

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
      to_emails: 'hv77856@gmail.com,sn013293@gmail.com,vijay.singh@kodevortex.in',
    };

    try {
      await send(
        'service_7hbmjqn', // Replace with your EmailJS service ID
        'template_n9dedjp', // Replace with your EmailJS template ID
        templateParams,
        'FQ2mG-WW5dDSPIj-1' // Replace with your EmailJS public key
      );
      toast.success('Message sent successfully!');
      setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row mt-16 mb-36 w-full px-[10%] space-y-8 md:space-y-0">
      {/* Left Half (Contact Info) */}
      <motion.div
        className="w-full md:w-[45%] p-6 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={leftSectionVariants}
      >
        <div className="flex flex-col items-start space-y-4">
          <button className="px-10 py-3 rounded-full bg-[#363739] text-white font-outfit text-[24px]">
            Contact Us
          </button>
          <h1 className="text-white font-outfit text-5xl font-normal">
            How can we help you?
          </h1>
          <p className="text-white font-outfit text-[20px]">
            You can fill the form or drop an email to
          </p>
          <p className="text-white font-outfit text-[20px]">
            vijay.singh@kodevortex.in
          </p>
          <div className="flex flex-col space-y-4 pt-6">
            <button className="flex items-center bg-[#23565F] w-44 h-12 rounded-full justify-center space-x-2">
              <FaGoogle className="text-xl text-white" />
              <span className="text-white">kodevortex</span>
            </button>
            <button className="flex items-center bg-[#23565F] w-44 h-12 rounded-full justify-center space-x-2">
              <img className="w-8" src={insta} alt="Instagram" />
              <span className="text-white">kodevortex</span>
            </button>
            <button className="flex items-center bg-[#23565F] w-44 h-12 rounded-full justify-center space-x-2">
              <img className="w-8" src={linkedin} alt="LinkedIn" />
              <span className="text-white">KodeVortex</span>
            </button>
            <button className="flex items-center bg-[#23565F] w-44 h-12 rounded-full justify-center space-x-2">
              <img className="w-8" src={x} alt="X" />
              <span className="text-white">KodeVortex</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Right Half (Contact Form) */}
      <motion.div
        className="w-full md:w-[55%] p-6 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={rightSectionVariants}
      >
        <motion.div 
          className="text-white flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={formVariants}
        >
          <form className="space-y-6 w-full" onSubmit={handleSubmit}>
            <motion.div variants={fieldVariants} className="flex flex-col">
              <label htmlFor="fullName" className="pb-2 font-outfit text-[20px]">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                placeholder="Enter your Full Name"
                onChange={handleChange}
                required
                className="w-full md:w-[100%] px-4 py-1.5 rounded-3xl bg-[#B8B8B8] text-black placeholder-black focus:outline-none"
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="flex flex-col">
              <label htmlFor="email" className="pb-2 font-outfit text-[20px]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="Enter Your Email"
                onChange={handleChange}
                required
                className="w-full md:w-[100%] px-4 py-1.5 rounded-3xl bg-[#B8B8B8] text-black placeholder-black focus:outline-none"
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="flex flex-col">
              <label htmlFor="phoneNumber" className="pb-2 font-outfit text-[20px]">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                placeholder="Enter your Phone Number"
                onChange={handleChange}
                required
                className="w-full md:w-[100%] px-4 py-1.5 rounded-3xl bg-[#B8B8B8] text-black placeholder-black focus:outline-none"
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="flex flex-col">
              <label htmlFor="message" className="pb-2 font-outfit text-[20px]">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                placeholder="Enter Your Text Here"
                onChange={handleChange}
                required
                className="w-full md:w-[100%] px-4 py-2 h-32 rounded-2xl bg-[#B8B8B8] text-black placeholder-black focus:outline-none"
              ></textarea>
            </motion.div>

            <motion.div variants={fieldVariants} className="flex items-center gap-x-3">
              <input type="checkbox" name="policy" id="policy" required />
              <label htmlFor="policy" className="w-80 font-outfit text-[20px]">
                I agree to your <span className="text-blue-500">Privacy Policy</span> terms.
              </label>
            </motion.div>

            <motion.div variants={fieldVariants}>
              <button type="submit" className="w-full py-2.5 rounded-3xl bg-[#0D315C]">
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
