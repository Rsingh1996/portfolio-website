import React from "react";
import Navbar from "./Navbar";
import About from "./About.jsx";
import Skills from "./Skills";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <h1>My Portfolio website</h1>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
