import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImProfile } from "react-icons/im";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className=" fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div></div>
      {/* manu */}
      <ul className=" hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contract</li>
      </ul>
      {/* hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile maue */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* social icons*/}
      <div className="hidden lg:flex    fixed flex-col top-[35%] left-0">
        <ul>
          <li className=" flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className=" flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className=" flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#788db7]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="/"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className=" flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#455f38]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="/"
            >
              Resume <ImProfile size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
