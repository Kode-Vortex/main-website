import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const projects = [
  {
    label: "Guided Project",
    heading: "Work like Backend Developers at Zomato",
    description:
      "Build a high-scale distributed web backend for a food ordering app.",
    techStack: ["MongoDB", "Java", "Spring Boot", "Redis"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_wsNlUYaV8Ki0hdLYJksiWA_kkiorXAvAA&s",
  },
  {
    label: "Guided Project",
    heading: "Be a ModelOps Engineer at OpenAI",
    description:
      "Build a real-time model monitoring and retraining system that adapts to data drift instantly.",
    techStack: [
      "Kubeflow",
      "MLflow",
      "TensorFlow Serving",
      "AWS Lambda",
      "Prometheus",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_wsNlUYaV8Ki0hdLYJksiWA_kkiorXAvAA&s",
  },
  {
    label: "Guided Project",
    heading: "Automate Infrastructure Like a Netflix SRE",
    description:
      "Create an AI-powered DevOps pipeline that detects failures and auto-remediates in real time.",
    techStack: ["Kubernetes", "Terraform", "Prometheus", "AWS Lambda"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_wsNlUYaV8Ki0hdLYJksiWA_kkiorXAvAA&s",
  },
  {
    label: "Guided Project",
    heading: "Defend Against Cyber Attacks Like Microsoft Red Team",
    description:
      "Build an AI-powered security system that detects and mitigates cyber threats in real time.",
    techStack: ["Snort", "Suricata", "TensorFlow", "Splunk", "AWS WAF"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_wsNlUYaV8Ki0hdLYJksiWA_kkiorXAvAA&s",
  },
];

const NewComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: (i) => (
      <div className="w-2 mt-6 h-2 rounded-full bg-white" />
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="px-4 md:px-6 mb-24 md:mb-36">
      <MotionSlider settings={settings} projects={projects} />
    </div>
  );
};

const sliderVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const MotionSlider = ({ settings, projects }) => {
  return (
    <motion.div
      variants={sliderVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="bg-slate-900 flex flex-col justify-between text-white w-full md:w-[21rem] h-[30rem] md:h-[35rem] rounded-xl shadow-lg p-4 md:p-6 relative mx-2">
              <div>
                <div className="flex justify-center">
                  <span className="absolute top-4 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {project.label}
                  </span>
                </div>
                <div className="flex justify-center my-8 md:my-12">
                  <img
                    src={project.image}
                    alt={project.heading}
                    className="w-32 h-32 md:w-44 md:h-44 object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-center">
                  {project.heading}
                </h3>
                <p className="text-base md:text-lg py-3 text-gray-200 text-center mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default NewComp;