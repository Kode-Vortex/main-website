import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTypewriter } from "react-simple-typewriter";

const AboutUsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  const [text] = useTypewriter({
    words:[
        "SHIVAM PAISAL  "
      ],
      loop:{},
      typeSpeed: 80,
      deleteSpeed: 80
})
    return (
      <div className='h-[500px]'>
      <div className='relative flex'>
        <div className="p-4 md:p-8 mt-16 lg:p-12">
        <motion.h1
          className="text-white text-center pb-4 text-2xl md:text-3xl lg:text-4xl font-mono tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 0.6 }}
        >
          ABOUT US
        </motion.h1>
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row gap-8 py-4 md:py-6 text-white items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-zinc-800 overflow-hidden mb-4 md:mb-0">
            {/* <img className="w-full h-full object-cover" src="" alt="about-us" /> */}
          </div>
          <div className="text-center md:text-left md:space-y-2 lg:space-y-4 w-full md:w-[70%]">
            <h1 className="md:text-2xl text-3xl lg:text-4xl font-sans tracking-wider font-medium">
              {text}
            </h1>
            <p className="text-lg px-1 py-6 md:text-xl lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro 
            </p>
            <p className="text-base md:text-base lg:text-lg leading-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis velit, vitae ducimus sequi doloribus esse, aut ex aspernatur tempore harum placeat. Impedit necessitatibus veritatis fugiat distinctio quae, repellat provident!
            </p>
          </div>
        </motion.div>

      </div>
      </div>
            <div className="bg-grad-homepage relative left-[1250px]   bottom-96 "></div>
      </div>
  )
}

export default AboutUsSection