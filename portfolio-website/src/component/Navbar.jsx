import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className=" fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]">
      <div></div>
      {/* manu */}
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contract</li>
        </ul>
      </div>
      {/* hamburger*/}
      <div className="hidden">
        <FaBars />
      </div>
      {/* mobile maue */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contract</li>
      </ul>
      {/* social icons*/}
      <div></div>
    </div>
  );
};

export default Navbar;
