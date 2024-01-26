import {} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Skills from "./component/Skills";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
