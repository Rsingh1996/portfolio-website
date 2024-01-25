import React from "react";
import makeyourtrip from "../assets/makeyourtrip.png";

const Projects = () => {
  return (
    <div className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
            Projects
          </p>
          <p className="py-4">Checkout some of my recent Projects</p>
        </div>
        <div
          style={{ backgroundImage: `url(${makeyourtrip})` }}
          className="grid sm:grid-cols-2 md:grid-cols-3: gap-4 "
        >
          <div className="shadow-lg shadow-[#040c26] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
