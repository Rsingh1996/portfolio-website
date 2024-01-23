import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Navbar from "./Navbar";
import About from "./About.jsx";
import Skills from "./Skills";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import { ClassNames } from "@emotion/react";

const Home = () => {
  return (
    <div className=" w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p1 className="text-yellow-600">My name is</p1>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Rahul Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a React Developer
        </h2>
        <p1 className="text-[#8892b0] py-4 max-w-[700px]">lorum epsom</p1>
        <div>
          <button className="text-white group border-2 px-6 py-3 mx-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600">
            View Work{" "}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
