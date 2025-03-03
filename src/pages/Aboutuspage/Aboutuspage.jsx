import { motion } from "framer-motion";
import OurTeam1 from "./OurTeam1/OurTeam1";

const fadeSlideVariants = {
  hidden: { opacity: 0, y: 30, rotate: 2, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const flipVariants = {
  hidden: { opacity: 0, rotateY: 90, scale: 0.95 },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const Aboutuspage = () => {
  return (
    <div className="px-[4%] pb-16">
      {/* Gradient Header */}
      <motion.div
        className="w-full mt-8 h-72 bg-gradient-to-r from-[#5D7284] to-[#3B3A66]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeSlideVariants}
      ></motion.div>

      {/* Intro Text */}
      <motion.div
        className="text-white my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeSlideVariants}
      >
        <h1 className="text-3xl font-semibold text-center">
          <span className="text-[#CF9274]">WHAT IS</span>{" "}
          <span className="text-[#056777] text-5xl">KODE</span> VORTEX
        </h1>
        <div className="lg:px-[5%] pl-[5%] flex flex-col space-y-5 my-10">
          <p className="text-2xl">
          KodeVortex is a cutting-edge learning platform designed to equip students and professionals with 
          high-tech and industry-relevant skills. 
          We bridge the gap between academic knowledge and real-world applications through expert-led training, hands-on projects, 
          and structured learning paths.
          </p>
          <p className="text-2xl">
          Join us to build expertise, gain industry-recognized certifications, and take your career to the next level! 🚀
          </p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="px-4 py-8 relative flex flex-col items-center justify-center my-16 lg:my-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={flipVariants}
      >
        {/* Background Blur for Desktop */}
        <div className="absolute hidden lg:block w-[48rem] h-[38rem] rounded-2xl blur-xl opacity-40 bg-[#056777] mr-[30rem]"></div>
        {/* Background Blur for Mobile */}
        <div className="absolute block lg:hidden w-full h-[30rem] rounded-2xl blur-xl opacity-40 bg-[#056777] top-1/2 transform -translate-y-1/2"></div>

        <div className="relative z-10">
          <h1 className="text-[#CF9274] text-center text-3xl lg:text-4xl font-bold mb-8 lg:mb-16">
            OUR MISSION
          </h1>
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12 items-center">
            <div className="w-full lg:w-[28rem] h-[20rem] lg:h-[24rem] bg-gray-300 rounded-[1rem] lg:rounded-[2rem]"></div>
            <div className="max-w-lg">
              <p className="text-white text-lg lg:text-[130%] text-justify">
              At KodeVortex, we bridge the gap between academia and industry by providing high-tech, hands-on training in competitive programming, data structures, and algorithms. Our dynamic learning environment fosters growth, confidence, and career readiness. We offer live project opportunities, one-to-one mentoring, and startup incubators to support your professional journey. 
              Additionally, we provide development services and certifications to help students and professionals excel in today’s tech-driven world. 🚀              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        className="px-4 py-8 relative flex flex-col items-center justify-center my-16 lg:my-48"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={flipVariants}
      >
        {/* Background Blur for Desktop */}
        <div className="absolute hidden lg:block w-[50rem] h-[40rem] rounded-2xl blur-xl opacity-40 bg-[#056777] ml-[30rem]"></div>
        {/* Background Blur for Mobile */}
        <div className="absolute block lg:hidden w-full h-[30rem] rounded-2xl blur-xl opacity-40 bg-[#056777] top-1/2 transform -translate-y-1/2"></div>

        <div className="relative z-10">
          <h1 className="text-[#CF9274] text-center text-3xl lg:text-4xl font-bold mb-8 lg:mb-16">
            OUR VISION
          </h1>
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12 items-center">
            <div className="max-w-lg">
              <p className="text-white text-lg lg:text-2xl text-justify">
              At KodeVortex, our vision is to redefine tech education by making high-quality, industry-aligned learning accessible to everyone. 
              We aspire to create a future where learners seamlessly transition from academia to the professional world, equipped with the cutting-edge skills, problem-solving mindset, and technical expertise required to thrive in the evolving tech landscape.
              </p>
              <p className="text-white text-lg lg:text-2xl text-justify">
              By fostering innovation, hands-on learning, and career-driven mentorship, we aim to build a community of skilled professionals and future leaders who drive technological advancements and shape the digital future. 🚀
              </p>
            </div>
            <div className="w-full lg:w-[28rem] h-[20rem] lg:h-[24rem] bg-gray-300 rounded-[1rem] lg:rounded-[2rem]"></div>
          </div>
        </div>
      </motion.div>

      <OurTeam1 />
    </div>
  );
};

export default Aboutuspage;
