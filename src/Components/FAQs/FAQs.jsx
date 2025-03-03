import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";
import "./FAQs.css";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    {
      question: "Do I get a certificate after completing a course?",
      answer:
        "Yes, upon successful completion of a course, you will receive a verified certificate that you can share on LinkedIn, your resume, or with potential employers.",
    },
    {
      question: "Can I switch to a different course after enrolling in one?",
      answer:
        "Absolutely! If you wish to switch courses, you can do so within a certain period after enrollment. Check our refund and course-switching policies for more details.",
    },
    {
      question: "Do I get direct support from instructors?",
      answer:
        "Yes, many of our courses provide direct support from instructors through Q&A sessions, discussion forums, or live mentorship sessions. The availability of direct support depends on the course type.",
    },
    {
      question: "Is there a community or forum to interact with other learners?",
      answer:
        "Yes! We have a dedicated community forum where learners can ask questions, discuss topics, and share insights. Join the discussion and learn collaboratively!",
    },
    {
      question: "How do I download course materials for offline learning?",
      answer:
        "Some courses offer downloadable materials like PDFs, notes, and worksheets for offline access. Look for the 'Download' option within the course content.",
    },
    {
      question: "How do I report a technical issue?",
      answer:
        "If you experience any technical issues, please contact our support team through the Help Center, or email us at support@yourplatform.com with details about the problem.",
    },
    {
      question: "Can I use my account on multiple devices?",
      answer:
        "Yes, you can access your courses on multiple devices, including your laptop, tablet, and mobile phone. Just log in with your account, and your progress will be synced automatically.",
    },
    {
      question: "Do you provide job placement assistance?",
      answer:
        "Yes! We offer career support, resume-building tips, and job placement assistance for select programs. Our career services team can help connect you with potential employers.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Container variants for the overall FAQ section
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  // Variant for each FAQ item
  const faqItemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  // Variant for the answer (animated expansion)
  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.5 },
    },
  };

  // useInView hook to re-trigger animation on section view
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div className=" py-12 md:py-8  px-4 md:px-8">
      {/* Heading */}
      <motion.h2
        className="faq-heading font-bold tracking-wider text-center mb-8 md:mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        Frequently Asked Questions 
      </motion.h2>

      {/* FAQ Items */}
      <motion.div
        className="max-w-3xl mx-auto space-y-4 md:space-y-6"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        viewport={{ once: false, amount: 0.3 }}
      >
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="bg-slate-900 cursor-pointer  py-3 text-white  px-4 md:px-6"
            variants={faqItemVariants}
            layout
          >
            {/* Question */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className=" text-lg md:text-xl font-semibold ">
                  {faq.question}
                </p>
              </div>
              <ChevronDown
                className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              />
            </div>
            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="mt-3 text-white text-base md:text-lg leading-relaxed overflow-hidden"
                  variants={answerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQs;