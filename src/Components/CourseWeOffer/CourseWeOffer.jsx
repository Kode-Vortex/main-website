import { useState, useEffect } from "react";
import cpp from "./cpp.jpeg";
import csharp from "./csharp.jpg";
import cybersecurity from "./cybersecurity.jpg";
import genai from "./genai.jpg";
import git from "./git.jpg";
import go from "./go.jpg";
import java from "./java.jpg";
import js from "./js.jpg";
import lanchain from "./lanchain.jpg";
import mern from "./mern.jpg";
import mlops from "./mlops.jpg";
import php from "./php.png";
import powerbi from "./powerbi.jpg";
import github from "./github.jpeg";
import python from "./python.jpg";
import ruby from "./ruby.jpg";
import tensorflow from "./tensorflow.jpg";
import aws from "./aws.jpg";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import route_opt from "./project_images/route_opt.png";
import modelops from "./project_images/modelops.png";
import fraud_d from "./project_images/fraud_d.png";
import ai_optimization from "./project_images/ai_optimization.png";
import vehile from "./project_images/vehile.png";
import editing_doc from "./project_images/editing_doc.png";
import video_stream_platf from "./project_images/video_stream_platf.png";
import real_time_booking from "./project_images/real_time_booking.png";
import "./CourseWeOffer.css";

const projects = [
  {
    label: "Guided Project",
    heading: "AI-Powered Dynamic Route Optimization for Smart Cities",
    description:
      "Develop an AI-powered real-time navigation system optimized for traffic conditions.",
    techStack: ["Python", "NetworkX", "OpenStreetMap API", "Flask", "MQTT"],
    image: route_opt,
  },
  {
    label: "Guided Project",
    heading: "Real-Time Model Deployment & Auto-Retraining System",
    description:
      "Build a real-time model monitoring and retraining system that adapts to data drift instantly.",
    techStack: [
      "Kubeflow",
      "MLflow",
      "TensorFlow Serving",
      "AWS Lambda",
      "Prometheus",
    ],
    image: modelops,
  },
  {
    label: "Guided Project",
    heading: "Live Financial Analytics & Fraud Detection Dashboard",
    description:
      "Build a real-time dashboard that provides live financial insights and fraud detection.",
    techStack: [
      "React.js",
      "Node.js",
      "WebSockets",
      "MongoDB",
      "Express.js",
      "Solidity",
    ],
    image: fraud_d,
  },
  {
    label: "Guided Project",
    heading: "Live AI Model Optimization with Reinforcement Learning",
    description:
      "Develop an intelligent system that dynamically optimizes deployed ML models in production.",
    techStack: [
      "TensorFlow",
      "Kubernetes",
      "ONNX",
      "AWS Fargate",
      "Apache Kafka",
    ],
    image: ai_optimization,
  },
  {
    label: "Guided Project",
    heading: "AI-Powered Automatic Number Plate Recognition (ANPR) System",
    description:
      "Develop an end-to-end number plate detection and recognition system for real-time vehicle identification.",
    techStack: ["OpenALPR", "OpenCV", "Flask", "FastAPI", "Node.js", "SQL"],
    image: vehile,
  },
  {
    label: "Guided Project",
    heading: "Live Multi-User Document Editing Platform",
    description:
      "Develop a real-time collaborative document editing tool with multi-user live synchronization.",
    techStack: [
      "React.js",
      "Node.js",
      "WebSockets",
      "Firebase",
      "CRDT",
      "WebRTC",
    ],
    image: editing_doc,
  },

  {
    label: "Guided Project",
    heading: "Real-Time Interactive Video Streaming Platform",
    description:
      "Develop a low-latency video streaming platform with live chat and interactive elements.",
    techStack: [
      "WebRTC",
      "Node.js",
      "Redis",
      "React.js",
      "AWS Lambda",
      "FFmpeg",
    ],
    image: video_stream_platf,
  },
  {
    label: "Guided Project",
    heading:
      "Smart AI Travel Planner with Real-Time Booking & Itinerary Generation ",
    description:
      "Build an AI-powered travel agent that provides personalized trip planning, real-time booking, and itinerary generation.",
    techStack: ["Fine-tuned LLMs", "Apigee", "MERN stack"],
    image: real_time_booking,
  },
];

const courses = [
  { image: aws, title: "aws" },
  { image: cpp, title: "C++" },
  { image: cybersecurity, title: "cybersecurity" },
  { image: genai, title: "genai" },
  { image: git, title: "Git" },
  { image: csharp, title: "C#" },
  { image: github, title: "GitHub" },
  { image: go, title: "Go" },
  { image: java, title: "Java" },
  { image: js, title: "JavaScript" },
  { image: lanchain, title: "langchain" },
  { image: mern, title: "mern" },
  { image: mlops, title: "mlops" },
  // {image : opencv , title : "opencv"},
  { image: php, title: "php" },
  { image: powerbi, title: "powerbi" },
  { image: python, title: "Python" },
  { image: ruby, title: "ruby" },
  { image: tensorflow, title: "tensorflow" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  // centerMode: true,
  // centerPadding: "0%", // Adjust this value to control the spacing between slides
  arrows: false,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "0px", // Adjust for medium screens
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "20px", // Adjust for small screens
      },
    },
  ],
};
const gridVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CourseWeOffer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 4) % courses.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentGroup = [0, 1, 2, 3].map(
    (i) => courses[(currentIndex + i) % courses.length]
  );

  return (
    <div className="text-white mt-20 mb-8 md:mb-16">
      <h2 className="course-heading text-center tracking-wider pb-12 md:pb-14">
        TECHNOLOGIES WE HAVE
      </h2>

      <div className="overflow-hidden  py-5">
        <motion.div
          className="flex space-x-24 items-center w-max"
          animate={{ x: ["0%", "-50%"] }} // Moves images seamlessly
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...courses, ...courses].map(
            (
              course,
              index // Duplicates the array for seamless looping
            ) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-28 w-28 md:h-32 md:w-32 object-contain"
                />
              </div>
            )
          )}
        </motion.div>
      </div>

      <div className=" mt-24 md:mt-12 pt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: "easeOut" },
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Slider {...settings} className="  ">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animated-border-box mb-6 bg-slate-900 flex flex-col items-center justify-evenly   text-white w-full md:w-[100%] lg:w-[100%] h-[35rem] md:h-[580px] rounded-xl shadow-lg p-4 md:p-6 relative overflow-hidden"
              >
                <div className="relative flex flex-col  items-center">
                  <span className="absolute  left-1/2 transform -translate-x-1/2 text-xs bg-green-100 text-green-800  font-semibold px-4 text-center py-1 rounded-full">
                    {project.label}
                  </span>
                  <div className="flex justify-center my-8 md:my-8 ">
                    <img
                      src={project.image}
                      alt={project.heading}
                      className="w-32 h-32 md:w-52 md:h-52 object-contain rounded-xl border-4 border-transparent transition-all duration-500 ease-in-out
              hover:shadow-[0_0_15px_rgba(0,240,255,0.8)]"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-center px-2">
                    {project.heading}
                  </h3>
                  <p className="text-base md:text-lg py-3 text-gray-200 text-center px-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center  items-end gap-2 mt-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 font-bold text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseWeOffer;
