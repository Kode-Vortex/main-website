import Slider from "react-slick"; // The carousel library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import "./AssociateInstitution.css";

// Image Imports
import galgotia from "./galgotia.png";
import gla from "./gla.png";
import iftm from "./iftm.png";
import iilm from "./iilm.png";
import kalasalingam from "./kalasalingam.png";
import nims from "./nims.png";
import sharada from "./sharada.png";
import vishwaniketan from "./vishwaniketan.png";
import kg_reddy from "./kg_reddy.png";

const AssociateInstitution = () => {
  const AssociateInstitutionContent = [
    galgotia,
    gla,
    iftm,
    iilm,
    kalasalingam,
    nims,
    sharada,
    vishwaniketan,
    kg_reddy,
  ];

  // Carousel settings
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

 

  // Animation for each slide
  const slideVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  // useInView to re-trigger animation when section enters the viewport
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <>
       <h2 className="course-heading text-center tracking-wider pb-12 md:pb-14">
        ASSOCIATED INSTITUTION
      </h2>
    
    <div className="overflow-hidden my-16  bg-gray-400 py-5">
      
      <motion.div
        className="flex space-x-24 items-center w-max"
        animate={{ x: ["0%", "-50%"] }} // Moves images seamlessly
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...AssociateInstitutionContent, ...AssociateInstitutionContent].map(
          (image, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={image}
                alt={`Institution ${index + 1}`}
                className="h-28 w-28 md:h-44 md:w-44 object-contain"
              />
            </div>
          )
        )}
      </motion.div>

      
    </div>

    </>
  );
};

export default AssociateInstitution;
