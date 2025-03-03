import React from "react";
import Slider from "react-slick"; // The carousel library
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import suraj_nayak from "./suraj_nayak.jpg";
import sonal_mittal from "./sonal_mittal.jpg";
import rishabh_triphati from "./rishabh_triphati.jpg";
import sanskriti from "./sanskriti.jpg";
import "./OurTeam1.css"; // Ensure this file includes your custom slider gap CSS

const OurTeam1 = () => {
  const teams = [
    { name: "Suraj Nayak", image: suraj_nayak, role: "Project Manager" },
    { name: "Sonal Mittal", image: sonal_mittal, role: "Team Member" },
    { name: "Rishabh Tripathi", image: rishabh_triphati, role: "Team Member" },
    { name: "Sanskrati Agrawal", image: sanskriti, role: "Team Member" },
  ];

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // useInView hook to trigger animation when section enters view
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <div className="">
      <h1 className="text-[#CF9274] font-mono text-5xl font-semibold text-center  tracking-wide text-font py-16">
      The Minds Behind KodeVortex

      </h1>
      <div className="w-[70%] mx-auto" ref={ref}>
        <div className="px-10">
          <Slider {...settings}>
            {teams.map((member, index) => (
              <motion.div
                key={index}
                className="rounded-xl h-96 flex flex-col items-center"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-3xl mb-4"
                />
                <p className="text-white text-lg font-semibold">
                  {member.name}, {member.role}
                </p>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurTeam1;
