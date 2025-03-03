import "./TrainingOffer.css";
import { useState, useEffect } from "react"; // Import useEffect
import { motion } from "framer-motion";
import python from "./python.png";
import java from "./java.png";
import vscode from "./vscode.png";
import database from "./database.png";

// Outer section variants (no tilt)
const sectionVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// Variants for each column container to stagger its children
const columnVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// New box entrance variants for each column
const leftBoxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const rightBoxVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Variant for the heading (slide in from left)
const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Variant for the icons container (fade & scale)
const iconsVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Variant for the details card (fade & slide up)
const detailsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Variant for each list item inside details (slide in from right)
const listItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const TrainingOffer = () => {
  // Data for ALGOCHARYA column (4 items)
  const trainingData1 = [
    {
      category: "Tech Training",
      details: [
        "Hands-on training in Python, ML, and Java",
        "MERN Stack development projects",
        "Industry-standard tools",
      ],
    },
    {
      category: "DSA Preparation",
      details: [
        "Structured LeetCode sessions",
        "Algorithm & data structure challenges",
        "Competitive programming tips",
      ],
    },
    {
      category: "Aptitude & Soft Skills",
      details: [
        "Aptitude tests and exercises",
        "Group discussion practice",
        "Effective communication training",
      ],
    },
    {
      category: "Core Subjects",
      details: [
        "In-depth revision of CN, DBMS, and OS",
        "Semester-wise curriculum insights",
        "Practical lab sessions",
      ],
    },
  ];

  // Data for Lakshyarithm column (4 items)
  const trainingData2 = [
    {
      category: "Tech Training",
      details: [
        "Career-aligned learning in Python, ML, and Java",
        "Real-world project work",
        "Advanced development frameworks",
      ],
    },
    {
      category: "DSA Preparation",
      details: [
        "Structured LeetCode practice",
        "In-depth algorithm analysis",
        "Competitive coding challenges",
      ],
    },
    {
      category: "Aptitude & Soft Skills",
      details: [
        "Focused aptitude training",
        "GD & communication enhancement",
        "Presentation & interpersonal skills",
      ],
    },
    {
      category: "Core Subjects",
      details: [
        "Comprehensive revision of CN, DBMS, OS",
        "Concept clarity sessions",
        "Problem-solving workshops",
      ],
    },
  ];

  // Icons for the first set (4 items)
  const iconsSet1 = [python, java, vscode, database];

  // Icons for the second set (4 items)
  const iconsSet2 = [python, java, vscode, database];

  // States to track hovered circle for each column.
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverIndex1, setHoverIndex1] = useState(null);

  // State to track the current index for the details card content
  const [currentDetailsIndex, setCurrentDetailsIndex] = useState(0);

  const currentIndex1 = hoverIndex !== null ? hoverIndex : 0;
  const currentIndex2 = hoverIndex1 !== null ? hoverIndex1 : 0;

  // Auto-change details card content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDetailsIndex((prevIndex) => (prevIndex + 1) % trainingData1.length);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={sectionVariants}
      className=" px-4"
    >
      <p className="training-heading  pb-8 md:pb-16 text-center tracking-wider">
        TRAININGS WE OFFER
      </p>

      <div className="flex flex-col md:flex-row md:space-x-10 justify-center items-center">
        {/* ------------ FIRST COLUMN (Left Box) ------------ */}
        <motion.div
          variants={leftBoxVariants}
          className="w-full md:w-[40%] lg:w-[32%] bg-gradient-to-tr from-slate-900 to-slate-950 flex flex-col items-center rounded-3xl p-4 md:p-6 text-white transition-all duration-500 h-auto md:h-[70vh] mb-10 md:mb-0 overflow-hidden"
        >
          <motion.div variants={columnVariants} className="flex flex-col h-full w-full">
            <motion.h1
              variants={headingVariants}
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center"
            >
              ALGOACHARYA
            </motion.h1>

            <motion.div
              variants={iconsVariants}
              className="relative flex justify-center flex-wrap gap-2 md:gap-0 md:flex-nowrap"
            >
              {trainingData1.map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex justify-center items-center text-2xl md:text-3xl cursor-pointer mt-2 md:mt-6 rounded-full transition-all duration-500 hover-shadow ${
                      hoverIndex === index ? "scale-110 shadow-lg border-black" : ""
                    }`}
                    style={{ marginLeft: index === 0 || window.innerWidth < 768 ? "0" : "-10px" }}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <img className="w-[60%] h-[60%]" src={iconsSet1[index]} alt="" />
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={detailsVariants}
              className="p-2 mt-auto text-center w-full"
            >
              <div
                className="content-card text-xs sm:text-sm md:text-base lg:text-lg border-l-2 w-full bg-slate-850 md:h-[14rem] lg:px-4 px-2 py-4 rounded-xl border-white transform-style-preserve-3d perspective-1000 hover:rotate-y-15 hover:rotate-x-10 transition-transform duration-500 ease-in-out overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <h2 className="font-bold mb-2 transform translate-z-20">
                  {trainingData1[currentDetailsIndex].category}
                </h2>
                <ul className="list-disc flex flex-col pt-2 space-y-1 md:space-y-2 list-inside transform translate-z-10">
                  {trainingData1[currentDetailsIndex].details.map((point, idx) => (
                    <motion.li
                      key={idx}
                      variants={listItemVariants}
                      className="list-item transform translate-z-5 text-left break-words"
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ------------ SECOND COLUMN (Right Box) ------------ */}
        <motion.div
          variants={rightBoxVariants}
          className="w-full md:w-[40%] lg:w-[32%] bg-gradient-to-tr from-slate-900 to-slate-950 flex flex-col items-center rounded-3xl p-4 md:p-6 text-white transition-all duration-500 h-auto md:h-[70vh] overflow-hidden"
        >
          <motion.div variants={columnVariants} className="flex flex-col h-full w-full">
            <motion.h1
              variants={headingVariants}
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center"
            >
              LAKSHYARITHM
            </motion.h1>

            <motion.div
              variants={iconsVariants}
              className="relative flex justify-center flex-wrap gap-2 md:gap-0 md:flex-nowrap"
            >
              {trainingData2.map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex justify-center items-center text-2xl md:text-3xl cursor-pointer mt-2 md:mt-6 rounded-full transition-all duration-500 hover-shadow ${
                      hoverIndex1 === index ? "scale-110 shadow-lg border-black" : ""
                    }`}
                    style={{ marginLeft: index === 0 || window.innerWidth < 768 ? "0" : "-10px" }}
                    onMouseEnter={() => setHoverIndex1(index)}
                    onMouseLeave={() => setHoverIndex1(null)}
                  >
                    <img className="w-[60%] h-[60%]" src={iconsSet2[index]} alt="" />
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={detailsVariants}
              className="p-2 mt-auto text-center w-full"
            >
              <div
                className="content-card text-xs sm:text-sm md:text-base lg:text-lg border-l-2 w-full bg-slate-850 md:h-[14rem] lg:px-4 px-2 py-4 rounded-xl border-white transform-style-preserve-3d perspective-1000 hover:rotate-y-15 hover:rotate-x-10 transition-transform duration-500 ease-in-out overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <h2 className="font-bold mb-2 transform translate-z-20">
                  {trainingData2[currentDetailsIndex].category}
                </h2>
                <ul className="list-disc flex flex-col pt-2 space-y-1 md:space-y-2 list-inside transform translate-z-10">
                  {trainingData2[currentDetailsIndex].details.map((point, idx) => (
                    <motion.li
                      key={idx}
                      variants={listItemVariants}
                      className="list-item transform translate-z-5 text-left break-words"
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TrainingOffer;