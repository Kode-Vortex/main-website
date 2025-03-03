/* eslint-disable no-unused-vars */
import React from "react";
import "./ServicePage.css";
import imagee from "./backg.png";
import image1 from "./image.jpeg";
import serimage from "./Rectangle.png";

const ServicePage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row">
        <div className="relative flex justify-center items-center w-full lg:w-[50%]">
          <img
            className="h-[300px] w-full object-cover lg:h-[622px] lg:w-[540px]"
            src={imagee}
            alt="Background"
          />
          <h1 className="absolute w-[80%] lg:w-72 tracking-wide p-1 text-2xl sm:text-3xl lg:text-5xl text-white rounded-md shadow-md text-center bg-black/30 lg:bg-transparent">
            IF WE CAN TOUCH YOU THEN{" "}
            <span className="defi-col">DEFINITELY</span>, WE CAN IMPLEMENT IT
          </h1>
        </div>
        <div className="flex  flex-col justify-center items-center w-full lg:w-[50%] space-y-6 mt-6 lg:mt-0">
          <div className="flex flex-col  sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <img
              src={image1}
              className="rounded-3xl shadow-lg w-full sm:w-52 h-44 object-cover max-w-[300px]"
              alt="Service"
            />
            <img
              src={image1}
              className="rounded-3xl   shadow-lg w-full sm:w-52 h-44 object-cover max-w-[300px] sm:mt-12"
              alt="Service"
            />
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4  mt-4">
            <img
              src={image1}
              className="rounded-3xl shadow-lg w-full sm:w-52 h-44 object-cover max-w-[300px]"
              alt="Service"
            />
            <img
              src={image1}
              className="rounded-3xl shadow-lg w-full sm:w-52 h-44 object-cover max-w-[300px] sm:mt-12"
              alt="Service"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-white mt-8 lg:mt-16">
        <div className="flex flex-col items-center p-4 lg:px-48 xl:px-96">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-8">
            SERVICES
          </h1>
          <div className="w-full lg:max-w-none">
            <p className="text-left lg:text-center text-sm sm:text-base lg:text-lg mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              est aliquid quas error ea a voluptas nulla dolorem illum excepturi
              pariatur quos praesentium nostrum sapiente optio perspiciatis,
              obcaecati eum modi?
            </p>
            <p className="text-left lg:text-center text-sm sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              est aliquid quas error ea a voluptas nulla dolorem illum
              excepturi pariatur quos.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center mt-8 px-4">
          <img
            className="w-full max-w-[90%] md:max-w-md lg:max-w-2xl"
            src={serimage}
            alt="Services Background"
          />
          <div className="absolute w-[85%] sm:w-auto p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <button
                  key={index}
                  className="py-3 px-5 lg:py-6 lg:px-10 bg-gradient-to-r from-[#697993] to-[#2d3748] text-white rounded-full shadow-md hover:scale-105 transition-transform text-center text-sm lg:text-lg"
                >
                  Feature {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Training Section */}
      <div className="text-white mt-12 lg:mt-16">
        <div className="flex flex-col items-center p-4 lg:px-48 xl:px-96">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-8">
            TRAINING
          </h1>
          <div className="w-full lg:max-w-none">
            <p className="text-left lg:text-center text-sm sm:text-base lg:text-lg mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              est aliquid quas error ea a voluptas nulla dolorem illum excepturi
              pariatur quos praesentium nostrum sapiente optio perspiciatis,
              obcaecati eum modi?
            </p>
            <p className="text-left lg:text-center text-sm sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              est aliquid quas error ea a voluptas nulla dolorem illum
              excepturi pariatur quos.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center mt-8 px-4">
          <img
            className="w-full max-w-[90%] md:max-w-md lg:max-w-2xl"
            src={serimage}
            alt="Training Background"
          />
          <div className="absolute w-[85%] sm:w-auto p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <button
                  key={index}
                  className="py-3 px-5 lg:py-6 lg:px-10 bg-gradient-to-r from-[#687894] to-[#2d3748] text-white rounded-full shadow-md hover:scale-105 transition-transform text-center text-sm lg:text-lg"
                >
                  Feature {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-20">
        <hr className="bg-gradient-to-r from-[#4a5568] to-[#2d3748] h-400 w-full h-[0.1px] my-8 lg:my-16" />
      </div>
    </>
  );
};

export default ServicePage;
