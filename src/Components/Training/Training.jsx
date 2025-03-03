import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Training.css";
import app_dev from "./appdev.jpeg";
import blockchain from "./blockchain.jpeg";
import cloudtech from "./cloud_tech.jpeg";
import cybersecurity from "./cybersecurity.jpeg";
import data_science from "./datascience.jpeg";
import iot from "./iot.jpeg";
import mlops from "./mlops.jpg";
import machinelearning from "./machine_learning.jpeg";
import webdev from "./webdev.jpg";

const Training = () => {
  const services = [
    { name: "Full Stack Development", image: webdev, description: "Learn full stack development from scratch." },
    { name: "Block Chain", image: blockchain, description: "Learn Blockchain technology from scratch." },
    { name: "Cloud Technology", image: cloudtech, description: "Master Cloud Computing and AWS." },
    { name: "IOT", image: iot, description: "Explore Internet of Things and Smart Devices." },
    { name: "AI & ML", image: machinelearning, description: "Master AI and Machine Learning techniques." },
    { name: "App Development", image: app_dev, description: "Build mobile apps for iOS and Android." },
    { name: "Cyber Security", image: cybersecurity, description: "Secure your applications from cyber threats." },
    { name: "Data Science", image: data_science, description: "Dive into data science and analytics." },
    { name: "MLOps", image: mlops, description: "Learn MLOps to deploy and manage ML models." },
  ];

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [centerIndex, setCenterIndex] = useState(0);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 767, min: 200 }, items: 1 },
  };

  const handleAfterChange = (currentSlide) => {
    setCenterIndex(currentSlide);
  };

  return (
    <motion.div
      className="mt-16 md:mt-32 px-4 md:px-8"
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } : {}}
    >
      <h1 className="tracking-wide text-white training-heading font-bold text-center text-3xl md:text-4xl">
        TRAININGS
      </h1>
      <div className="h-[500px] md:h-[550px] mt-8 md:mt-10">
        <Carousel
          responsive={responsive}
          infinite
          dots
          autoPlay
          autoPlaySpeed={3000}
          transitionDuration={500}
          customTransition="transform 500ms ease-in-out"
          afterChange={handleAfterChange}
          // centerMode={true}
          itemClass="px-4"
        >
          {services.map((service, idx) => (
            <div key={idx} className="relative group">
              {/* Image */}
              <img
                src={service.image}
                alt={service.name}
                className="w-[500px] h-[400px] md:h-[400px] object-cover rounded-xl transition-all duration-300"
              />

              {/* Overlay (Always Visible) */}
              <div className={`absolute inset-0 flex flex-col justify-center items-center text-white rounded-xl transition-all duration-300  bg-opacity-50`}>
                <h2 className="text-2xl md:text-3xl text-center font-bold">{service.name}</h2>
                <p className="text-lg mt-2 w-3/4 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </motion.div>
  );
};

export default Training;
