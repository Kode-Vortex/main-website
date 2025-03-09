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

  // Add a pulsing effect to highlight featured institutions
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % AssociateInstitutionContent.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [AssociateInstitutionContent.length]);

  return (
    <>
      <h2 className="course-heading text-center tracking-wider pb-12 md:pb-14">
        ASSOCIATED INSTITUTIONS
      </h2>

      {/* Changed background to a gradient */}
      <div className="overflow-hidden my-16 bg-gradient-to-r  py-8 shadow-lg rounded-lg">
       
        
        <motion.div
          className="flex space-x-24 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...AssociateInstitutionContent, ...AssociateInstitutionContent].map(
            (image, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 bg-white p-4 rounded-lg mx-2"
                whileHover={{ y: -10, scale: 1.05 }}
                animate={index % AssociateInstitutionContent.length === featuredIndex ? 
                  { scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(255,255,255,0.2)", "0px 0px 20px rgba(255,255,255,0.8)", "0px 0px 0px rgba(255,255,255,0.2)"] } : {}}
                transition={{ duration: 1.5, repeat: index % AssociateInstitutionContent.length === featuredIndex ? Infinity : 0 }}
              >
                <img
                  src={image}
                  alt={`Institution ${index + 1}`}
                  className="h-28 w-28 md:h-44 md:w-44 object-contain"
                />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </>
  );
};

export default AssociateInstitution;