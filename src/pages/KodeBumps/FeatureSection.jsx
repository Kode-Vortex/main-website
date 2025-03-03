import { motion } from "framer-motion";
import techbanner from "./techbanner.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const FeatureSection = () => {
  const features = [
    {
      title: "Future-Ready Training Programs",
      description:
        "We provide industry-focused training in tech, development, data science, and entrepreneurship, ensuring career-ready skills through hands-on projects and expert mentorship.",
    },
    {
      title: "Building a Tech Excellence Hub",
      description:
        "Our framework offers digital learning, expert mentorship, software tools, cloud credits, hands-on projects, hackathons, certifications, and resources for embedded systems, robotics, and 3D printing to drive innovation.",
    },
    {
      title: "Real-World Projects & Innovation",
      description:
        "Students gain real-world experience through industry projects, live collaborations, and market-ready product development, fostering innovation and entrepreneurship.",
    },
    {
      title: "Innovative Learning Through Design Thinking",
      description:
        "We cultivate problem-solving, creativity, and critical thinking through design workshops, case studies, and structured methodologies, empowering students to build innovative solutions.",
    },
    {
      title: "Hackathons, Showcases & Funding Support",
      description:
        "We host hackathons, showcase projects for industry exposure, and help students secure funding for innovative ideas.",
    },
    {
      title: "Startup Incubation & Business Growth",
      description:
        "We offer startup training, freelancing guidance, and business support to help students build market-ready products and sustainable ventures.",
    },
    {
      title: "Funding & Investment Mentorship",
      description:
        "We connect students with funding, offer grant and pitching seminars, and facilitate investor networking for startup growth.",
    },
    {
      title: "Industry Collaboration for Product Development",
      description:
        "We link students with vendors, suppliers, and tech partners to develop prototypes, access resources, and scale production.",
    },
    {
      title: "Marketing & Brand Growth Seminars",
      description:
        "We provide workshops on digital marketing, branding, and sales, plus networking and market entry support.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto px-6 md:px-32 py-12 mt-16 lg:mt-36">
      {/* Added Attractive Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-center mb-16"
      >
        <div className="relative inline-block">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold relative z-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-500">
              Empowering Innovation
            </span>
          </h1>
          <motion.div 
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-400/20 to-red-500/20 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.div
            className="absolute -inset-4 bg-red-500/5 rounded-full blur-xl z-0"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.6, 0.8, 0.6] 
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
        <motion.p 
          className="text-gray-300 text-lg md:text-xl mt-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover our comprehensive ecosystem designed to nurture the next generation of tech innovators
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#111111] p-6 items-center rounded-xl shadow-xl border border-gray-800 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.15]" style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgzMiwgMTc4LCAxNzAsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIgZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')"
          }} />
        </div>
        
        {/* Large circle */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full border-2 border-[#20B2AA]/10 -left-[200px] -bottom-[200px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Small circle */}
        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full border border-[#F28474]/10 -right-[100px] top-[10%]"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-b from-[#F28474] to-[#20B2AA] opacity-20"
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)"
            }}
            animate={{
              y: [0, Math.random() * 80 - 40],
              x: [0, Math.random() * 80 - 40],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, Math.random() * 0.5 + 1, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full space-y-6 md:space-y-8 z-10"
        >
          <Slider {...settings} className="feature-slider">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
                className="p-6 rounded-xl bg-[#111111] border border-gray-800 shadow-lg shadow-black/50 relative group overflow-hidden"
              >
                {/* Hover effect glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#F28474]/10 to-[#20B2AA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute rotate-45 bg-gradient-to-r from-[#F28474]/10 to-[#20B2AA]/10 w-10 h-10 -right-5 -top-5 transform origin-bottom-left" />
                </div>
                
                <h2 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#F28474] to-[#20B2AA] font-bold relative z-10">
                  {feature.title}
                </h2>
                <p className="mt-3 text-gray-300 text-base md:text-lg relative z-10">
                  {feature.description}
                </p>
                
                {/* Bottom accent line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#F28474]/70 to-[#20B2AA]/70 w-0 group-hover:w-full transition-all duration-500 ease-out"
                />
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full z-10"
        >
          <motion.div className="relative">
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#F28474]/30 to-[#20B2AA]/30 rounded-lg transform rotate-3 scale-105 opacity-40 blur-md" />
            <motion.img
              src={techbanner}
              alt="Feature Image"
              className="relative rounded-lg shadow-lg w-full h-auto object-cover border-2 border-gray-800 group-hover:border-[#20B2AA]/30 transition-all duration-300"
              initial={{ rotate: -5 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Add custom styles for Slick carousel */}
      <style jsx global>{`
        .feature-slider .slick-dots li button:before {
          color: rgb(242, 132, 116);
          opacity: 0.4;
        }
        .feature-slider .slick-dots li.slick-active button:before {
          color: rgb(32, 178, 170);
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default FeatureSection;