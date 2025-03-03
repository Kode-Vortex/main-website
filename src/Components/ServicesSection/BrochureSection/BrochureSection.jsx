import { DownloadCloud } from "lucide-react"; // For the icon
import "./BrochureSection.css";
import rec_65 from "./Rectangle 65.png";

const BrochureSection = () => {
  return (
    <div className="w-full ">
      {/* Main Content Section */}
      <div className="relative min-h-[200px] md:min-h-[300px] flex justify-center items-center">
        {/* Background Overlapping Layers */}
        <div className="absolute bg-broc-col1 w-[90%] md:w-[80%] rounded-2xl h-[100px] md:h-[140px] skew-y-[5deg] z-10 top-10 md:top-20" />
        <div className="absolute bg-broc-col2 w-[90%] md:w-[80%] rounded-2xl h-[80px] md:h-[120px] skew-y-[-6deg] z-10" />

        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row items-center relative bg-slate-600 h-auto md:h-36 px-4 md:px-10 w-[90%] md:w-[80%] rounded-md shadow-xl z-10 py-6 md:py-0">
          {/* Left Image - Hidden below 1024px */}
          <div className="hidden lg:block w-[40%] md:w-[40%] mb-4 md:mb-0">
            <img
              src={rec_65}
              alt="Brochure"
              className="transform w-40 md:w-60 -rotate-6 absolute md:top-[-70px] md:left-[-30px] top-[-50px] left-[-20px] shadow-lg"
            />
          </div>

          {/* Download Button */}
          <div className="w-full flex justify-center md:justify-end">
            <a
              href="./Brochure.pdf"
              download="./Brochure.pdf"
              className="cursor-pointer bg-orange-400 hover:bg-orange-500 px-4 py-2 flex items-center rounded-md shadow-lg text-black font-medium text-sm md:text-base"
            >
              <p className="pr-4 md:pr-6">Wants to know more?</p>
              <DownloadCloud className="mr-2" />
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-4 md:mx-24 my-6 md:my-10">
        <h1 className="text-white text-sm md:text-base text-start">
          Unlock your potential with expert-led training, industry-focused courses, and hands-on projects. Gain real-world experience through live collaborations with top companies. Get expert reviews to refine your projects and stay ahead in your career. Join us to bridge the gap between learning and industry success!
        </h1>
      </div>
    </div>
  );
};

export default BrochureSection;