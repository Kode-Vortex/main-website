import { motion } from "framer-motion";
import arrow from "./arrow.png";
import polygon from "../../../public/pp.png";

const heroVariants = {
  hidden: { opacity: 0, x: -100, rotate: -5, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotate: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 15, duration: 0.8 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8, rotate: 5 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 50, damping: 10, duration: 0.8 }
  }
};

const whyUsVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: 3 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const InternshipPage = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="px-[5%] overflow-hidden h-auto md:h-[47rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={heroVariants}
      >
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-24 pt-16">
          {/* Left Section */}
          <div className="text-white pt-8 md:pt-16">
            <h1 className="text-3xl md:text-4xl font-semibold pl-8">
              Are you looking for an{" "}
              <span className="text-[#CF9274] font-bold">INTERNSHIP?</span>{" "}
            </h1>
            <div className="tracking-wider mt-6 text-2xl md:text-[200%] flex flex-col md:flex-row items-center md:items-start space-x-4 font-bold pt-4">
              <img src={arrow} alt="arrow" className="md:mb-0" />
              <button className="bg-[#6764C9] px-[4%] text-[80%] py-[2%] rounded-full">
                Find Your Perfect Career Path with Us!
              </button>
            </div>
            <h1 className="pt-2 text-xl md:text-2xl text-start md:mx-6 tracking-wide mt-10">
            Kickstart your career with a hands-on, industry-focused internship at KodeVortex. Gain real-world skills, expert mentorship, and work on cutting-edge projects to enhance your technical expertise and build a strong portfolio. Take the next step toward your dream career—apply today! 🔥
            </h1>
          </div>

          {/* Right Section */}
          <div className="relative">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              <div className="absolute top-4 left-4 w-full h-full bg-[#4A4E52] rounded-[50px]"></div>
              <motion.div
                className="absolute w-full h-full top-16 right-10 bg-[#056777] rounded-[50px]"
                initial={{ scale: 0.9, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              ></motion.div>
            </div>
            <div className="absolute lg:-left-60 -left-24 hidden md:block">
              <div className="w-36 absolute ml-32 h-20 border-[17px] border-white border-b-0 rounded-t-full bg-transparent"></div>
              <div className="w-36 absolute left-16 top-10 h-20 border-[17px] border-white border-t-0 rounded-b-full bg-transparent"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Internship Cards Section */}
      <motion.div
        className=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={cardVariants}
      >
        <h1 className="text-[#CF9274] font-bold text-3xl md:text-4xl text-center">
          EXPLORE CAREER INTERNSHIPS
        </h1>
        <div className="mt-16 md:mt-28 mx-6 flex flex-col space-y-16 md:space-y-36">
          {/* Creative Enthusiast Card */}
          <div className="flex items-center justify-center">
            <motion.div
              className="relative bg-[#0f0f2d] text-white w-full md:w-[80rem] h-auto md:h-[20rem] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row"
              initial={{ opacity: 0, x: -50, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
            >
              <div className="absolute flex justify-center items-center text-2xl md:text-3xl top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-[20rem] md:w-[30rem] h-[4rem] md:h-[5rem] bg-[#056777] blur-xl opacity-95"></div>
                <h1 className="absolute text-center text-3xl text-white md:text-4xl font-semibold">
                  🎨 CREATIVE ENTHUSIAST
                </h1>
              </div>

              {/* Left Section */}
              <div className="flex relative flex-col items-center justify-center w-full md:w-1/3 mt-8 md:mt-0">
                <img src={polygon} alt="polygon" className="w-32 md:w-48" />
                <div className="absolute text-black font-bold flex flex-col items-center justify-center rounded-full">
                  <span className="text-4xl md:text-6xl">UI / UX</span>
                  <span className="text-xl md:text-2xl">Design Intern</span>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full md:w-2/3 flex flex-col justify-center pl-0 md:pl-10 mt-8 md:mt-0">
                <ul className="text-lg md:text-xl mt-8 md:mt-24 font-bold">
                  <li>→ Design intuitive</li>
                  <li>→ User-friendly interfaces</li>
                  <li>→ Master Figma, Adobe XD, and prototyping tools.</li>
                </ul>

                <div className="mt-6 flex flex-col items-end mr-0 md:mr-24">
                  <button className="bg-[#CF9274] font-bold text-black px-6 py-2 rounded-full shadow hover:bg-orange-400 w-40">
                    Apply now
                  </button>
                  <p className="flex flex-col text-lg mt-2">
                    Send your resume :{" "}
                    <a
                      href="mailto:vijay.singh@kodevortex.in"
                      className="text-[#056777]"
                    >
                      vijay.singh@kodevortex.in
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full-Stack Builder Card */}
          <div className="flex items-center justify-center">
            <motion.div
              className="relative bg-[#0f0f2d] text-white w-full md:w-[80rem] h-auto md:h-[20rem] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row"
              initial={{ opacity: 0, x: 50, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
            >
              <div className="absolute flex justify-center items-center text-2xl md:text-3xl top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-[20rem] md:w-[30rem] h-[4rem] md:h-[5rem] bg-[#056777] blur-xl opacity-95"></div>
                <h1 className="absolute text-3xl md:text-4xl font-semibold">
                  🌐 FULL-STACK BUILDER
                </h1>
              </div>

              {/* Left Section */}
              <div className="flex relative flex-col items-center justify-center w-full md:w-1/3 mt-8 md:mt-0">
                <img src={polygon} alt="polygon" className="w-32 md:w-48" />
                <div className="absolute text-black font-bold flex flex-col items-center justify-center rounded-full">
                  <span className="text-4xl md:text-6xl">WEB D</span>
                  <span className="text-xl md:text-2xl">Intern</span>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full md:w-2/3 flex flex-col justify-center pl-0 md:pl-10 mt-8 md:mt-0">
                <ul className="text-lg md:text-xl mt-8 md:mt-24 font-bold">
                  <li>→ Build dynamic and responsive websites</li>
                  <li>→ Work with MERN stack, React, and Next.js.</li>
                </ul>

                <div className="mt-6 flex flex-col items-end mr-0 md:mr-24">
                  <button className="bg-[#CF9274] font-bold text-black px-6 py-2 rounded-full shadow hover:bg-orange-400 w-40">
                    Apply now
                  </button>
                  <p className="flex flex-col text-lg mt-2">
                    Send your resume :{" "}
                    <a
                      href="mailto:vijay.singh@kodevortex.in"
                      className="text-[#056777]"
                    >
                      vijay.singh@kodevortex.in
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={whyUsVariants}
      >
        <div className="flex flex-col text-3xl md:text-4xl leading-16 font-bold tracking-wide items-center">
          <div className="py-16 md:py-24">
            <h1 className="text-[#056777]">
              "Your career isn’t just a job—it’s a journey.
            </h1>
            <h1 className="text-white">Let’s help you find the right path!"</h1>
          </div>

          <div className="relative w-full px-[5%]">
            <div className="flex flex-col md:flex-row">
              <div className="order-2 md:order-1">
                <h1
                  className="text-6xl md:text-9xl text-transparent"
                  style={{ WebkitTextStroke: "2px gray" }}
                >
                  KODE
                </h1>
                <h1
                  className="text-6xl md:text-9xl text-transparent"
                  style={{ WebkitTextStroke: "2px gray" }}
                >
                  VORTEX
                </h1>
              </div>
              <h1 className="text-[#CF9274] text-2xl md:text-3xl order-1 md:order-2 mt-8 md:mt-0">
                WHY CHOOSE AN INTERNSHIP WITH US
              </h1>
            </div>
            <div className="relative bottom-8 md:bottom-16 left-0 md:left-40 flex flex-col md:flex-row">
              <div className="border-[1rem] md:border-[2rem] border-[#056777] bg-black text-white text-4xl md:text-6xl p-4 md:p-6 w-[10rem] md:w-[20rem] h-[10rem] md:h-[20rem]">
                1.
              </div>
              <div className="absolute left-0 md:left-40 top-[4rem] md:top-[7rem] text-white">
                <h1>REAL WORLD PROJECT , </h1>
                <h1> NO BUSY WORK</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-6 flex flex-col md:flex-row items-end justify-end w-full px-[5%]">
          <div className="relative bottom-8 md:bottom-16 left-0 md:left-60 flex flex-col md:flex-row">
            <div className="border-[1rem] md:border-[2rem] flex justify-end border-[#54677B] bg-[#181739] text-white text-4xl md:text-6xl p-4 md:p-6 w-[10rem] md:w-[20rem] h-[10rem] md:h-[20rem]">
              2.
            </div>
            <div className="absolute -left-0 md:-left-60 text-2xl md:text-4xl font-bold top-[4rem] md:top-[7rem] text-white">
              <h1>WORK WITH INDUSTRY </h1>
              <h1> PROS AND MENTORS</h1>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <h1
              className="text-6xl md:text-8xl text-transparent"
              style={{ WebkitTextStroke: "2px gray" }}
            >
              INTERN
            </h1>
          </div>
        </div>

        <div className="relative w-full bottom-8 md:bottom-16 left-0 md:left-60 flex flex-col md:flex-row">
          <div className="border-[1rem] md:border-[2rem] border-[#056777] bg-black text-white text-4xl md:text-6xl p-4 md:p-6 w-[10rem] md:w-[20rem] h-[10rem] md:h-[20rem]">
            3.
          </div>
          <div className="absolute left-0 md:left-40 text-2xl md:text-4xl font-bold top-[5rem] md:top-[9rem] text-white">
            <h1>FLEXIBLE WORK ENVIRONMENT</h1>
          </div>
        </div>

        <div className="flex justify-end mx-[5%]">
          <div className="relative bottom-8 md:bottom-16 right-0 md:right-48 flex flex-col md:flex-row">
            <div className="border-[1rem] md:border-[2rem] flex justify-end border-[#54677B] bg-[#181739] text-white text-4xl md:text-6xl p-4 md:p-6 w-[10rem] md:w-[20rem] h-[10rem] md:h-[20rem]">
              4.
            </div>
            <div className="absolute -left-0 md:-left-48 text-2xl md:text-4xl font-bold top-[4rem] md:top-[7rem] text-white">
              <h1>GAIN EXPERIENCE + </h1>
              <h1> CERTIFICATE</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default InternshipPage;
